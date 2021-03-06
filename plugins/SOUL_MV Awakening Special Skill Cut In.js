//--------------------------------------------------------
// SOUL_MV Awakening Special Skill Cut In.js
//--------------------------------------------------------
/*:
* @plugindesc v3.0 Creates a classic Ougi / Awakening Cut In Image
* @author Soulpour777
*
* @help
//--------------------------------------------------------
// Description
//--------------------------------------------------------

Current Version: 3.0

Allows special skills and critical hits to play a cutin
animation.

Do you wish to show a cutin image when a special skill is
cast? This plugin allows you to do that, with two different
types, the sliding and the classic static image.


//--------------------------------------------------------
// Documentation
//--------------------------------------------------------
Q: So, how can I make a skill appear a cutin?
A: You have to put this on the note tag of the skill:
<anime:awakening>
(no spaces)

Q: I did try that. So the images are determined
which actor / enemy uses it?

A: That's right. if you want the enemy to display
his / her cutin, you need to put the name of the
enemy on the file, for example:

Bat_skillName

Same goes for Actors:

Harold_skillName

where skillName is the name of the skill you are performing.
For example, Harold casts Spark. An image named

Harold_Spark should be on the awakening folder.

This applies both to Actors and Enemies.

The images must be placed under the img / awakening folder.

For the Critical Hits, you need to do a different setup.

The actor's name and _critical should be in the 
img / awakening folder. For example, if you want
to display Harold when he hits a critical hit,
he should have an image called

Harold_critical

same goes with an enemy. For example, Minotaur
hits a critical hit, then it should have a 
file called:

Minotaur_critical.

Q: My enemy's cutin doesn't appear! What happened?
A: To allow the enemy have the cutin, place this note tag on the enemy notebox:
(note: no spaces)
<enemyAnime:allow>

//--------------------------------------------------------
// Terms of Use:
// You are free to use this script only Commercial / Non Commercial Use.
//--------------------------------------------------------
* @param OriginalX
* @desc The original position of the image horizontally. - value is Left, + value is Right. (Slide Action)
* @default 400
*
* @param Slide Cutin Image
* @desc The image used when the cutin ensues to slide.
* @default slide_cutin
* 
* @param MotionStyle
* @desc Motion type of cutin appearance. 
slide or static.
* @default slide
*
* @param SlideY
* @desc The y axis of the cutin image during Slide Action only.
* @default 150
*
* @param StaticX
* @desc The y axis of the cutin image during Static Action only.
* @default 270
*
* @param StaticY
* @desc The y axis of the cutin image during Static Action only.
* @default 212
*
* @param OriginalOpacity
* @desc The original opacity of the cutin image.
* @default 255
*
* @param CutinSliderX
* @desc The original position of the image cutin slider horizontally. - value is Left, + value is Right.
* @default 0
*
* @param CutinSliderY
* @desc The original position of the image cutin slider horizontally. - value is Left, + value is Right.
* @default 150
*
* @param CutinSliderWidth
* @desc The width of the image cutin slider.
* @default 816
*
* @param CutinSliderHeight
* @desc The height of the image cutin slider.
* @default 278
*
* @param XMoveSpeed
* @desc How fast do you want the image to slide?
* @default 20
*
* @param FadeSpeed
* @desc How fast do you want the image to fade?
* @default 20 
*
* @param FadeSpeed
* @desc How fast do you want the cutin back image to scroll?
* @default 30 
*/

