var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

var block_image_object = "";
function new_image(get_image)
{
    fabric.image.fromURL (get_image, function(img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({
    top:player_y,
    left:0
    });
    canvas.add(block_image_object);
    });
    
}

function playSound(){
	x.play();
}
