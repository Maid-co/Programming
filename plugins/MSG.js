//=============================================================================
// Yanfly Engine Plugins - Message Core
// YEP_MessageCore.js
//=============================================================================
 
var Imported = Imported || {};
Imported.YEP_MessageCore = true;
 
var Yanfly = Yanfly || {};
Yanfly.Message = Yanfly.Message || {};
Yanfly.Message.version = 1.19;
 
//=============================================================================
 /*:
 * @plugindesc v1.19 Adds more features to the Message Window to customized
 * the way your messages appear and functions.
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Default Rows
 * @parent ---General---
 * @type number
 * @min 0
 * @desc This is default amount of rows the message box will have.
 * Default: 4
 * @default 4
 *
 * @param Default Width
 * @parent ---General---
 * @desc This is default width for the message box in pixels.
 * Default: Graphics.boxWidth
 * @default Graphics.boxWidth
 *
 * @param Face Indent
 * @parent ---General---
 * @desc If using a face graphic, this is how much text indents by.
 * Default: Window_Base._faceWidth + 24
 * @default Window_Base._faceWidth + 24
 *
 * @param Fast Forward Key
 * @parent ---General---
 * @desc This is the key used for fast forwarding.
 * @default pagedown
 *
 * @param Enable Fast Forward
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Enable fast forward button for your messages by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Word Wrapping
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Use this to enable or disable word wrapping by default.
 * OFF - false     ON - true
 * @default false
 *
 * @param Description Wrap
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Enable or disable word wrapping for descriptions.
 * OFF - false     ON - true
 * @default false
 *
 * @param Word Wrap Space
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Insert a space with manual line breaks?
 * NO - false     YES - true
 * @default false
 *
 * @param Tight Wrap
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc If true and using a face for the message, the message will
 * wrap tighter. NO - false     YES - true
 * @default false
 *
 * @param ---Font---
 * @default
 *
 * @param Font Name
 * @parent ---Font---
 * @desc This is the default font used for the Message Window.
 * Default: GameFont
 * @default GameFont
 *
 * @param Font Name CH
 * @parent ---Font---
 * @desc This is the default font used for the Message Window for Chinese.
 * Default: SimHei, Heiti TC, sans-serif
 * @default SimHei, Heiti TC, sans-serif
 *
 * @param Font Name KR
 * @parent ---Font---
 * @desc This is the default font used for the Message Window for Korean.
 * Default: Dotum, AppleGothic, sans-serif
 * @default Dotum, AppleGothic, sans-serif
 *
 * @param Font Size
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc This is the default font size used for the Message Window.
 * Default: 28
 * @default 28
 *
 * @param Font Size Change
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc Whenever \{ and \} are used, they adjust by this value.
 * Default: 12
 * @default 12
 *
 * @param Font Changed Max
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc This is the maximum size achieved by \{.
 * Default: 96
 * @default 96
 *
 * @param Font Changed Min
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc This is the minimum size achieved by \{.
 * Default: 12
 * @default 12
 *
 * @param Font Outline
 * @parent ---Font---
 * @type number
 * @min 0
 * @desc This is the default font outline width for messages.
 * Default: 4
 * @default 4
 *
 * @param Maintain Font
 * @parent ---Font---
 * @type boolean
 * @on YES
 * @off NO
 * @desc When changing the font name or size, maintain for following
 * messages. NO - false     YES - true
 * @default false
 *
 * @param ---Name Box---
 * @default
 *
 * @param Name Box Buffer X
 * @parent ---Name Box---
 * @type number
 * @desc This is the buffer for the x location of the Name Box.
 * @default -28
 *
 * @param Name Box Buffer Y
 * @parent ---Name Box---
 * @type number
 * @desc This is the buffer for the y location of the Name Box.
 * @default 0
 *
 * @param Name Box Padding
 * @parent ---Name Box---
 * @desc This is the value for the padding of the Name Box.
 * @default this.standardPadding() * 4
 *
 * @param Name Box Color
 * @parent ---Name Box---
 * @type number
 * @min 0
 * @max 31
 * @desc This is the text color used for the Name Box.
 * @default 0
 *
 * @param Name Box Clear
 * @parent ---Name Box---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Do you wish for the Name Box window to be clear?
 * NO - false     YES - true
 * @default false
 *
 * @param Name Box Added Text
 * @parent ---Name Box---
 * @desc This text is always added whenever the name box is used.
 * This can be used to automatically set up colors.
 * @default \c[6]
 *
 * @param Name Box Auto Close
 * @parent ---Name Box---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Close the message window each time the namebox displays a
 * different name? YES - true     NO - false
 * @default false
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * While RPG Maker MV Ace certainly improved the message system a whole lot, it
 * wouldn't hurt to add in a few more features, such as name windows,
 * converting textcodes to write out the icons and/or names of items, weapons,
 * armours, and* more in quicker fashion. This script also gives the developer
 * the ability to adjust the size of the message window during the game, give
 * it a separate font, and to give the player a text fast-forward feature.
 *
 * ============================================================================
 * Word Wrapping
 * ============================================================================
 *
 * Word wrapping is now possible through the message system. You can enable and
 * disable Word wrap using Plugin Commands. While using word wrap, if the word
 * is to extend past the message window's area, it will automatically go to the
 * following line. That said, word wrap will disable the editor's line breaks
 * and will require you to use the ones provided by the plugin:
 *
 * <br> or <line break> is text code to apply a line break. Use this before or
 * after a part in which you wish to start a new line.
 *
 * Keep in mind word wrapping is mostly for message windows. However, in other
 * places that you'd like to see word wrapping, such as item descriptions,
 * insert <WordWrap> at the beginning of the text to enable it.
 *
 * ============================================================================
 * Text Codes
 * ============================================================================
 *
 * By using certain text codes in your messages, you can have the game replace
 * them with the following:
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * Text Code   Function
 *   \V[n]       Replaced by the value of the nth variable.
 *   \N[n]       Replaced by the name of the nth actor.
 *   \P[n]       Replaced by the name of the nth party member.
 *   \G          Replaced by the currency unit.
 *   \C[n]       Draw the subsequent text in the nth color.
 *   \I[n]       Draw the nth icon.
 *   \{          Increases the text size by one step.
 *   \}          Decreases the text size by one step.
 *   \\          Replaced with the backslash character.
 *   \$          Opens the gold window.
 *   \.          Waits 1/4th seconds.
 *   \|          Waits 1 second.
 *   \!          Waits for button input.
 *   \>          Display remaining text on same line all at once.
 *   \<          Cancel the effect that displays text all at once.
 *   \^          Do not wait for input after displaying text.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  Wait:       Effect:
 *    \w[x]     - Waits x frames (60 frames = 1 second). Message window only.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  NameWindow: Effect:
 *    \n<x>     - Creates a name box with x string. Left side. *Note
 *    \nc<x>    - Creates a name box with x string. Centered. *Note
 *    \nr<x>    - Creates a name box with x string. Right side. *Note
 *
 *              *Note: Works for message window only.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  Line Break  Effect:
 *    <br>      - If using word wrap mode, this will cause a line break.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  Position:   Effect:
 *    \px[x]    - Sets x position of text to x.
 *    \py[x]    - Sets y position of text to y.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  Outline:    Effect:
 *   \oc[x]    - Sets outline colour to x.
 *   \ow[x]    - Sets outline width to x.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  Font:       Effect:
 *    \fr       - Resets all font changes.
 *    \fs[x]    - Changes font size to x.
 *    \fn<x>    - Changes font name to x.
 *    \fb       - Toggles font boldness.
 *    \fi       - Toggles font italic.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  Actor:      Effect:
 *    \af[x]    - Shows face of actor x. *Note
 *    \ac[x]    - Writes out actor's class name.
 *    \an[x]    - Writes out actor's nickname.
 *
 *              *Note: Works for message window only.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  Party:      Effect:
 *    \pf[x]    - Shows face of party member x. *Note
 *    \pc[x]    - Writes out party member x's class name.
 *    \pn[x]    - Writes out party member x's nickname.
 *
 *              *Note: Works for message window only.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  Names:      Effect:
 *    \nc[x]    - Writes out class x's name.
 *    \ni[x]    - Writes out item x's name.
 *    \nw[x]    - Writes out weapon x's name.
 *    \na[x]    - Writes out armour x's name.
 *    \ns[x]    - Writes out skill x's name.
 *    \nt[x]    - Writes out state x's name.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  Icon Names: Effect:
 *    \ii[x]    - Writes out item x's name including icon.
 *    \iw[x]    - Writes out weapon x's name including icon.
 *    \ia[x]    - Writes out armour x's name including icon.
 *    \is[x]    - Writes out skill x's name including icon.
 *    \it[x]    - Writes out state x's name including icon.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * And those are the text codes added with this script. Keep in mind that some
 * of these text codes only work for the Message Window. Otherwise, they'll
 * work for help descriptions, actor biographies, and others.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are some plugin commands you can use through the Event Editor
 * to change various aspects about the Message system.
 *
 * Plugin Comand
 *   MessageRows 6
 *   - Changes the Message Rows displayed to 6. If you are using continuous
 *   Show Text events, this will continue displaying the following lines's
 *   texts until it hits the row limit. Anything after that is cut off until
 *   the next message starts to avoid accidental overlap.
 *
 *   MessageWidth 400
 *   - Changes the Message Window Width to 400 pixels. This will cut off any
 *   words that are shown too far to the right so adjust accordingly!
 *
 *   EnableWordWrap
 *   - Enables wordwrapping. If a word extends past the window size, it will
 *   automatically move onto the next line. Keep in mind, you will need to use
 *   \br to perform line breaks.
 *
 *   DisableWordWrap
 *   - This disables wordwrapping. Line breaks will be automatic at points
 *   where a new line is started in the editor.
 *
 *   EnableFastForward
 *   - Enables Fast Forward key from working with messages.
 *
 *   DisableFastForward
 *   - Disables Fast Forward key from working with messages.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.19:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.18:
 * - Added new plugin parameters: 'Font Name CH' and 'Font Name KR'.
 *
 * Version 1.17:
 * - Compatibility update with Message Macros for 'Name Box Auto Close' option.
 *
 * Version 1.16:
 * - Added 'Tight Wrap' plugin parameter as a word wrap option to make the
 * word wrap tighter when using faces.
 *
 * Version 1.15:
 * - Added a failsafe where if the name box window would be off the screen, it
 * will automatically reposition itself to under the main message window.
 *
 * Version 1.14:
 * - Added 'Name Box Close' plugin parameter. If this is enabled, the message
 * window will check for the Name Window speaker each time a follow up message
 * occurs. If the name in the currently Name Window matches the name in the
 * following Name Window, the message window will remain open. If it doesn't,
 * the Name Window will close and reopen to indicate a new speaker.
 *
 * Version 1.13:
 * - Added 'Maintain Font' plugin parameter under the Font category. This will
 * allow you to use text codes \fn<x> and \fs[x] to permanently change the font
 * of your messages until you use it again. \fr will reset them to the plugin's
 * default parameter settings.
 *
 * Version 1.12:
 * - 'Word Wrap Space' parameter no longer leaves a space at the beginning of
 * each message.
 *
 * Version 1.11:
 * - Added 'Font Outline' parameter for the plugin parameters. This adjusts the
 * font outline width used by default for only message fonts.
 *
 * Version 1.10:
 * - Updated the Message Row system for Extended Message Pack 1's Autosizing
 * feature to work with extended heights.
 *
 * Version 1.09:
 * - Replaced 'Fast Forward' parameter with the 'Fast Forward Key' parameter
 * and 'Enable Fast Forward' parameter. Two new Plugin Commands are added. They
 * are 'EnableFastForward' and 'DisableFastForward' for control over when fast
 * forwarding is allowed as to not cause timed cutscenes to desynch.
 *
 * Version 1.08:
 * - Fixed a bug regarding Input Number positioning when the Message Window's
 * position was middle.
 *
 * Version 1.07:
 * - Added 'Word Wrap Space' for word wrap users. This parameter will leave a
 * space behind for those who want a space left behind.
 *
 * Version 1.06:
 * - Fixed a bug that would cause masking problems with mobile devices.
 *
 * Version 1.05:
 * - Fixed a bug that would cause the namebox window to appear distorted.
 *
 * Version 1.04:
 * - Fixed a bug that captured too many text codes with the namebox window.
 * - Timed Name Window's closing speed with main window's closing speed.
 *
 * Verison 1.03:
 * - Fixed a bug with textcodes that messed up wordwrapping.
 * - Fixed a bug with font reset, italic, and bold textcodes.
 *
 * Version 1.02:
 * - Namebox Window's overlap feature that's in every MV window is now disabled
 * to allow for overlapping with main message window.
 * - Updated window positioning for Branch Choices, Number Input, and Item
 * Selection windows.
 *
 * Version 1.01:
 * - Added 'Description Wrap' into the parameters to allow for all item
 * descriptions to be automatically processed with word wrapping.
 *
 * Version 1.00:
 * - Finished plugin!
 */