(function(){
	var Imported = Imported || {};
	Imported.Awakening = true;
	var Soulpour777 = Soulpour777 || {};
	Soulpour777.Awakening = {};
	Soulpour777.Awakening.params = PluginManager.parameters('SOUL_MV Awakening Special Skill Cut In');
    Soulpour777.Awakening.motionStyle = String(Soulpour777.Awakening.params['MotionStyle']);
    Soulpour777.Awakening.slideCutinImage = String(Soulpour777.Awakening.params['Slide Cutin Image'] || 'slide_cutin');
    Soulpour777.Awakening.battleInitialize = Scene_Battle.prototype.initialize;
    Soulpour777.Awakening.battleCreate = Scene_Battle.prototype.create;
    Soulpour777.Awakening.battleUpdate = Scene_Battle.prototype.update;
    Soulpour777.Awakening.battleperformActionEnd = Window_BattleLog.prototype.performActionEnd;
    Soulpour777.Awakening.originalImageX = Number(Soulpour777.Awakening.params['OriginalX'] || 400);
    Soulpour777.Awakening.originalOpacity = Number(Soulpour777.Awakening.params['OriginalOpacity'] || 400);
    Soulpour777.Awakening.slideActionY = Number(Soulpour777.Awakening.params['SlideY'] || 150);
    Soulpour777.Awakening.cutinSliderOriginalX = Number(Soulpour777.Awakening.params['CutinSliderX'] || 0);
    Soulpour777.Awakening.cutinSliderOriginalY = Number(Soulpour777.Awakening.params['CutinSliderY'] || 150);
    Soulpour777.Awakening.sliderWidth = Number(Soulpour777.Awakening.params['CutinSliderWidth'] || 816);
    Soulpour777.Awakening.sliderHeight = Number(Soulpour777.Awakening.params['CutinSliderHeight'] || 278);
    Soulpour777.Awakening.staticActionX = Number(Soulpour777.Awakening.params['StaticX'] || 270);
    Soulpour777.Awakening.staticActionY = Number(Soulpour777.Awakening.params['StaticY'] || 212);
    Soulpour777.Awakening.slideXMove = Number(Soulpour777.Awakening.params['XMoveSpeed'] || 20);
    Soulpour777.Awakening.slideFadeMove = Number(Soulpour777.Awakening.params['FadeSpeed'] || 20);
    Soulpour777.Awakening.slideScroll = Number(Soulpour777.Awakening.params['ScrollSpeed'] || 30);
    
    ImageManager.loadAwakening = function(filename, hue) {
        return this.loadBitmap('img/awakening/', filename, hue, true);
    };
    Window_BattleLog.prototype.performActionStart = function(subject, action) {
      var item = action.item();
      if (item.meta.anime && item.meta.anime === 'awakening') {
          if (subject instanceof Game_Actor) {
			  $gameTemp.reserveCommonEvent(7);
             SceneManager._scene.showAwakening(subject._name+ "_" + action.item().name);
             SceneManager._scene.updateAwakening = true;
          } else {
              if ($dataEnemies[subject._enemyId].meta.enemyAnime === "allow") {
                  SceneManager._scene.showAwakening($dataEnemies[subject._enemyId].name + "_" + action.item().name);
              }
            SceneManager._scene.updateAwakening = true;
          }

      }
      subject.performActionStart(action);
    };

    Soulpour777.Awakening._battleLogInitialize = Window_BattleLog.prototype.initialize;
    Window_BattleLog.prototype.initialize = function() {
        Soulpour777.Awakening._battleLogInitialize.call(this);
        this._currentSubject = null;
    };

    Window_BattleLog.prototype.displayActionResults = function(subject, target) {
        this._currentSubject = subject;
        if (target.result().used) {
            this.push('pushBaseLine');
            this.displayCritical(target);
            this.push('popupDamage', target);
            this.push('popupDamage', subject);
            this.displayDamage(target);
            this.displayAffectedStatus(target);
            this.displayFailure(target);
            this.push('waitForNewLine');
            this.push('popBaseLine');
        }

    };


    Window_BattleLog.prototype.displayCritical = function(target) {
        if (target.result().critical) {
            if (target.isActor()) {
                this.push('addText', TextManager.criticalToActor);
                SceneManager._scene.showAwakening($dataEnemies[this._currentSubject._enemyId].name + "_critical");
                SceneManager._scene.updateAwakening = true;
            } else {
                SceneManager._scene.showAwakening(this._currentSubject._name+ "_critical");
                this.push('addText', TextManager.criticalToEnemy);
                SceneManager._scene.updateAwakening = true;
            }
        }
    };
    Window_BattleLog.prototype.performActionEnd = function(subject) {
        Soulpour777.Awakening.battleperformActionEnd.call(this, subject);
        SceneManager._scene.updateAwakening = false;
    };

    Scene_Battle.prototype.initialize = function() {
        Soulpour777.Awakening.battleInitialize.call(this);
        this._awakeningSprite = null;
        this._awakeningSlider = null;
        this.updateAwakening = false;
    };    
    Scene_Battle.prototype.create = function() {
        Soulpour777.Awakening.battleCreate.call(this);
        this.createAwakening();
    };    
    Scene_Battle.prototype.createAwakening = function(){
        this._awakeningSprite = new Sprite();
        this._awakeningSlider = new TilingSprite();
        this._awakeningSlider.move(Soulpour777.Awakening.cutinSliderOriginalX, Soulpour777.Awakening.cutinSliderOriginalY, Soulpour777.Awakening.sliderWidth, Soulpour777.Awakening.sliderHeight);
        this.addChildAt(this._awakeningSprite, 1);
        this.addChildAt(this._awakeningSlider, 1);
    };
    Scene_Battle.prototype.showAwakening = function(awakeningName){
        if (Soulpour777.Awakening.motionStyle === "slide") {
            this._awakeningSprite.x = Soulpour777.Awakening.originalImageX;
            this._awakeningSprite.y = Soulpour777.Awakening.slideActionY;
            this._awakeningSprite.opacity = Soulpour777.Awakening.originalOpacity; 
            this._awakeningSlider.opacity = Soulpour777.Awakening.originalOpacity;
            this._awakeningSlider.bitmap = ImageManager.loadAwakening(Soulpour777.Awakening.slideCutinImage);
        } 
        if (Soulpour777.Awakening.motionStyle === "static") {
             this._awakeningSprite.x = Soulpour777.Awakening.staticActionX;
            this._awakeningSprite.y = Soulpour777.Awakening.staticActionY;
            this._awakeningSlider.bitmap = ImageManager.loadAwakening(Soulpour777.Awakening.slideCutinImage);
            this._awakeningSlider.move(Soulpour777.Awakening.staticActionX, Soulpour777.Awakening.staticActionY, Soulpour777.Awakening.sliderWidth, Soulpour777.Awakening.sliderHeight);
             this._awakeningSprite.opacity = Soulpour777.Awakening.originalOpacity; 
        } 
        this._awakeningSprite.bitmap = ImageManager.loadAwakening(awakeningName);
        
        this.moveAwakening();
    };
    
    Scene_Battle.prototype.moveAwakening = function(){
        //slide sprite
        if (Soulpour777.Awakening.motionStyle === 'slide') {
            if (this.updateAwakening) {
                if(this._awakeningSprite.x != 0){
                    this._awakeningSprite.x -= Soulpour777.Awakening.slideXMove;
                } else {
                    this._awakeningSprite.x = 0;
                    this._awakeningSlider.opacity = 0;
                    this._awakeningSprite.opacity -= Soulpour777.Awakening.slideFadeMove;
                }
                this._awakeningSlider.origin.x += Soulpour777.Awakening.slideScroll;
            } else {       
            }
        }
        if (Soulpour777.Awakening.motionStyle === 'static') {
            if (this.updateAwakening){  
                this._awakeningSprite.opacity = Soulpour777.Awakening.originalOpacity;
                this._awakeningSlider.opacity = Soulpour777.Awakening.originalOpacity;
                this._awakeningSprite.x = Soulpour777.Awakening.staticActionX;
                this._awakeningSprite.y = Soulpour777.Awakening.staticActionY;
                this._awakeningSlider.x = 0;
                this._awakeningSlider.y = Soulpour777.Awakening.staticActionY;                
            } else {
                this._awakeningSprite.opacity = 0;
                this._awakeningSlider.opacity = 0;            
            }
        }
    };
    

    Scene_Battle.prototype.update = function() {
        Soulpour777.Awakening.battleUpdate.call(this);
        this.moveAwakening();
    };

})();