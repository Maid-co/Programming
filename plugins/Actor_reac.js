var Imported = {};

 
var Z = Z || {};
Z.Maid = Z.Maid || {};

 

Z.Parameters = PluginManager.parameters('Actor_reac');
Z.Param = Z.Param || {};
Z.Icon = Z.Icon || {};
 
Z.Icon.NoAction = Number(Z.Parameters['No Action Icon']);
Z.Param.MaidNameFontSize = Number(Z.Parameters['Name Font Size']);
Z.Param.MaidParamYBuffer = Number(Z.Parameters['Param Y Buffer']);
Z.Param.MaidCurrentMax = String(Z.Parameters['Param Current Max']);
Z.Param.MaidCurrentMax = eval(Z.Param.MaidCurrentMax);
Z.Param.MaidAdjustCol = eval(String(Z.Parameters['Adjust Columns']));
Z.Param.MaidStateIconRow = Number(Z.Parameters['State Icons Row']);
Z.Param.MaidLfRt = eval(String(Z.Parameters['Left / Right']));
Z.Param.MaidTurnSkip = eval(String(Z.Parameters['Allow Turn Skip']));
Z.Param.MaidShowAni = eval(String(Z.Parameters['Show Animations']));
Z.Param.MaidShowSprite = eval(String(Z.Parameters['Show Sprites']));
Z.Param.MaidAlignAni = eval(String(Z.Parameters['Align Animations']));
Z.Param.MaidXOffset = Number(Z.Parameters['X Offset']);
Z.Param.MaidYOffset = Number(Z.Parameters['Y Offset']);
Z.Param.ATBGaugeStyle = 1;
 
//=============================================================================
// BattleManager
//=============================================================================


 
Z.mulai_input = BattleManager.startInput;
BattleManager.startInput = function() {
    Z.mulai_input.call(this);
    this.refreshStatus();
};

//Update status
Scene_Battle.prototype.refreshStatus = function() {
    this._statusWindow.refresh();
};

 
//=============================================================================
// Game_Battler
//=============================================================================
 //penem1
Z.Maid.Game_Action_clear = Game_Action.prototype.clear;
Game_Action.prototype.clear = function() {
    Z.Maid.Game_Action_clear.call(this);
    this.subject().refresh();
};
 
Z.Maid.Game_Action_setSkill = Game_Action.prototype.setSkill;
Game_Action.prototype.setSkill = function(skillId) {
    Z.Maid.Game_Action_setSkill.call(this, skillId);
    this.subject().refresh();
};
 
Z.Maid.Game_Action_setItem = Game_Action.prototype.setItem;
Game_Action.prototype.setItem = function(itemId) {
    Z.Maid.Game_Action_setItem.call(this, itemId);
    this.subject().refresh();
};
 
Z.Maid.Game_Action_setItemObject = Game_Action.prototype.setItemObject;
Game_Action.prototype.setItemObject = function(object) {
    Z.Maid.Game_Action_setItemObject.call(this, object);
    this.subject().refresh();
};
 
//=============================================================================
// Game_Actor
//=============================================================================
 
Z.Maid.Game_Actor_isSpriteVisible = Game_Actor.prototype.isSpriteVisible;
Game_Actor.prototype.isSpriteVisible = function() {
    if (Z.Param.MaidShowAni && !$gameSystem.isSideView()) {
      return true;
    }
    return Z.Maid.Game_Actor_isSpriteVisible.call(this);
};
 
Z.Maid.Game_Actor_changeClass = Game_Actor.prototype.changeClass;
Game_Actor.prototype.changeClass = function(classId, keepExp) {
    Z.Maid.Game_Actor_changeClass.call(this, classId, keepExp);
    this.battleStatusWindowRefresh();
};
 //penem2
Z.Maid.Game_Actor_setCharacterImage = 
    Game_Actor.prototype.setCharacterImage;
Game_Actor.prototype.setCharacterImage = function(name, index) {
    Z.Maid.Game_Actor_setCharacterImage.call(this, name, index);
    this.battleStatusWindowRefresh();
};
 
Z.Maid.Game_Actor_setFaceImage =
    Game_Actor.prototype.setFaceImage;
