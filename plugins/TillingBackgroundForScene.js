
Scene_Menu.prototype.createBackground = function()
{
	this._BS = new TilingSprite();
	this._BS.move(0, 0, Graphics.width, Graphics.height);
	this._BS.bitmap = ImageManager.loadPicture("Utilities/Background");
	this.addChild(this._BS);
}

Scene_Menu.prototype.update = function()
{
	Scene_MenuBase.prototype.update.call(this);
	this._BS.origin.x += +1
}

Scene_ItemBase.prototype.createBackground = function()
{
	this._BS = new TilingSprite();
	this._BS.move(0, 0, Graphics.width, Graphics.height);
	this._BS.bitmap = ImageManager.loadPicture("Utilities/Background");
	this.addChild(this._BS);
}

Scene_ItemBase.prototype.update = function()
{
	Scene_MenuBase.prototype.update.call(this);
	this._BS.origin.x += +1
}

Scene_Skill.prototype.createBackground = function()
{
	this._BS = new TilingSprite();
	this._BS.move(0, 0, Graphics.width, Graphics.height);
	this._BS.bitmap = ImageManager.loadPicture("Utilities/Background");
	this.addChild(this._BS);
}

Scene_Skill.prototype.update = function()
{
	Scene_MenuBase.prototype.update.call(this);
	this._BS.origin.x += +1
}

Scene_Equip.prototype.createBackground = function()
{
	this._BA = new TilingSprite();
	this._BA.move(0, 0, Graphics.width, Graphics.height);
	this._BA.bitmap = ImageManager.loadPicture("Utilities/Background");
	this.addChild(this._BA);
}

Scene_Equip.prototype.update = function()
{
	Scene_MenuBase.prototype.update.call(this);
	this._BA.origin.x += +1
}


Scene_Status.prototype.createBackground = function()
{
	this._BA = new TilingSprite();
	this._BA.move(0, 0, Graphics.width, Graphics.height);
	this._BA.bitmap = ImageManager.loadPicture("Utilities/Background");
	this.addChild(this._BA);
}

Scene_Status.prototype.update = function()
{
	Scene_MenuBase.prototype.update.call(this);
	this._BA.origin.x += +1
}


Scene_Options.prototype.createBackground = function()
{
	this._BA = new TilingSprite();
	this._BA.move(0, 0, Graphics.width, Graphics.height);
	this._BA.bitmap = ImageManager.loadPicture("Utilities/Background");
	this.addChild(this._BA);
}

Scene_Options.prototype.update = function()
{
	Scene_MenuBase.prototype.update.call(this);
	this._BA.origin.x += +1
}


Scene_File.prototype.createBackground = function()
{
	this._BA = new TilingSprite();
	this._BA.move(0, 0, Graphics.width, Graphics.height);
	this._BA.bitmap = ImageManager.loadPicture("Utilities/Background");
	this.addChild(this._BA);
}

Scene_File.prototype.update = function()
{
	Scene_MenuBase.prototype.update.call(this);
	this._BA.origin.x += +1
}

Scene_Save.prototype.createBackground = function()
{
	this._BA = new TilingSprite();
	this._BA.move(0, 0, Graphics.width, Graphics.height);
	this._BA.bitmap = ImageManager.loadPicture("Utilities/Background");
	this.addChild(this._BA);
}

Scene_Save.prototype.update = function()
{
	Scene_MenuBase.prototype.update.call(this);
	this._BA.origin.x += +1
}


Scene_Load.prototype.createBackground = function()
{
	this._BA = new TilingSprite();
	this._BA.move(0, 0, Graphics.width, Graphics.height);
	this._BA.bitmap = ImageManager.loadPicture("Utilities/Background");
	this.addChild(this._BA);
}

Scene_Load.prototype.update = function()
{
	Scene_MenuBase.prototype.update.call(this);
	this._BA.origin.x += +1
}


Scene_GameEnd.prototype.createBackground = function()
{
	this._BA = new TilingSprite();
	this._BA.move(0, 0, Graphics.width, Graphics.height);
	this._BA.bitmap = ImageManager.loadPicture("Utilities/Background");
	this.addChild(this._BA);
}

Scene_GameEnd.prototype.update = function()
{
	Scene_MenuBase.prototype.update.call(this);
	this._BA.origin.x += +1
}

Scene_Shop.prototype.createBackground = function()
{
	this._BA = new TilingSprite();
	this._BA.move(0, 0, Graphics.width, Graphics.height);
	this._BA.bitmap = ImageManager.loadPicture("Utilities/Background");
	this.addChild(this._BA);
}

Scene_Shop.prototype.update = function()
{
	Scene_MenuBase.prototype.update.call(this);
	this._BA.origin.x += +1
}