//=============================================================================
 
//=============================================================================
// Parameter Variables
//=============================================================================
 
Yanfly.Parameters = PluginManager.parameters('MSG');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.MSGNameBoxBufferX = String(Yanfly.Parameters['Name Box Buffer X']);
Yanfly.Param.MSGNameBoxBufferY = String(Yanfly.Parameters['Name Box Buffer Y']);
Yanfly.Param.MSGNameBoxPadding = String(Yanfly.Parameters['Name Box Padding']);
Yanfly.Param.MSGNameBoxColor = Number(Yanfly.Parameters['Name Box Color']);
Yanfly.Param.MSGNameBoxClear = String(Yanfly.Parameters['Name Box Clear']);
Yanfly.Param.MSGNameBoxText = String(Yanfly.Parameters['Name Box Added Text']);
Yanfly.Param.MSGNameBoxClose = String(Yanfly.Parameters['Name Box Auto Close']);
Yanfly.Param.MSGNameBoxClose = eval(Yanfly.Param.MSGNameBoxClose);
 

//=============================================================================
// Window_ScrollText
//=============================================================================
 
Window_ScrollText.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};
 
Window_ScrollText.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};
 
//=============================================================================
// Window_NameBox
//=============================================================================
 
Yanfly.DisableWebGLMask = false;
 
