/*

@plugindesc 

* Plugin untuk judul

*/



(function() {
	
	Scene_Title.prototype.drawGameTitle = function() {
    	var x = 20;
    	var y = Graphics.height / 3;
    	var maxWidth = Graphics.width - x * 2;
     	var text = $dataSystem.gameTitle;
    	this._gameTitleSprite.bitmap.outlineColor = 'blue';
    	this._gameTitleSprite.bitmap.outlineWidth = 8;
    	this._gameTitleSprite.bitmap.fontSize = 86;
    	this._gameTitleSprite.bitmap.drawText(text, x, y, maxWidth, 58, 'center');
	};

})();
 