/*:
* @param stamina
* @plugindesc HUD untuk stamina
* @author "Z"
* @desc HUD untuk stamina
* @default 100
*/


function HUD() 
{
    this.initialize.apply(this, arguments);
}


HUD.prototype = Object.create(Window_Base.prototype);

HUD.prototype.constructor = HUD;

HUD.prototype.initialize = function(x, y)
{
    var panjang = this.lebarwindow();
    var tinggi = this.tinggiwindow();
	Window_Base.prototype.initialize.call(this, x, y, panjang, tinggi);
    this.update();
};

HUD.prototype.lebarwindow = function() 
{
    return 700;
};

HUD.prototype.tinggiwindow = function()
{
	return 300;
};

Game_Map.prototype.isDashDisabled = function() {
    return !$dataMap._hilangkandash ;
};

var ddash = Game_Player.prototype.isdashing;

HUD.prototype.update = function() 
{
	if(Input.isTriggered('pageup'))
	{
		$gameVariables.setValue(99, 1);
	}
	if(Input.isTriggered('pagedown'))
	{
		$gameVariables.setValue(99, 0);
	}
	if($gameVariables.value(42) == 1)
	{
		
	if($gameVariables.value(99) == 1)
	{
		this.contents.clear();
		if($gameVariables.value(15) >= 100)
		{
			$gameVariables.setValue(15, 100);
		}
		
		else if($gameVariables.value(15) <= 0)
		{
		$gameVariables.setValue(15, 0);
		}
		
		if($gameVariables.value(15) == 0)
		{
			$dataMap._hilangkandash = false;
			Game_CharacterBase.prototype.realMoveSpeed = function() {
			return this._moveSpeed + (this.isDashing() ? 0 : 0);
			};
		}
		
		else if($gameVariables.value(15) >= 1)
		{
			Game_CharacterBase.prototype.realMoveSpeed = function() {
			return this._moveSpeed + (this.isDashing() ? 2 : 1);
			};
			$dataMap._hilangkandash = true;
			var y = Math.floor((Math.random() * 5000) + 1);
		
			if(y <= 5)
			{
				$gameVariables.setValue(15, $gameVariables.value(15)- 1);
			}
			if($gamePlayer.isDashing())
			{
				var x = Math.floor((Math.random() * 1000) + 1); 
		
				if(x <= 3)
				{
					$gameVariables.setValue(15, $gameVariables.value(15)- 1);
				}
			}
		}

	};
	
	if($gameVariables.value(99) == 0)
	{
    ResourceHandler.retry();
	this.contents.clear();
	var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
	
	if($gameVariables.value(15) >= 100)
	{
		$gameVariables.setValue(15, 100);
	}
	
	else if($gameVariables.value(15) <= 0)
	{
		$gameVariables.setValue(15, 0);
	}
	
	if($gameVariables.value(15) == 0)
	{
		$dataMap._hilangkandash = false;
		Game_CharacterBase.prototype.realMoveSpeed = function() {
		return this._moveSpeed + (this.isDashing() ? 0 : 0);
		};
	}
	
	else if($gameVariables.value(15) >= 1)
	{
		Game_CharacterBase.prototype.realMoveSpeed = function() {
		return this._moveSpeed + (this.isDashing() ? 2 : 1);
		};
		$dataMap._hilangkandash = true;
		var y = Math.floor((Math.random() * 5000) + 1);
	
		if(y <= 5)
		{
			$gameVariables.setValue(15, $gameVariables.value(15)- 1);
		}
		if($gamePlayer.isDashing())
		{
			var x = Math.floor((Math.random() * 1000) + 1); 
		
			if(x <= 3)
			{
				$gameVariables.setValue(15, $gameVariables.value(15)- 1);
			}
		}
	}
	this.drawGauge(0, 0, 350, $gameVariables.value(15) / 100, color1, color2);
	this.drawText('Stamina', 0, 0, 80);
    this.drawCurrentAndMax($gameVariables.value(15), 100, 0, 0, 250,
                           this.normalColor(), this.normalColor());
	}
};
if($gameVariables.value(42) == 2)
{
	
	if($gameVariables.value(99) == 1)
	{
		this.contents.clear();
		if($gameVariables.value(15) >= 100)
		{
			$gameVariables.setValue(15, 100);
		}
		
		else if($gameVariables.value(15) <= 0)
		{
		$gameVariables.setValue(15, 0);
		}
		
		if($gameVariables.value(15) == 0)
		{
			$dataMap._hilangkandash = false;
			Game_CharacterBase.prototype.realMoveSpeed = function() {
			return this._moveSpeed + (this.isDashing() ? 0 : 0);
			};
		}
		
		else if($gameVariables.value(15) >= 1)
		{
			Game_CharacterBase.prototype.realMoveSpeed = function() {
			return this._moveSpeed + (this.isDashing() ? 2 : 1);
			};
			$dataMap._hilangkandash = true;
			var y = Math.floor((Math.random() * 5000) + 1);
		
			if(y <= 5)
			{
				$gameVariables.setValue(15, $gameVariables.value(15)- 1);
			}
			if($gamePlayer.isDashing())
			{
				var x = Math.floor((Math.random() * 1000) + 1); 
		
				if(x <= 3)
				{
					$gameVariables.setValue(15, $gameVariables.value(15)- 1);
				}
			}
		}

	};
	
	if($gameVariables.value(99) == 0)
	{
    ResourceHandler.retry();
	this.contents.clear();
	var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
	
	if($gameVariables.value(15) >= 100)
	{
		$gameVariables.setValue(15, 100);
	}
	
	else if($gameVariables.value(15) <= 0)
	{
		$gameVariables.setValue(15, 0);
	}
	
	if($gameVariables.value(15) == 0)
	{
		$dataMap._hilangkandash = false;
		Game_CharacterBase.prototype.realMoveSpeed = function() {
		return this._moveSpeed + (this.isDashing() ? 0 : 0);
		};
	}
	
	else if($gameVariables.value(15) >= 1)
	{
		Game_CharacterBase.prototype.realMoveSpeed = function() {
		return this._moveSpeed + (this.isDashing() ? 2 : 1);
		};
		$dataMap._hilangkandash = true;
		var y = Math.floor((Math.random() * 500) + 1);
	
		if(y <= 5)
		{
			$gameVariables.setValue(15, $gameVariables.value(15)+ 1);
		}
		if($gamePlayer.isDashing())
		{
			var x = Math.floor((Math.random() * 500) + 1); 
		
			if(x <= 5)
			{
				$gameVariables.setValue(15, $gameVariables.value(15)+ 1);
			}
		}
	}
	this.drawGauge(0, 0, 350, $gameVariables.value(15) / 100, color1, color2);
	this.drawText('Stamina', 0, 0, 80);
    this.drawCurrentAndMax($gameVariables.value(15), 100, 0, 0, 250,
                           this.normalColor(), this.normalColor());
	}
}
}


HUD.prototype.buka = function()
{
	this.update();
	Window_Base.prototype.open.call(this);
};



var memulai_map = Scene_Map.prototype.start;

Scene_Map.prototype.start = function() {
   memulai_map.call(this);
   this.buatvariablewindow();
};
Scene_Map.prototype.SHUD = function() 
{
	console.log("hud");
};
Scene_Map.prototype.buatvariablewindow = function()
{
	this._var = new HUD();
	this._var.x = 400;
    this._var.y = 0;
	this._var.opacity= 0;
	this.addWindow(this._var);
}

var perbaharui = Scene_Map.prototype.update;

Scene_Map.prototype.update = function() 
{
    perbaharui.call(this);
};

HUD.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
    var fillW = Math.floor(width * rate);
    var gaugeY = y + this.lineHeight() - 8;
    this.contents.fillRect(x, gaugeY, width, 20, this.gaugeBackColor());
    this.contents.gradientFillRect(x, gaugeY, fillW, 20, color1, color2);
};

