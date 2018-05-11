//--------------------------------------------------------
// SOUL_MV Maid Special Skill Cut In.js
//--------------------------------------------------------
/*:
* @plugindesc Apply some notetag
* @author Z
*
*/

(function(){
	var Imported = Imported || {};
	Imported.Maid = true;
	var effect = effect || {};
	effect.Maid = {};
    effect.Maid.battleInitialize = Scene_Battle.prototype.initialize;
    effect.Maid.battleCreate = Scene_Battle.prototype.create;
    effect.Maid.battleUpdate = Scene_Battle.prototype.update;
    effect.Maid.battleperformActionEnd = Window_BattleLog.prototype.performActionEnd;
    
    Window_BattleLog.prototype.performActionStart = function(subject, action) {
      var item = action.item();
      if (item.meta.anime && item.meta.anime === 'Gram') {
          if (subject instanceof Game_Actor) {
			 $gameTemp.reserveCommonEvent(7);
             SceneManager._scene.updateMaid = true;
          } else {
              if ($dataEnemies[subject._enemyId].meta.enemyAnime === "allow") {
                  SceneManager._scene.showMaid($dataEnemies[subject._enemyId].name + "_" + action.item().name);
              }
            SceneManager._scene.updateMaid = true;
          }

      }
      subject.performActionStart(action);
    };

    Scene_Battle.prototype.update = function() {
        effect.Maid.battleUpdate.call(this);
    };

})();