function Windows() 
{
    this.initialize.apply(this, arguments);
}
Windows.prototype = Object.create(Window_Base.prototype);

Windows.prototype.constructor = Windows;

Windows.prototype.initialize = function(x, y)
{
    var panjang = this.lebarwindow();
    var tinggi = this.tinggiwindow();
	Window_Base.prototype.initialize.call(this, x, y, panjang, tinggi);
};

Windows.prototype.lebarwindow = function() 
{
    return 100;
};

Windows.prototype.tinggiwindow = function()
{
	return 65;
};

Scene_Map.prototype.buatwindow = function()
{
	this.WG = new Windows();
	this.WG.x = 0;
	this.WG.y = 380;
	this.WG.opacity= 255;
	this.addWindow(this.WG);
}

//-------------------------------------------------------------//

function WindowsChat() 
{
    this.initialize.apply(this, arguments);
}


WindowsChat.prototype = Object.create(Window_Base.prototype);

WindowsChat.prototype.constructor = WindowsChat;

WindowsChat.prototype.initialize = function(x, y)
{
    var panjang = this.lebarwindow();
    var tinggi = this.tinggiwindow();
	Window_Base.prototype.initialize.call(this, x, y, panjang, tinggi);
    this.update();
};

WindowsChat.prototype.lebarwindow = function() 
{
    return 200;
};

WindowsChat.prototype.tinggiwindow = function()
{
	return 68;
};

WindowsChat.prototype.update = function() 
{
	this.contents.clear();
	if($gameVariables.value(100) == 433)
	{
		this.drawText('Dev', 0, 0, 80);
		this.opacity = 255;
	}
	//------------------Character Halls------------------------//
	else if($gameVariables.value(100) == 1)
	{
		this.drawText('Raku', 0, 0, 80);
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 2)
	{
		this.drawText('Riene', 0, 0, 80);
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 3)
	{
		this.drawText('Rkai', 0, 0, 80);
		this.opacity = 255;
	}
	//-------------------NPC HAlls------------------------------//
	else if($gameVariables.value(100) == 4)
	{
		this.drawText('Lia', 0, 0, 80);
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 5)
	{
		this.drawText('Lucy', 0, 0, 80);
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 6)
	{
		this.drawText('Nom', 0, 0, 80);
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 7)
	{
		this.drawText('Guard', 0, 0, 80);
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 8)
	{
		this.drawText('Raft', 0, 0, 80);
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 9)
	{
		this.drawText('Cari', 0, 0, 80);
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 10)
	{
		this.drawText('Captain', 0, 0, 80);
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 11)
	{
		this.drawText('varl', 0, 0, 80);
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 12)
	{
		this.drawText('Alt', 0, 0, 80);
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 14)
	{
		this.drawText('Slime Boss',0 , 0, 80)
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 15)
	{
		this.drawText('Old Man',0 , 0, 80)
		this.opacity = 255;
	}
	/*
	else if($gameVariables.value(100) == 16)
	{
		this.drawText('1',0 , 0, 80)
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 17)
	{
		this.drawText('1',0 , 0, 80)
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 18)
	{
		this.drawText('1',0 , 0, 80)
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 19)
	{
		this.drawText('1',0 , 0, 80)
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 20)
	{
		this.drawText('1',0 , 0, 80)
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 21)
	{
		this.drawText('1',0 , 0, 80)
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 22)
	{
		this.addtext(1'1,0 ,0 ,80)
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 23)
	{
		this.addtext('1'1,0 ,0 ,80)
		this.opacity = 255;
	}
	else if($gameVariables.value(100) == 24)
	{
		this.addtext('1',0 ,0 ,80)
		this.opacity = 255;
	}
	*/
	//-----------Ending halls----------//
	else
	{
		this.opacity = 0;
	}
};

var memulai_map1 = Scene_Map.prototype.start;

Scene_Map.prototype.start = function() {
   memulai_map1.call(this);
   this.BuatNamaWindow();
};

Scene_Map.prototype.BuatNamaWindow = function()
{
	this._varr = new WindowsChat();
	this._varr.x = 0;
    this._varr.y = 377;
	this._varr.opacity= 0;
	this.addWindow(this._varr);
}

var perbaharui1 = Scene_Map.prototype.update;

Scene_Map.prototype.update = function() 
{
    perbaharui1.call(this);
};