function Window_NameBox() {
    this.initialize.apply(this, arguments);
}
 
Window_NameBox.prototype = Object.create(Window_Base.prototype);
Window_NameBox.prototype.constructor = Window_NameBox;
 
Window_NameBox.prototype.initialize = function(parentWindow) {
    this._parentWindow = parentWindow;
    Window_Base.prototype.initialize.call(this, 0, 0, 240, this.windowHeight());
    this._text = '';
    this._lastNameText = '';
    this._openness = 0;
    this._closeCounter = 0;
    this.deactivate();
    if (eval(Yanfly.Param.MSGNameBoxClear)) {
      this.backOpacity = 0;
      this.opacity = 0;
    }
    this.hide();
};
 
Window_NameBox.prototype.windowWidth = function() {
    this.resetFontSettings();
    var dw = this.textWidthEx(this._text);
    dw += this.padding * 2;
    var width = dw + eval(Yanfly.Param.MSGNameBoxPadding)
    return Math.ceil(width);
};
 
Window_NameBox.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height);
};
 
Window_NameBox.prototype.calcNormalCharacter = function(textState) {
    return this.textWidth(textState.text[textState.index++]);
};
 
Window_NameBox.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};
 
Window_NameBox.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};
 
Window_NameBox.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};
 
Window_NameBox.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.active) return;
    if (this.isClosed()) return;
    if (this.isClosing()) return;
    if (this._closeCounter-- > 0) return;
    if (this._parentWindow.isClosing()) {
      this._openness = this._parentWindow.openness;
    }
    this.close();
};
 
