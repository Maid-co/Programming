



Game_Battler.prototype.refresh = function() {
    Game_BattlerBase.prototype.refresh.call(this);
    if (this.hp === 0) {
		this.createReimu1();
		this.addState(this.deathStateId());
    } else {
        this.removeState(this.deathStateId());
    }
};


/*
function Game_GambarReimu() {
    this.initialize.apply(this, arguments);
}

Game_GambarReimu.prototype = Object.create(Game_GambarReimuBase.prototype);
Game_GambarReimu.prototype.constructor = Game_GambarReimu;

Game_GambarReimu.prototype.initialize = function() {
    Game_BattlerBase.prototype.initialize.call(this);
};

Game_GambarReimu.prototype.refresh = function() {
    Game_GambarReimu.prototype.refresh.call(this);
    if (Game_Battler.prototype.hp === 0) {
        Scene_Battle.prototype.createReimu1();
    } else {
        this.removeState(this.deathStateId());
    }
};
*/