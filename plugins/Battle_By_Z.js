/* @Plugindesc Mengubah Battle Processing.
* @author Z
*/


var Game_Battle_Z = Scene_Battle.prototype.createActorCommandWindow;

Game_Battle_Z.prototype.createscene = function()
{
	Game_Battle_Z.prototype.createscene.apply(this);
}

Game_Battle_Z.prototype.gambar = function()
{
	this.gambarchar_1 = new Sprite();
	this.gambarchar_1.bitmap = ImageManager.loadPicture("Background");
	this.gambarchar_1.x = Graphics.width / 2;
	this.gambarchar_1.y = Graphics.height / 2;
	this.addChild = (this.gambarchar_1);
	alert("plugin battle berjalan");
}


alert("Plugin Berjalan");