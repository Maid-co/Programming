
function Sprite_Reimu() 
{
    this.initialize.apply(this, arguments);
};

Sprite_Reimu.prototype = Object.create(Sprite_Base.prototype);

Sprite_Reimu.prototype.constructor = Sprite_Reimu;

Sprite_Reimu.prototype.initialize = function() 
{
    Sprite_Base.prototype.initialize.call(this);
	this.buatBitmap();
};

Sprite_Reimu.prototype.buatBitmap = function()
{
	this.bitmap = ImageManager.loadPicture('Reimu1');
};

Sprite_Reimu.prototype.update = function()
{
	Sprite_Base.prototype.update.call(this);
	this.updateposisi();
};

Sprite_Reimu.prototype.updateposisi = function()
{
	this.x = -10;
	this.y = 400;
};
Scene_Battle.prototype.commandAttack = function() {
    BattleManager.inputtingAction().setAttack();
    this.selectEnemySelection();
};
/*Scene_Menu.prototype.create = function() 
{
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
    this.createGoldWindow();
    this.createStatusWindow();
	this.createReimu1();
};
*/

Scene_Battle.prototype.createReimu1 = function()
{
	this._Reimu = new Sprite_Reimu();
	this.addChild(this._Reimu);
}

Scene_Battle.prototype.createReimu2 = function()
{
	this._Reimu2 = new Sprite();
	this._Reimu2.bitmap = ImageManager.loadPicture("Reimu2");
	this._Reimu2.x = 470;
	this._Reimu2.y = 200;
	this.addChild(this._Reimu2);
}

Scene_Battle.prototype.createReimu3 = function()
{
	this._Reimu3 = new Sprite();
	this._Reimu3.bitmap = ImageManager.loadPicture("Reimu3");
	this._Reimu3.x = 570;
	this._Reimu3.y = 400;
	this.addChild(this._Reimu3);
}

Game_BattlerBase.prototype.createReimu2 = function()
{
	this._Reimu2 = new Sprite();
	this._Reimu2.bitmap = ImageManager.loadPicture("Reimu2");
	this._Reimu2.x = Graphics.width / 2;
	this._Reimu2.y = Graphics.height / 2;
	this.addChild(this._Reimu2);
}


