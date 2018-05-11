//var fname = String("Face_" + this._actor._actorId)
function WG() 
{
    this.initialize.apply(this, arguments);
}
WG.prototype = Object.create(Window_Base.prototype);
WG.prototype.constructor = WG;

WG.prototype.initialize = function(x, y) 
{
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

WG.prototype.windowWidth = function() 
{
    return Graphics.width / 2;
};

WG.prototype.windowHeight = function() 
{
    return Graphics.height / 2;
};

WG.prototype.refresh = function() 
{
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
    this.drawTextEx("What Now??", 5, 0);
    this.drawTextEx("What Now??", 5, 150);
//    this.drawIcon(2, 0, 0);
};

WG.prototype.open = function() 
{
    this.refresh();
    Window_Base.prototype.open.call(this);

};
function WGU() 
{
    this.initialize.apply(this, arguments);
}

WGU.prototype = Object.create(Window_Base.prototype);
WGU.prototype.constructor = WGU;

WGU.prototype.initialize = function(x, y) 
{
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

WGU.prototype.windowWidth = function() 
{
    return Graphics.width / 4;
};

WGU.prototype.windowHeight = function() 
{
    return Graphics.height / 4;
};

WGU.prototype.refresh = function() 
{
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
    this.drawTextEx("What Now??", 5, 0);
//    this.drawIcon(2, 0, 0);
};

WGU.prototype.open = function() 
{
    this.refresh();
    Window_Base.prototype.open.call(this);

};


function sp() 
{
    this.initialize.apply(this, arguments);
}

sp.prototype = Object.create(Scene_MenuBase.prototype);

sp.prototype.constructor = sp;

sp.prototype.initialize = function() 
{
    Scene_MenuBase.prototype.initialize.call(this);
};

sp.prototype.create = function() 
{
    //membuat window
    Scene_MenuBase.prototype.create.call(this);
    this.WGS = new WG(0,0);
    this.WGS.x = Graphics.width / 2 -300;
    this.WGS.y = Graphics.height / 2 -100;
    this.WGN = new WGU(0,0);
    this.WGN.x = Graphics.width / 2 -200;
    this.WGN.y = Graphics.height / 2 -200;
    // nambah window
	//this.addChild(_image_face);
    this.addWindow(this.WGN);
    this.addWindow(this.WGS);
};

sp.prototype.start = function() 
{
    Scene_MenuBase.prototype.start.call(this);
};

sp.prototype.update = function()
{
    Scene_MenuBase.prototype.update.call(this);
    if(Input.isTriggered('cancel'))
    {
        SceneManager.goto(Scene_Map);
        SoundManager.playCancel();
    }
    else if (Input.isTriggered('touch'))
    {
        SceneManager.goto(Scene_Map);
    }
}

Window_MenuCommand.prototype.addOriginalCommands = function() 
{
    this.addCommand("Load", 'load', true);
    this.addCommand("barang", 'item', true);
};

var Menu = sp.prototype.create;


Scene_Menu.prototype.createWindow = function() {
    Menu.call(this);
    this._command.setHandler('load',   this.commandLoad.bind(this));
    this._command.sethandler('item', this.commandItem.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_Menu.prototype.commandLoad = function ()
{
    SceneManager.push(Scene_Load);
}