Game_Actor.prototype.setFaceImage = function(faceName, faceIndex) {
    Z.Maid.Game_Actor_setFaceImage.call(this, faceName, index);
    this.battleStatusWindowRefresh();
};
 
Z.Maid.Game_Actor_setBattlerImage =
    Game_Actor.prototype.setBattlerImage;
Game_Actor.prototype.setBattlerImage = function(battlerName) {
    Z.Maid.Game_Actor_setBattlerImage.call(this, battlerName);
    this.battleStatusWindowRefresh();
};
 
Game_Actor.prototype.battleStatusWindowRefresh = function() {
    if (!$gameParty.inBattle()) return;
    if (!$gameParty.battleMembers().contains(this)) return;
    BattleManager.refreshStatus();
};
 
//=============================================================================
// Sprite_Actor
//=============================================================================
 
 
 Z.Maid.Sprite_Actor_createMainSprite =
    Sprite_Actor.prototype.createMainSprite;
Sprite_Actor.prototype.createMainSprite = function() 
{
    Z.Maid.Sprite_Actor_createMainSprite.call(this);
    if ($gameSystem.isSideView()) return;
    if (Z.Param.MaidShowSprite) 
	{
      this._effectTarget = this._mainSprite || this;
    } 
	else 
	{
      this._effectTarget = this;
    }
};


 
Z.Maid.Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
Sprite_Actor.prototype.setActorHome = function(index) {
    if (Z.Param.MaidAlignAni && !$gameSystem.isSideView()) 
	{
      this.setActorHomeFrontView(index);
    } 
	else 
	{
      Z.Maid.Sprite_Actor_setActorHome.call(this, index);
    }
};
 
Sprite_Actor.prototype.setActorHomeFrontView = function(index) 
{
	
	var statusHeight = 4;
    statusHeight *= Window_Base.prototype.lineHeight.call(this);
    statusHeight += Window_Base.prototype.standardPadding.call(this) * 2;
    var screenW = Graphics.boxWidth;
    var windowW = Window_PartyCommand.prototype.windowWidth.call(this);
    screenW -= windowW;
    windowW /= 2;
    if (Z.Param.MaidAdjustCol) {
      var size = $gameParty.battleMembers().length;
    } else {
      var size = $gameParty.maxBattleMembers();
    }
     
    var homeX = screenW / size * index + windowW + screenW / (size * 2);
    homeX += Z.Param.MaidXOffset;
    var homeY = Graphics.boxHeight - statusHeight;
    homeY += Z.Param.MaidYOffset;
    this.setHome(homeX, homeY);
    this.moveToStartPosition();
};
 
Z.Maid.Sprite_Actor_update = Sprite_Actor.prototype.update;
Sprite_Actor.prototype.update = function() {
    Z.Maid.Sprite_Actor_update.call(this);
    if (!this._actor) return;
    if ($gameSystem.isSideView()) return;
    if (Z.Param.MaidShowSprite) return;
    this.hideAllSideviewSprites();
};
 
Sprite_Actor.prototype.hideAllSideviewSprites = function() {
    this._mainSprite.visible = false;
    this._shadowSprite.visible = false;
    this._weaponSprite.visible = false;
    this._stateSprite.visible = false;
};
 
//=============================================================================
// Window_Base
//=============================================================================
 
Window_Base.prototype.drawActorActionIcon = function(actor, wx, wy) {
    var icon = Z.Icon.NoAction;
    if (actor.currentAction() && actor.currentAction().item()) {
      icon = actor.currentAction().item().iconIndex || Z.Icon.NoAction;
    }
    this.drawIcon(icon, wx + 2, wy + 2);
};
 
//=============================================================================
// Window_PartyCommand
//=============================================================================
 
Window_PartyCommand.prototype.processHandling = function() {
    Window_Selectable.prototype.processHandling.call(this);
    if (this.isOpenAndActive() && Z.Param.MaidLfRt) {
      if (this.isHandled('right') && Input.isRepeated('right')) {
        this.processRight();
      }
    }
};
 
Window_PartyCommand.prototype.processRight = function() {
    SoundManager.playCursor();
    this.updateInputData();
    this.deactivate();
    this.callHandler('right');
};
 
