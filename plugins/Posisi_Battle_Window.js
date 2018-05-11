

var commandkelompok = Scene_Battle.prototype.createPartyCommandWindow;

var commandtarung = Scene_Battle.prototype.createActorCommandWindow;

var posisireimu1 = Sprite_Reimu.prototype.updateposisi;

var attack1 = Scene_Battle.prototype.createReimu2;

Scene_Battle.prototype.createPartyCommandWindow = function() 
{
    commandkelompok.call(this);
    this._partyCommandWindow.x = 350;
    this._partyCommandWindow.y = 150;
};

Scene_Battle.prototype.createActorCommandWindow = function() {
    commandtarung.call(this);
	//this.createReimu1();
	//this.createReimu2();
	//this.createReimu3();
    this._actorCommandWindow.x = 350;
    this._actorCommandWindow.y = 150;
};

Game_BattlerBase.prototype.canAttack = function() {
    return this.canUse($dataSkills[this.attackSkillId()]);
};

/*
Sprite_Reimu.prototype.updateposisi = function()
{
	this.x = -100;
	this.y = 0;
};
*/