Window_NameBox.prototype.refresh = function(text, position) {
    this.show();
    this._lastNameText = text;
    this._text = Yanfly.Param.MSGNameBoxText + text;
    this._position = position;
    this.width = this.windowWidth();
    this.createContents();
    this.contents.clear();
    this.resetFontSettings();
    this.changeTextColor(this.textColor(Yanfly.Param.MSGNameBoxColor));
    var padding = eval(Yanfly.Param.MSGNameBoxPadding) / 2;
    this.drawTextEx(this._text, padding, 0, this.contents.width);
    this._parentWindow.adjustWindowSettings();
    this._parentWindow.updatePlacement();
    this.adjustPositionX();
    this.adjustPositionY();
    this.open();
    this.activate();
    this._closeCounter = 4;
    return '';
};
 
Window_NameBox.prototype.adjustPositionX = function() {
    if (this._position === 1) {
      this.x = this._parentWindow.x;
      this.x += eval(Yanfly.Param.MSGNameBoxBufferX);
    } else if (this._position === 2) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width * 3 / 10;
      this.x -= this.width / 2;
    } else if (this._position === 3) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width / 2;
      this.x -= this.width / 2;
    } else if (this._position === 4) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width * 7 / 10;
      this.x -= this.width / 2;
    } else {
      this.x = this._parentWindow.x + this._parentWindow.width;
      this.x -= this.width;
      this.x -= eval(Yanfly.Param.MSGNameBoxBufferX);
    }
    this.x = this.x.clamp(0, Graphics.boxWidth - this.width);
};
 