//=============================================================================
// Window_ActorCommand
//=============================================================================
 
Window_ActorCommand.prototype.processHandling = function() {
    Window_Selectable.prototype.processHandling.call(this);
    if (this.isOpenAndActive() && Z.Param.MaidLfRt) {
      if (this.isHandled('left') && Input.isRepeated('left')) {
        this.processLeft();
      } else if (this.isHandled('right') && Input.isRepeated('right')) {
        this.processRight();
      }
    }
};
 
Window_ActorCommand.prototype.processLeft = function() {
    SoundManager.playCursor();
    this.updateInputData();
    this.deactivate();
    this.callHandler('left');
};
 
Window_ActorCommand.prototype.processRight = function() {
    if (SceneManager._scene.isAllowRightCommand()) {
      SoundManager.playCursor();
    }
    this.updateInputData();
    this.deactivate();
    this.callHandler('right');
};
 
Window_ActorCommand.prototype.processCancel = function() {
    var action = BattleManager.inputtingAction();
    if (action) action.clear();
    Window_Command.prototype.processCancel.call(this);
};
 
//=============================================================================
// Window_BattleStatus
//=============================================================================
 
Window_BattleStatus.prototype.createContents = function() {
    this.createFaceContents();
    this._currentMax = Z.Param.MaidCurrentMax;
    Window_Selectable.prototype.createContents.call(this);
};
 
 //layer actor
Window_BattleStatus.prototype.createFaceContents = function() {
    this._faceContents = new Sprite();
    var ww = this.contentsWidth();
    var wy = this.contentsHeight();
    this._faceContents.bitmap = new Bitmap(ww, wy);
    this.addChildAt(this._faceContents, 0);
    this._faceContents.move(this.standardPadding(), this.standardPadding());
};
 
Window_BattleStatus.prototype.drawAllItems = function() {
    Window_Selectable.prototype.drawAllItems.call(this);
    this.drawAllFaces();
};
 
Window_BattleStatus.prototype.drawAllFaces = function() {
    for (var i = 0; i < $gameParty.battleMembers().length; ++i) 
	{
      var member = $gameParty.battleMembers()[i];
      var bitmap = ImageManager.loadPicture();
      if (bitmap.width <= 0) return setTimeout(this.drawAllFaces.bind(this), 5);
    }
    this._faceContents.bitmap.clear();
    for (var i = 0; i < this.maxItems(); ++i) 
	{
      this.drawStatusFace(i);
    }
};
 
Window_BattleStatus.prototype.maxRows = function() {
    var rows = 1;
    return rows;
};
 
Window_BattleStatus.prototype.maxCols = function() {
    if (Z.Param.MaidAdjustCol) {
      return this.maxItems();
    } else {
      return $gameParty.maxBattleMembers();
    }
    return cols;
};
 
Window_BattleStatus.prototype.itemWidth = function() {
    return this.contents.width / this.maxCols();
};
 
Window_BattleStatus.prototype.spacing = function() {
    return 0;
};
 
Window_BattleStatus.prototype.itemHeight = function() {
    return this.lineHeight() * this.numVisibleRows();
};
 
Window_BattleStatus.prototype.drawItem = function(index) {
    var actor = $gameParty.battleMembers()[index];
    this.drawBasicArea(this.basicAreaRect(index), actor);
    this.drawGaugeArea(this.gaugeAreaRect(index), actor);
    this.drawStateArea(this.basicAreaRect(index), actor);
};
 
Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    if (Imported.YEP_X_BattleSysATB && Z.Param.ATBGaugeStyle) {
      if (BattleManager.isATB()) {
        this.drawActorAtbGauge(actor, rect.x - 2, rect.y, rect.width + 2);
      }
    }
    var iw = Window_Base._iconWidth;
    this.drawActorActionIcon(actor, rect.x, rect.y);
    this.resetFontSettings();
    this.contents.fontSize = Z.Param.MaidNameFontSize;
    this.drawActorName(actor, rect.x + iw + 4, rect.y, rect.width);
};
 
