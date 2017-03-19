(function(app){
$(document).ready(function(e) {
   onResizeFn();
});
$(window).resize(function(e){
	onResizeFn();
});
function onResizeFn()
{
	var shellWidth = 1920;
    var shellHeight = 1080;
    var newShellHeight;
    var newShellWidth;
    var agent = navigator.userAgent.toLowerCase();
    var is_ipad = ((agent.indexOf('ipad') != -1));
    var actWid = Number($(window).width());
    var actHgt = Number($(window).height())
    if (actHgt < actWid) {
        newShellHeight = actHgt;
        var scale = Number(shellHeight / newShellHeight).toFixed(2);
        newShellWidth = (shellWidth / shellHeight) * newShellHeight;
        var _aleft = ($(window).width() / 2) - (Number(newShellWidth) / 2);
        if (_aleft < 0) {
            newShellWidth = actWid;
            scale = Number(shellWidth / newShellWidth).toFixed(2);
            newShellHeight = (shellHeight / shellWidth) * newShellWidth;
        }

         if(actWid>=shellWidth && actHgt>=shellHeight){
            newShellWidth = shellWidth;
            newShellHeight = shellHeight
            scale = 1;
        }

        $('.container').css({
            "transform": "translate(-" + (shellWidth / 2) + "px,-" + (shellHeight / 2) + "px) scale(" + (1 / scale) + "," + (1 / scale) + ") translate(" + (shellWidth / 2) + "px," + (shellHeight / 2) + "px)",
            "-ms-transform": "translate(-" + (shellWidth / 2) + "px,-" + (shellHeight / 2) + "px) scale(" + (1 / scale) + "," + (1 / scale) + ") translate(" + (shellWidth / 2) + "px," + (shellHeight / 2) + "px)",
            "-webkit-transform": "translate(-" + (shellWidth / 2) + "px,-" + (shellHeight / 2) + "px) scale(" + (1 / scale) + "," + (1 / scale) + ") translate(" + (shellWidth / 2) + "px," + (shellHeight / 2) + "px)"
        });
    } else {
        newShellWidth = actWid;
        var scale = Number(shellWidth / newShellWidth).toFixed(2);
        newShellHeight = (shellHeight / shellWidth) * newShellWidth;


         if(actWid>=shellWidth && actHgt>=shellHeight){
             newShellWidth = shellWidth;
            newShellHeight = shellHeight
            scale = 1;
        }

        $('.container').css({
            "transform": "translate(-" + (shellWidth / 2) + "px,-" + (shellHeight / 2) + "px) scale(" + (1 / scale) + "," + (1 / scale) + ") translate(" + (shellWidth / 2) + "px," + (shellHeight / 2) + "px)",
            "-ms-transform": "translate(-" + (shellWidth / 2) + "px,-" + (shellHeight / 2) + "px) scale(" + (1 / scale) + "," + (1 / scale) + ") translate(" + (shellWidth / 2) + "px," + (shellHeight / 2) + "px)",
            "-webkit-transform": "translate(-" + (shellWidth / 2) + "px,-" + (shellHeight / 2) + "px) scale(" + (1 / scale) + "," + (1 / scale) + ") translate(" + (shellWidth / 2) + "px," + (shellHeight / 2) + "px)"
        });
    }
    scaleVal = scale;
    var _left = 0//($(window).width() / 2) - (Number(newShellWidth) / 2);
    var _top = 0//($(window).height() / 2) - (Number(newShellHeight) / 2);
    $('.container').css("left", _left);
    $('.container').css("top", _top);

    currentHeight = (shellHeight)*(1/scale)
    currentWidth = shellWidth*(1/scale)
    console.log('askdalskd ',$('#audiobar').height())
    $('#audiobar').css('top',currentHeight-32)
     $('#audioCtrl').css('width',currentWidth)


} 

})(Scale=Scale||{})

var Scale;
var currentHeight = 0;