Window_NameBox.prototype.adjustPositionY = function() {
    if ($gameMessage.positionType() === 0) {
      this.y = this._parentWindow.y + this._parentWindow.height;
      this.y -= eval(Yanfly.Param.MSGNameBoxBufferY);
    } else {
      this.y = this._parentWindow.y;
      this.y -= this.height;
      this.y += eval(Yanfly.Param.MSGNameBoxBufferY);
    }
    if (this.y < 0) {
      this.y = this._parentWindow.y + this._parentWindow.height;
      this.y -= eval(Yanfly.Param.MSGNameBoxBufferY);
    }
};
 
//=============================================================================
// Window_Message
//=============================================================================
 
Yanfly.Message.Window_Message_createSubWindows =
    Window_Message.prototype.createSubWindows;
Window_Message.prototype.createSubWindows = function() {
    Yanfly.Message.Window_Message_createSubWindows.call(this);
    this._nameWindow = new Window_NameBox(this);
    Yanfly.nameWindow = this._nameWindow;
    var scene = SceneManager._scene;
    scene.addChild(this._nameWindow);
};
 
Window_Message.prototype.numVisibleRows = function() {
    return $gameSystem.messageRows();
};
 
Window_Message.prototype.windowWidth = function() {
    return $gameSystem.messageWidth();
};
 
Window_Message.prototype.wordwrapWidth = function(){
  if (Yanfly.Param.MSGTightWrap && $gameMessage.faceName() !== '') {
    return this.contents.width - this.newLineX();
  }
  return Window_Base.prototype.wordwrapWidth.call(this);
};
 
Window_Message.prototype.adjustWindowSettings = function() {
    this.width = this.windowWidth();
    this.height = Math.min(this.windowHeight(), Graphics.boxHeight);
    if (Math.abs(Graphics.boxHeight - this.height) < this.lineHeight()) {
      this.height = Graphics.boxHeight;
    }
    this.createContents();
    this.x = (Graphics.boxWidth - this.width) / 2;
};
 
Yanfly.Message.Window_Message_startMessage =
    Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
    this._nameWindow.deactivate();
    Yanfly.Message.Window_Message_startMessage.call(this);
};
 
Yanfly.Message.Window_Message_terminateMessage =
    Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
    this._nameWindow.deactivate();
    Yanfly.Message.Window_Message_terminateMessage.call(this);
};
 
Yanfly.Message.Window_Message_newPage =
    Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function(textState) {
    this.adjustWindowSettings();
    Yanfly.Message.Window_Message_newPage.call(this, textState);
};
 
Window_Message.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};
 
Window_Message.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};
 
Window_Message.prototype.newLineX = function() {
    if ($gameMessage.faceName() === '') {
      return 0;
    } else {
      return eval(Yanfly.Param.MSGFaceIndent);
    }
};
 
Window_Message.prototype.isFastForward = function() {
    if (!$gameSystem.isFastFowardEnabled()) return false;
    return Input.isPressed(Yanfly.Param.MSGFastForwardKey);
};
 
Yanfly.Message.Window_Message_updateInput =
    Window_Message.prototype.updateInput;
Window_Message.prototype.updateInput = function() {
    if (this.pause && this.isFastForward()) {
      if (!this._textState) {
        this.pause = false;
        this.terminateMessage();
      }
    }
    return Yanfly.Message.Window_Message_updateInput.call(this);
};
 
Yanfly.Message.Window_Message_updateShowFast =
    Window_Message.prototype.updateShowFast;
Window_Message.prototype.updateShowFast = function() {
    if (this.isFastForward()) this._showFast = true;
    Yanfly.Message.Window_Message_updateShowFast.call(this);
};
 
Yanfly.Message.Window_Message_updateWait =
    Window_Message.prototype.updateWait;
Window_Message.prototype.updateWait = function() {
    if (this.isFastForward()) return false;
    return Yanfly.Message.Window_Message_updateWait.call(this);
};
 
Yanfly.Message.Window_Message_startWait =
    Window_Message.prototype.startWait;