Window_BattleStatus.prototype.basicAreaRect = function(index) {
    var rect = this.itemRectForText(index);
    rect.height = this.lineHeight() * 2;
    return rect;
};
 
Window_BattleStatus.prototype.drawGaugeArea = function(rect, actor) {
    this.contents.fontSize = 24;
    this._enableYBuffer = true;
    var wy = rect.y + rect.height - 100 - this.lineHeight();
    var wymod = Z.Param.GaugeHeight = 10;
    var wymod = Math.max(16, wymod);
    this.drawActorHp(actor, rect.x, wy - wymod, rect.width);
    if (this.getGaugesDrawn(actor) <= 2) {
      this.drawActorMp(actor, rect.x, wy, rect.width);
    } else {
      var ww = rect.width / 2;
	  this.drawActorTp(actor, rect.x, wy, rect.width);
      this.drawActorMp(actor, rect.x, wy + wymod, rect.width);
    }
    this._enableYBuffer = false;
};
 
Window_BattleStatus.prototype.drawStateArea = function(rect, actor) {
  var row = Z.Param.MaidStateIconRow;
  if (row === undefined) row = 1;
  var wy = rect.y + (this.lineHeight() * row);
  this.drawActorIcons(actor, rect.x + 2, wy, rect.width);
};
 
Window_BattleStatus.prototype.getGaugesDrawn = function(actor) {
    var value = 2;
    if ($dataSystem.optDisplayTp) value += 1;
    return value;
};
 
Window_BattleStatus.prototype.gaugeAreaRect = function(index) {
    var rect = this.itemRectForText(index);
    rect.height = this.contents.height - this.lineHeight() * 2;
    rect.y = this.contents.height - rect.height;
    return rect;
};
 
Window_BattleStatus.prototype.drawStatusFace = function(index) {
    var actor = $gameParty.battleMembers()[index];
    var rect = this.itemRect(index);
    var ww = Math.min(rect.width - 8, Window_Base._faceWidth);
    var wh = Math.min(rect.height - 8, Window_Base._faceHeight);
    var wx = rect.x + rect.width - ww - 6;
    var wy = rect.y + 4;
    this.drawActorFace(actor, wx, wy, ww, wh);
};
 
 /*
Game_Actor.prototype.performAction = function(action) {
    Game_Battler.prototype.performAction.call(this, action);
    if (action.isAttack()) {
        this.performAttack();
    } else if (action.isGuard()) {
        this.requestMotion('guard');
    } else if (action.isMagicSkill()) {
        this.requestMotion('spell');
    } else if (action.isSkill()) {
        this.requestMotion('skill');
    } else if (action.isItem()) {
        this.requestMotion('item');
    }
};

*/
//character image halls

ImageManager.loadRaku = function(filename, hue) {
    return this.loadBitmap('img/pictures/Raku/', filename, hue, true);
};

