//Stamina Hud Increase
function HIncrease() 
{
    this.initialize.apply(this, arguments);
}


HIncrease.prototype = Object.create(Window_Base.prototype);

HIncrease.prototype.constructor = HIncrease;

HIncrease.prototype.initialize = function(x, y)
{
	Window_Base.prototype.initialize.call(this, x, y);
    this.update();
};


HIncrease.prototype.update = function()
{
	if($gameVariables.value(42) == 0)
	{
		var y = Math.floor((Math.random() * 500) + 1);
		//if(y <= 5)
		$gameVariables.setValue(15, 100);
		//Excalibur
	}
}

Scene_Map.prototype.HIncrease = function()
{
	this._varI = new HIncrease();
	this._varI.x = 400;
    this._varI.y = 0;
	this._varI.opacity= 0;
	this.addWindow(this._varI);
}