//from lordbone
function Gambar(pictureID,newPicture){
	if(pictureID <= 0 || pictureID > 100){ console.log("You're over the limit btw"); }
	$gameScreen._pictures[pictureID]._name = newPicture;
}