/*:
* @plugindesc Plugin untuk ancient war
* @author "Z"
* @desc dibuat oleh Zbagusgaps untuk game ancient war
*/


Window_MenuCommand.prototype.addOriginalCommands = function() 
{
	this.addCommand("Load", 'load', true);
};

var Menu_Tambahan = Scene_Menu.prototype.createCommandWindow;


Scene_Menu.prototype.createCommandWindow = function() 
{
    Menu_Tambahan.call(this);
    this._commandWindow.setHandler('load',   this.commandLoad.bind(this));
	this._commandWindow.setHandler('item', this.commandItem.bind(this));
	this.addWindow(this._commandWindow);
};

Scene_Menu.prototype.commandLoad = function ()
{
	SceneManager.push(Scene_Load);
}

var Skip_party_command = Scene_Battle.prototype.selectNextCommand;

Window_PartyCommand.prototype.makeCommandList = function() 
{
        this.addCommand(TextManager.fight,  'fight');
		this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
};

