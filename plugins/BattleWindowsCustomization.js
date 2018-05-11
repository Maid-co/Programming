// No credit required. Can be used commercially or non commercially

var Imported = Imported || {};
Imported.WindowEdit = true;

var Z = Z || {};
Z.WinEdit = Z.WinEdit || {};

/*:
 * @plugindesc v1.0 Allows you to fully customize battle windows.
 * @author Z
 *
 * @param BattleStatus Width
 * @desc Set Width of this window.
 * Default: 624
 * @default 624
 *
 *
 * @param BattleStatus Height
 * @desc Set Height of this window.
 * Default: 180
 * @default 180
 *
 * @param BattleStatus x
 * @desc Position x of window while Party Command is visible.
 * Default: 192
 * @default 192
 *
 * @param BattleStatus x 2
 * @desc Position x of window while Party Command is not visible.
 * Default: 96
 * @default 96
 *
 *
 * @param BattleStatus y
 * @desc Position x of window while Party Command is not visible.
 * Default: 444
 * @default 444
 *
 *
 * @param BattleStatus y 2
 * @desc Position x of window while Party Command is not visible.
 * Default: 444
 * @default 444
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 *
 * @param PartyCommand Width
 * @desc Set Width of this window.
 * Default: 192
 * @default 192
 *
 *
 * @param PartyCommand Rows
 * @desc Set how many rows are visible in this window. Affects height.
 * Default: 4
 * @default 4
 *
 * @param PartyCommand x
 * @desc Position x of this window.
 * Default: 0
 * @default 0
 *
 *
 * @param PartyCommand y
 * @desc Position y of this window.
 * Default: 444
 * @default 444
 *
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 * @param ActorCommand Width
 * @desc Set Width of this window.
 * Default: 192
 * @default 192
 *
 *
 * @param ActorCommand Rows
 * @desc Set how many rows are visible in this window. Affects height.
 * Default: 4
 * @default 4
 *
 * @param ActorCommand x
 * @desc Position x of this window.
 * Default: 0
 * @default 0
 *
 *
 * @param ActorCommand y
 * @desc Position y of this window.
 * Default: 444
 * @default 444
 *
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 *
 * @param EnemyWindow Width
 * @desc Set Width of this window.
 * Default: 624
 * @default 624
 *
 *
 * @param EnemyWindow Height
 * @desc Set Height of this window.
 * Default: 180
 * @default 180
 *
 * @param EnemyWindow x
 * @desc Position x of this window.
 * Default: 192
 * @default 192
 *
 *
 * @param EnemyWindow y
 * @desc Position y of this window.
 * Default: 444
 * @default 444
 *
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 * @param SkillWindow Width
 * @desc Set Width of this window.
 * Default: 624
 * @default 624
 *
 *
 * @param SkillWindow Height
 * @desc Set Height of this window.
 * Default: 180
 * @default 180
 *
 * @param SkillWindow x
 * @desc Position x of this window.
 * Default: 192
 * @default 192
 *
 *
 * @param SkillWindow y
 * @desc Position y of this window.
 * Default: 444
 * @default 444
 *
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 * @param ItemWindow Width
 * @desc Set Width of this window.
 * Default: 624
 * @default 624
 *
 *
 * @param ItemWindow Height
 * @desc Set Height of this window.
 * Default: 180
 * @default 180
 *
 * @param ItemWindow x
 * @desc Position x of this window.
 * Default: 192
 * @default 192
 *
 *
 * @param ItemWindow y
 * @desc Position y of this window.
 * Default: 444
 * @default 444
 *
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 * @param HelpWindow Width
 * @desc Set Width of this window.
 * Default: 816
 * @default 816
 *
 *
 * @param HelpWindow Height
 * @desc Set Height of this window.
 * Default: 100
 * @default 100
 *
 * @param HelpWindow x
 * @desc Position x of this window.
 * Default: 0
 * @default 0
 *
 *
 * @param HelpWindow y
 * @desc Position y of this window.
 * Default: 0
 * @default 0
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 * @param LogWindow Width
 * @desc Set Width of this window.
 * Default: 816
 * @default 816
 *
 *
 * @param LogWindow Height
 * @desc Set Height of this window.
 * Default: 100
 * @default 100
 *
 * @param LogWindow x
 * @desc Position x of this window.
 * Default: 0
 * @default 0
 *
 *
 * @param LogWindow y
 * @desc Position y of this window.
 * Default: 0
 * @default 0
 *
 */

 (function() {

Z.Parameters = PluginManager.parameters('BattleWindowsCustomization');
Z.WinEdit.BattleStatusDefault = eval(Z.Parameters["BattleStatus Default"]);
Z.WinEdit.BattleStatusWidth = Number(Z.Parameters["BattleStatus Width"]);
Z.WinEdit.BattleStatusHeight = Number(Z.Parameters["BattleStatus Height"]);
Z.WinEdit.BattleStatusXpos = Number(Z.Parameters["BattleStatus x"]);
Z.WinEdit.BattleStatusXpos2 = Number(Z.Parameters["BattleStatus x 2"]);
Z.WinEdit.BattleStatusYpos = Number(Z.Parameters["BattleStatus y"]);
Z.WinEdit.BattleStatusYpos2 = Number(Z.Parameters["BattleStatus y 2"]);

Z.WinEdit.BattleEnemyDefault = eval(Z.Parameters["EnemyWindow Default"])
Z.WinEdit.BattleEnemyXpos = Number(Z.Parameters["EnemyWindow x"]);
Z.WinEdit.BattleEnemyYpos = Number(Z.Parameters["EnemyWindow y"]);
Z.WinEdit.BattleEnemyWidth = Number(Z.Parameters["EnemyWindow Width"]);
Z.WinEdit.BattleEnemyHeight = Number(Z.Parameters["EnemyWindow Height"]);

Z.WinEdit.ActorCommandDefault = eval(Z.Parameters["ActorCommand Default"]);
Z.WinEdit.ActorCommandWidth = Number(Z.Parameters["ActorCommand Width"]);
Z.WinEdit.ActorCommandHeight = Number(Z.Parameters["ActorCommand Rows"]);
Z.WinEdit.ActorCommandXpos = Number(Z.Parameters["ActorCommand x"]);
Z.WinEdit.ActorCommandYpos = Number(Z.Parameters["ActorCommand y"]);

Z.WinEdit.SkillWindowDefault = eval(Z.Parameters["SkillWindow Default"]);
Z.WinEdit.SkillWindowWidth = Number(Z.Parameters["SkillWindow Width"]);
Z.WinEdit.SkillWindowHeight = Number(Z.Parameters["SkillWindow Height"]);
Z.WinEdit.SkillWindowXpos = Number(Z.Parameters["SkillWindow x"]);
Z.WinEdit.SkillWindowYpos = Number(Z.Parameters["SkillWindow y"]);

Z.WinEdit.ItemWindowDefault = eval(Z.Parameters["ItemWindow Default"]);
Z.WinEdit.ItemWindowWidth = Number(Z.Parameters["ItemWindow Width"]);
Z.WinEdit.ItemWindowHeight = Number(Z.Parameters["ItemWindow Height"]);

Z.WinEdit.HelpWindowDefault = eval(Z.Parameters["HelpWindow Default"]);
Z.WinEdit.HelpWindowWidth = Number(Z.Parameters["HelpWindow Width"]);
Z.WinEdit.HelpWindowHeight = Number(Z.Parameters["HelpWindow Height"]);
Z.WinEdit.HelpWindowYpos = Number(Z.Parameters["HelpWindow y"]);

Z.WinEdit.LogWindowDefault = eval(Z.Parameters["LogWindow Default"]);
Z.WinEdit.LogWindowWidth = Number(Z.Parameters["LogWindow Width"]);
Z.WinEdit.LogWindowHeight = Number(Z.Parameters["LogWindow Height"]);
Z.WinEdit.LogWindowXpos = Number(Z.Parameters["LogWindow x"]);
Z.WinEdit.LogWindowYpos = Number(Z.Parameters["LogWindow y"]);

//Battle Status Window Size
Window_BattleStatus.prototype.windowWidth = function() 
{
//default:return Graphics.boxWidth - 192;
return Graphics.boxWidth - 100;
};

Window_BattleStatus.prototype.windowHeight = function() 
{
return 360;
};

//Enemy Select Window Size
Window_BattleEnemy.prototype.windowWidth = function() 
{
return Graphics.boxWidth - 192;
};

Window_BattleEnemy.prototype.windowHeight = function() 
{
return Z.WinEdit.BattleEnemyHeight;
};

//Ukuran Party Command Window
Window_PartyCommand.prototype.windowWidth = function() 
{
return 192;
};
//Pilihan
Window_PartyCommand.prototype.numVisibleRows = function() 
{
return 3;
};

//Ukuran Actor Command Window
Window_ActorCommand.prototype.windowWidth = function() 
{
return 192;
};

Window_ActorCommand.prototype.numVisibleRows = function() {
return 3;
};


//Battle Status Window Position
Scene_Battle.prototype.updateWindowPositions = function() {
    this._statusWindow.x = 135;
    this._statusWindow.y = 325;
    this._statusWindow.opacity = 0;
    this._statusWindow.contents.fontSize = 20;
/*
    if (BattleManager.isInputting()) {
        statusX = this._partyCommandWindow.width;
    } else {
        statusX = this._partyCommandWindow.width / 2;
    }
    if (this._statusWindow.x < statusX) {
        this._statusWindow.x += 16;
        if (this._statusWindow.x > statusX) {
            this._statusWindow.x = statusX;
        }
    }
    if (this._statusWindow.x > statusX) {
        this._statusWindow.x -= 16;
        if (this._statusWindow.x < statusX) {
            this._statusWindow.x = statusX;
        }
    }
  }
  */
};
//posisi pemilihan actor pada item dan skill??
Scene_Battle.prototype.createActorWindow = function() {
    this._actorWindow = new Window_BattleActor(Z.WinEdit.BattleStatusXpos, Z.WinEdit.BattleStatusYpos);
    this._actorWindow.opacity = 0;
    this._actorWindow.contents.fontSize = 20;
	this._actorWindow.width = 1000;
	this._actorWindow.height = 1000;
	this._actorWindow.x = 135;
	this._actorWindow.y = 325;
    this._actorWindow.setHandler('ok',     this.onActorOk.bind(this));
    this._actorWindow.setHandler('cancel', this.onActorCancel.bind(this));
    this.addWindow(this._actorWindow);
};

//Party Command Window Position
Scene_Battle.prototype.createPartyCommandWindow = function() {
    this._partyCommandWindow = new Window_PartyCommand();
    this._partyCommandWindow.x = 600;
    this._partyCommandWindow.y = 150;
    this._partyCommandWindow.opacity = 0;
    this._partyCommandWindow.contents.fontSize = 20;
    this._partyCommandWindow.setHandler('fight',  this.commandFight.bind(this));
    this._partyCommandWindow.setHandler('escape', this.commandEscape.bind(this));
    this._partyCommandWindow.deselect();
    this.addWindow(this._partyCommandWindow);
};
//tampilan awal
Window_TitleCommand.prototype.windowWidth = function() {
    return 480;
};
Window_TitleCommand.prototype.windowHeight = function() {
    return 210;
};
Scene_Title.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_TitleCommand();
	this._commandWindow.opacity = 0;
    this._commandWindow.setHandler('newGame',  this.commandNewGame.bind(this));
    this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
    this._commandWindow.setHandler('options',  this.commandOptions.bind(this));
    this.addWindow(this._commandWindow);
};
//Actor Command Window Position
Window_BattleLog.prototype.createBackBitmap = function() {
    this._backBitmap = new Bitmap(this.width, this.height);
};

Window_BattleLog.prototype.createBackSprite = function() {
    this._backSprite = new Sprite();
    this._backSprite.bitmap = this._backBitmap;
    this._backSprite.y = this.y;
    this.addChildToBack(this._backSprite);
};

Scene_Battle.prototype.createActorCommandWindow = function() 
{
    this._actorCommandWindow = new Window_ActorCommand();
    this._actorCommandWindow.x = 600;
    this._actorCommandWindow.y = 150;
    this._actorCommandWindow.opacity = 0;
    this._actorCommandWindow.contents.fontSize = 20;
    this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
    this._actorCommandWindow.setHandler('skill',  this.commandSkill.bind(this));
    this._actorCommandWindow.setHandler('guard',  this.commandGuard.bind(this));
    this._actorCommandWindow.setHandler('item',   this.commandItem.bind(this));
    this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
    this.addWindow(this._actorCommandWindow);
};

//Posisi Window Musuh
Scene_Battle.prototype.createEnemyWindow = function() 
{
    this._enemyWindow = new Window_BattleEnemy(Z.WinEdit.BattleEnemyXpos, Z.WinEdit.BattleEnemyYpos);
    this._enemyWindow.opacity = 0;
    this._enemyWindow.contents.fontSize = 25;
	this._enemyWindow.height = 1000;
	this._enemyWindow.width = 780;
//    this._enemyWindow.x = Graphics.boxWidth - this._enemyWindow.width;
	this._enemyWindow.x = 50;
	this._enemyWindow.y = 0;
    this._enemyWindow.setHandler('ok',     this.onEnemyOk.bind(this));
    this._enemyWindow.setHandler('cancel', this.onEnemyCancel.bind(this));
    this.addWindow(this._enemyWindow);
};

//Skill Window Position and Size
Scene_Battle.prototype.createSkillWindow = function() 
{
    var x = 0;
    var y = 0;
    var w = 800;
    var h = 1000;
    this._skillWindow = new Window_BattleSkill(x, y, w, h);
    this._skillWindow.setHelpWindow(this._helpWindow);
    this._skillWindow.opacity = 0;
    this._skillWindow.contents.fontSize = 20;
    this._skillWindow.setHandler('ok',     this.onSkillOk.bind(this));
    this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
    this.addWindow(this._skillWindow);
};

//Item Window Position and Size
Scene_Battle.prototype.createItemWindow = function() {
    var karb_x = 0;
    var karb_y = 0;
    var karb_w = 800;
    var karb_h = 1000;
    this._itemWindow = new Window_BattleItem(karb_x, karb_y, karb_w, karb_h);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.opacity = 0;
    this._itemWindow.contents.fontSize = 20;
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
};

//Help Window Position and Size
Scene_Battle.prototype.createHelpWindow = function() 
{
    this._helpWindow = new Window_Help();
    this._helpWindow.x = 0;
    this._helpWindow.y = 0;
    this._helpWindow.width = Z.WinEdit.HelpWindowWidth;
    this._helpWindow.height = Z.WinEdit.HelpWindowHeight;
    this._helpWindow.opacity = 0;
    this._helpWindow.contents.fontSize = 20;
    this._helpWindow.visible = false;
    this.addWindow(this._helpWindow);
};

//Log Window Position and Size
Scene_Battle.prototype.createLogWindow = function() 
{
    this._logWindow = new Window_BattleLog();
    this._logWindow.x = 0;
    this._logWindow.y = 0;
    this._logWindow.width = 1000;
    this._logWindow.height = 400;
    this._logWindow.contents.fontSize = 25;
    this.addWindow(this._logWindow);
};
})();