Window_BattleStatus.prototype.drawFace = function(fn, fi, x, y, width, height) 
{
	/*achives:
	//is dying
	//is dead
	//is chanting untuk animasi sebelum skill
	//stateeffected untuk pengaruh state
	//is acting untuk all action
	*/
	width = width || Window_Base._faceWidth;
	height = height || Window_Base._faceHeight;
	
	//muka character
	//actor index 0
	
	var bitmap0 = ImageManager.loadPicture('Raku/Raku');
	var bitmap0d = ImageManager.loadPicture('Raku/Rakudead');
	var bitmap0a = ImageManager.loadPicture('Raku/Rakuattack');
	var bitmap0c = ImageManager.loadPicture('Raku/Rakuchan');
	var bitmap0g = ImageManager.loadPicture('Raku/Rakug');
	var bitmap0dy = ImageManager.loadPicture('Raku/Rakudyi');
	
	//actor index 1
	var bitmap1 = ImageManager.loadPicture('Riene/Riene');
	var bitmap1d = ImageManager.loadPicture('Riene/Rienedead');
	var bitmap1a = ImageManager.loadPicture('Riene/Rieneattack');
	var bitmap1c = ImageManager.loadPicture('Riene/Rienechan');
	var bitmap1g = ImageManager.loadPicture('Riene/Rieneg');
	var bitmap1dy = ImageManager.loadPicture('Riene/Rienedyi');
	
	//actor index 2
	var bitmap2 = ImageManager.loadPicture('Rkai/Rkai');
	var bitmap2d = ImageManager.loadPicture('Rkai/Rkaidead');
	var bitmat2a = ImageManager.loadPicture('Rkai/Rkaiattack');
	var bitmap2c = ImageManager.loadPicture('Rkai/Rkaichan');
	var bitmap2g = ImageManager.loadPicture('Rkai/Rkaig');
	var bitmap2dy = ImageManager.loadPicture('Rkai/Rkaidyi');
	
	//end of actor index
	var pw = Window_Base._faceWidth;
	var ph = 144;
	//LG=lebar gambar
	//PG=Panjang gambar
	var LG = Math.min(width, pw);
	var sh = Math.min(height, pw);
	var PG = 275;
	var dx = Math.floor(x + Math.max(width - pw, 0) / 2);
	var dy = Math.floor(y + Math.max(height - ph, 10) / 1);//kejauhan actor dari windows posisi bawah(x)
	var sx = fi % 4 * pw + (pw - LG) / 2;
	var sy = Math.floor(fi / 4) * ph + (ph - sh) / 2;
	//index 1
	if($gameActors.actor(1).isBattleMember())
	{
		if($gameParty.members()[0].isDead())
		{
			this._faceContents.bitmap.blt(bitmap0d, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[0].isDying())
		{
			this._faceContents.bitmap.blt(bitmap0dy, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[0].isGuard())
		{
			this._faceContents.bitmap.blt(bitmap0g, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[0].isStateAffected(202))
		{
			this._faceContents.bitmap.blt(bitmap0a, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[0].isChanting())
		{
			this._faceContents.bitmap.blt(bitmap0c, sx, sy, LG, PG, dx, dy);
		}
		else
		{
			this._faceContents.bitmap.blt(bitmap0, sx, sy, LG, PG, dx, dy);
		}
	//else if($gameParty.members()[0].isActing())
	//{
	//	this._faceContents.bitmap.blt(bitmap0d, sx, sy, LG, PG, dx, dy);
	//}
	}
	
	//index 2
	if($gameActors.actor(2).isBattleMember())
	{
		if($gameParty.members()[1].isDead())
		{
			this._faceContents.bitmap.blt(bitmap1d, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[1].isStateAffected(202))
		{
			this._faceContents.bitmap.blt(bitmap1a, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[1].isDying())
		{
			this._faceContents.bitmap.blt(bitmap1dy, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[1].isGuard())
		{
			this._faceContents.bitmap.blt(bitmap1g, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[1].isChanting())
		{
			this._faceContents.bitmap.blt(bitmap1c, sx, sy, LG, PG, dx, dy);
		}
		else
		{
			this._faceContents.bitmap.blt(bitmap1, sx, sy, LG, PG, dx, dy);
		}
	}

	//index 3
	if($gameActors.actor(3).isBattleMember())
	{
		if($gameParty.members()[2].isChanting())
		{
			this._faceContents.bitmap.blt(bitmap2c, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[2].isDead())
		{
			this._faceContents.bitmap.blt(bitmap2d, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[2].isStateAffected(202))
		{
			this._faceContents.bitmap.blt(bitmap2a, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[2].isDying())
		{
			this._faceContents.bitmap.blt(bitmap2dy, sx, sy, LG, PG, dx, dy);
		}
		else if($gameParty.members()[2].isGuard())
		{
			this._faceContents.bitmap.blt(bitmap2g, sx, sy, LG, PG, dx, dy);
		}
		else
		{
			this._faceContents.bitmap.blt(bitmap2, sx, sy, LG, PG, dx, dy);
		}
	}

};

Window_BattleStatus.prototype.updateTransform = function() {
    Window_Selectable.prototype.updateTransform.call(this);
    this.updateFaceContents();
};
 
Window_BattleStatus.prototype.updateFaceContents = function() {
    var w = this._width - this._padding * 2;
    var h = this._height - this._padding * 2;
    if (w > 0 && h > 0) {
      this._faceContents.setFrame(this.origin.x, this.origin.y, w, h);
      this._faceContents.visible = this.isOpen();
    } else {
      this._faceContents.visible = false;
    }
};
 
Window_BattleStatus.prototype.drawText = function(text, wx, wy, ww, align) {
    if (this._enableYBuffer) {
      wy += Z.Param.MaidParamYBuffer;
      wx += 2;
      ww -= 4;
    }
    Window_Selectable.prototype.drawText.call(this, text, wx, wy, ww, align);
};
 
Window_BattleStatus.prototype.drawCurrentAndMax = function(current, max, x, y,
                                                   width, color1, color2) {
    if (this._currentMax) {
      Window_Selectable.prototype.drawCurrentAndMax.call(this, current, max,
        x, y, width, color1, color2);
    } else {
      this.changeTextColor(color1);
      var value = Z.Util.toGroup(current);
      this.drawText(value, x, y, width, 'right');
    }
};
 
Window_BattleStatus.prototype.drawItemGaugeIcon = function(iconIndex, wx, wy) {
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    var iconWidth = Z.Param.GaugeHeight = 32;
    var iconHeight = Z.Param.GaugeHeight = 32;
    wy += Window_Base._iconHeight - iconHeight;
    this.contents.blt(bitmap, sx, sy, pw, ph, wx, wy, iconWidth, iconHeight);
    return iconWidth;
};
 
//=============================================================================
// Scene_Battle
//=============================================================================
 
Z.Maid.Scene_Battle_createPartyCommandWindow =
    Scene_Battle.prototype.createPartyCommandWindow;
Scene_Battle.prototype.createPartyCommandWindow = function() {
    Z.Maid.Scene_Battle_createPartyCommandWindow.call(this);
    var win = this._partyCommandWindow;
    if (Z.Param.MaidLfRt) {
      win.setHandler('right', this.commandFight.bind(this));
    }
    
};
Z.Maid.Scene_Battle_createActorCommandWindow =
    Scene_Battle.prototype.createActorCommandWindow;
Scene_Battle.prototype.createActorCommandWindow = function() {
    Z.Maid.Scene_Battle_createActorCommandWindow.call(this);
    var win = this._actorCommandWindow;
      win.setHandler('left', this.selectPreviousCommand.bind(this));
      win.setHandler('right', this.selectRightCommand.bind(this));
};
 Scene_Battle.prototype.commandFight = function() {
	this.selectNextCommand();
	
};
Scene_Battle.prototype.clearInputtingAction = function() {
    var action = BattleManager.inputtingAction();
    if (action) action.clear();
};
/*
Z.Maid.Scene_Battle_onActorCancel = Scene_Battle.prototype.onActorCancel;
Scene_Battle.prototype.onActorCancel = function() {
    Z.Maid.Scene_Battle_onActorCancel.call(this);
    this.clearInputtingAction();
};
*/
 
Z.Maid.Scene_Battle_onEnemyCancel = Scene_Battle.prototype.onEnemyCancel;
Scene_Battle.prototype.onEnemyCancel = function() {
    Z.Maid.Scene_Battle_onEnemyCancel.call(this);
    this.clearInputtingAction();
};
 
Z.Maid.Scene_Battle_onSkillCancel = Scene_Battle.prototype.onSkillCancel;
Scene_Battle.prototype.onSkillCancel = function() {
    Z.Maid.Scene_Battle_onSkillCancel.call(this);
    this.clearInputtingAction();
};

Scene_Battle.prototype.selectRightCommand = function() 
{
	this.selectNextCommand();
};
Scene_Battle.prototype.selectPreviousCommand = function() 
{
    BattleManager.selectPreviousCommand();
	this.changeInputWindow();
};

Scene_Battle.prototype.selectNextCommand = function() {
    BattleManager.selectNextCommand();
    this.changeInputWindow();
};
 
Scene_Battle.prototype.isAllowRightCommand = function() {
  return true;
};
 
//=============================================================================
// Utilities
//=============================================================================
 
Z.Util = Z.Util || {};
 
if (!Z.Util.toGroup) {
    Z.Util.toGroup = function(inVal) {
        return inVal;
    }
};

