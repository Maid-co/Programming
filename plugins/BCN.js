/*:
* @param Background
* @desc background sprite
* @default Background
* @plugindesc Menampilkan gambar 
* @author "Z"
* @default Background Pada SceneMenu
*/

var params = PluginManager.parameters('BCN');

var pn = String(params['Utilities/Background'] || "Utilities/Background");

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
	this.P = new Sprite();
	this.P.bitmap = ImageManager.loadPicture(pn);
	this.addChild(this.P);
};

Scene_Skill.prototype