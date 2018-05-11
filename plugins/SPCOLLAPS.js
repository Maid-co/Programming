

Sprite_Enemy.prototype.updateCollapse = function() {
    this.blendMode = Graphics.BLEND_ADD;
    this.setBlendColor([255, 128, 128, 128]);
    this.scale.y += 1
    this.opacity *= this._effectDuration / (this._effectDuration + 1);
};
