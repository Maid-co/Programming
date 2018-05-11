========================================================================
*/

//#region Namespace and Imported
var Imported=Imported||{};
Imported.MUE_AntiLag=true;
var MUE=MUE||{};
MUE.AntiLag=MUE.AntiLag||{};
//#endregion

(function($) {
    //#region varables
    var param=PluginManager.parameters('Anti_Lag');
    $.UseAniTileFix=eval(String(param['Use Animation Edits']));
    $.AniValue=Number(param['Animation Loop']||1);
    $.ChangeToNormalDraw=eval(String(param['No Animated Tiles']));
    //#endregion

    // Replaces the original refreshTileEvents to filter the _events array directly
    Game_Map.prototype.refreshTileEvents=function() {
        this.tileEvents=this._events.filter(function(event) {
            return !!event&&event.isTile();
        });
    };

    // Replaces the original eventsXy to filter the _events array directly
    Game_Map.prototype.eventsXy=function(x,y) {
        return this._events.filter(function(event) {
            return !!event&&event.pos(x,y);
        });
    };

    // Replaces the original eventsXyNt to filter the _events array directly
    Game_Map.prototype.eventsXyNt=function(x,y) {
        return this._events.filter(function(event) {
            return !!event&&event.posNt(x,y);
        });
    };

    if($.UseAniTileFix) {
        $.SceneUpdateCount=0;
        /**
     * @method _paintAllTiles
     * @param {Number} startX
     * @param {Number} startY
     * @private
     */
        Tilemap.prototype._paintAllTiles=function(startX,startY) {
            var tileCols=Math.ceil(this._width/this._tileWidth)+1;
            var tileRows=Math.ceil(this._height/this._tileHeight)+1;
            for(var y=0;y<tileRows;y++) {
                for(var x=0;x<tileCols;x++) {
                    if(this.animationCount>10)
                        if(this.animationCount/$.AniValue!=Math.floor(this.animationCount/$.AniValue)) return;
                    this._paintTiles(startX,startY,x,y);
                }
            }
        };
        Scene_Base.prototype.updateChildren=function() {
            this.children.forEach(function(child) {
                if(typeof child==Spriteset_Map) {
                    if($.SceneUpdateCount==1) {

                    } else if($.SceneUpdateCount<3)
                        return;
                    else {
                        $.SceneUpdateCount=0;
                        return;
                    }
                }
                if(child.update) {

                    child.update();
                }
            });
        };
        Scene_Map.prototype.update=function() {
            this.updateDestination();
            this.updateMainMultiply();
            if(this.isSceneChangeOk()) {
                this.updateScene();
            } else if(SceneManager.isNextScene(Scene_Battle)) {
                this.updateEncounterEffect();
            }

            this.updateWaitCount();
            $.SceneUpdateCount++;

            Scene_Base.prototype.update.call(this);
        };
        //replace the games drawing of animated tiles
        /**
         * @method _drawAutotile
         * @param {Bitmap} bitmap
         * @param {Number} tileId
         * @param {Number} dx
         * @param {Number} dy
         * @private
         */
        Tilemap.prototype._drawAutotile=function(bitmap,tileId,dx,dy) {
            var autotileTable=Tilemap.FLOOR_AUTOTILE_TABLE;
            var kind=Tilemap.getAutotileKind(tileId);
            var shape=Tilemap.getAutotileShape(tileId);
            var tx=kind%8;
            var ty=Math.floor(kind/8);
            var bx=0;
            var by=0;
            var setNumber=0;
            var isTable=false;
            var temp1=4;
            var temp2=3;
            if($.ChangeToNormalDraw) {
                temp1=1;
                temp2=1;
            }
            if(Tilemap.isTileA1(tileId)) {
                var waterSurfaceIndex=[0,1,2,1][this._animationFrame%temp1];
                setNumber=0;
                if(kind===0) {
                    bx=waterSurfaceIndex*2;
                    by=0;
                } else if(kind===1) {
                    bx=waterSurfaceIndex*2;
                    by=3;
                } else if(kind===2) {
                    bx=6;
                    by=0;
                } else if(kind===3) {
                    bx=6;
                    by=3;
                } else {
                    bx=Math.floor(tx/4)*8;
                    by=ty*6+Math.floor(tx/2)%2*3;
                    if(kind%2===0) {
                        bx+=waterSurfaceIndex*2;
                    }
                    else {
                        bx+=6;
                        autotileTable=Tilemap.WATERFALL_AUTOTILE_TABLE;
                        by+=this._animationFrame%temp2;
                    }
                }
            } else if(Tilemap.isTileA2(tileId)) {
                setNumber=1;
                bx=tx*2;
                by=(ty-2)*3;
                isTable=this._isTableTile(tileId);
            } else if(Tilemap.isTileA3(tileId)) {
                setNumber=2;
                bx=tx*2;
                by=(ty-6)*2;
                autotileTable=Tilemap.WALL_AUTOTILE_TABLE;
            } else if(Tilemap.isTileA4(tileId)) {
                setNumber=3;
                bx=tx*2;
                by=Math.floor((ty-10)*2.5+(ty%2===1?0.5:0));
                if(ty%2===1) {
                    autotileTable=Tilemap.WALL_AUTOTILE_TABLE;
                }
            }

            var table=autotileTable[shape];
            var source=this.bitmaps[setNumber];

            if(table&&source) {
                var w1=this._tileWidth/2;
                var h1=this._tileHeight/2;
                for(var i=0;i<4;i++) {
                    var qsx=table[i][0];
                    var qsy=table[i][1];
                    var sx1=(bx*2+qsx)*w1;
                    var sy1=(by*2+qsy)*h1;
                    var dx1=dx+(i%2)*w1;
                    var dy1=dy+Math.floor(i/2)*h1;
                    if(isTable&&(qsy===1||qsy===5)) {
                        var qsx2=qsx;
                        var qsy2=3;
                        if(qsy===1) {
                            qsx2=[0,3,2,1][qsx];
                        }
                        var sx2=(bx*2+qsx2)*w1;
                        var sy2=(by*2+qsy2)*h1;
                        bitmap.blt(source,sx2,sy2,w1,h1,dx1,dy1,w1,h1);
                        dy1+=h1/2;
                        bitmap.blt(source,sx1,sy1,w1,h1/2,dx1,dy1,w1,h1/2);
                    } else {
                        bitmap.blt(source,sx1,sy1,w1,h1,dx1,dy1,w1,h1);
                    }
                }
            }
        };
        Game_Event.prototype.update=function() {
            Game_Character.prototype.update.call(this);
            if(!this._animationDisabled) {
                if(this._moveType==0) {
                    this._walkAnime=false;
                    this._stepAnime=false;
                    this._animationDisabled=true;
                }
            }
            this.checkEventTriggerAuto();
            this.updateParallel();
        };
    }
})(MUE.AntiLag);