/*: 
* @param ChrName
* @desc This is for character name!!
* @default Raku-Sama
*
* @param Number
* @desc Number test!!
* @default 433
*/
/*
var CharName = String(params['ChrName'] || "Raku-Sama");
var Tname = Number(param['Number'] || 433);
*/

Game_System.prototype.X_Y_variable;

Game_System.prototype.Z_X_Y_variable = function()
{
	this.X_Y_variable = 50;
	this.Print_X_Y_variable;
}

Game_System.prototype.Print_X_Y_variable = function()
{
	console.log(this.Print_X_Y);
}