Window_Message.prototype.startWait = function(count) {
    if (this._checkWordWrapMode) return;
    Yanfly.Message.Window_Message_startWait.call(this, count);
    if (this.isFastForward()) this._waitCount = 0;
};
 
Yanfly.Message.Window_Message_startPause =
    Window_Message.prototype.startPause;
Window_Message.prototype.startPause = function() {
    if (this._checkWordWrapMode) return;
    Yanfly.Message.Window_Message_startPause.call(this);
};
 
Window_Message.prototype.convertEscapeCharacters = function(text) {
    text = Window_Base.prototype.convertEscapeCharacters.call(this, text);
    text = this.convertNameBox(text);
    text = this.convertMessageCharacters(text);
    return text;
};
 
Window_Message.prototype.convertNameBox = function(text) {
    text = text.replace(/\x1bN\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 1);
    }, this);
    text = text.replace(/\x1bN1\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 1);
    }, this);
    text = text.replace(/\x1bN2\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 2);
    }, this);
    text = text.replace(/\x1bN3\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 3);
    }, this);
    text = text.replace(/\x1bNC\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 3);
    }, this);
    text = text.replace(/\x1bN4\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 4);
    }, this);
    text = text.replace(/\x1bN5\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 5);
    }, this);
    text = text.replace(/\x1bNR\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 5);
    }, this);
    return text;
};
 
Window_Message.prototype.convertMessageCharacters = function(text) {
    text = text.replace(/\x1bAF\[(\d+)\]/gi, function() {
        var i = parseInt(arguments[1]);
        return this.convertActorFace($gameActors.actor(i));
    }.bind(this));
    text = text.replace(/\x1bPF\[(\d+)\]/gi, function() {
        var i = parseInt(arguments[1]);
        return this.convertActorFace($gameParty.members()[i - 1]);
    }.bind(this));
    return text;
};
 
Window_Message.prototype.convertActorFace = function(actor) {
    $gameMessage.setFaceImage(actor.faceName(), actor.faceIndex());
    return '';
};
 
Yanfly.Message.Window_Message_processEscapeCharacter =
    Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
    case '!':
      if (!this.isFastForward()) this.startPause();
      break;
    case 'W':
      this.startWait(this.obtainEscapeParam(textState));
    default:
      Yanfly.Message.Window_Message_processEscapeCharacter.call(this,
        code, textState);
      break;
    }
};
 
if (Yanfly.Param.MSGNameBoxClose) {
 
Yanfly.Message.Window_Message_doesContinue =
  Window_Message.prototype.doesContinue;
Window_Message.prototype.doesContinue = function() {
  var value = Yanfly.Message.Window_Message_doesContinue.call(this);
  if (!value) return false;
  if (this.hasDifferentNameBoxText()) {
    return false;
  }
  return true;
};
 
Window_Message.prototype.hasDifferentNameBoxText = function() {
  var texts = $gameMessage._texts;
  var length = texts.length;
  var open = this._nameWindow.isOpen();
  for (var i = 0; i < length; ++i) {
    var text = texts[i];
    if (text.length <= 0) continue;
    if (Yanfly.MsgMacro) {
      text = this.convertMacroText(text);
      text = text.replace(/\x1b/gi, '\\');
    }
    if (text.match(/\\(?:N|N1|N2|N3|N4|N5|NC|NR)<(.*)>/i)) {
      var name = String(RegExp.$1);
    } else if (text.match(/\\(?:ND|ND1|ND2|ND3|ND4|ND5|NDC|NDR)<(.*)>/i)) {
      var name = String(RegExp.$1);
    } else if (text.match(/\\(?:NT|NT1|NT2|NT3|NT4|NT5|NTC|NTR)<(.*)>/i)) {
      var name = String(RegExp.$1);
    }
    if (name) {
      name = name.replace(/\\V\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\V\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\N\[(\d+)\]/gi, function() {
        return this.actorName(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\P\[(\d+)\]/gi, function() {
        return this.partyMemberName(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\/gi, '\x1b');
    }
    if (name && !open) return true;
    if (name && name !== this._nameWindow._lastNameText) {
      return true;
    }
  }
  if (open && !name) return true;
  return false;
};
 
} // Yanfly.Param.MSGNameBoxClose
 
//=============================================================================
// End of File
//=============================================================================