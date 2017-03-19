var imgPreloadArray = new Array("svg/bigPlay.svg",
								"svg/cone.svg",
								"svg/cone.svg",
								"svg/Triangle_with-cone.svg",
								"svg/Triangle2_with_black-dot.svg",
								"svg/Vocab_Box.svg",
								"svg/Green_cone.svg",
								"svg/Green_line.svg",
								"svg/Green_patch.svg",
								"svg/Green_Square-line.svg",
								"svg/Only_Triangle.svg",
								"svg/orenge-Fill.svg",
								"svg/Triangle_with_black-dot.svg",
								"audio/animation.mp3");
var imagePreCount = 0;
for(var pId = 0; pId < imgPreloadArray.length; pId++)
{
	var img = new Image();
	img.onload = imagePreloaded;
	img.src = imgPreloadArray[pId];
}
function imagePreloaded()
{
	imagePreCount++;
}