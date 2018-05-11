/*:
* @param Background
* @desc background sprite
* @default Background
* @plugindesc Menampilkan gambar bergerak
* @author "Z"
*/

var params = PluginManager.parameters('Bc');

var pn = String(params['Background'] || "Background");

var ST = Scene_Title.prototype.create;
var STU = Scene_Title.prototype.update;


Scene_Title.prototype.P;

Scene_Title.prototype.create = function() 
{
	ST.call(this);
	this.cp();
};

Scene_Title.prototype.cp = function()
{
	this.P = new TilingSprite();
	this.P.bitmap = ImageManager.loadPicture(pn);
	this.P.move(0, 575, Graphics.width, Graphics.height);
	this.addChild(this.P);
	this.A = new Sprite();
	this.A.x = Graphics.width / 2;
	this.A.x = Graphics.height / 2;
	this.A.bitmap = ImageManager.loadPicture('Utilities/Background');
	//this.addChild(this.A)

};

Scene_Title.prototype.update = function() 
{
	STU.call(this);
	//this.P.opacity = Null(untuk mengubah opacity);
	this.P.opacity = 150;
	this.P.origin.x += +1
	this.A.opacity = 200;
	this.A.sendToBack
};
