var animationAudio = null;

$(document).ready(function(){

	var idleTime = 0;
	var intervalArr = new Array();
//var idleInterval



	// $(document).bind("keypress mousemove touchmove touchstart",function(e){
	// 	 	idleTime = 0;
	// 	 	 $("#audioCtrl").addClass('show');
	// 	 	 console.log("calllll")
	// 	 	 idleInterval = setInterval(timerIncrement, 1000);

	// 	 });

	$(window).load(function(e){
           $(".loader").delay(1000).fadeOut("slow");
           $('.loadDiv').delay(1000).fadeOut(300);
	});
	$(".container").on('mousemove',function(){
		idleTime = 0;
		 $("#audioCtrl").addClass('show');
		 console.log("calllll")
		 for(i=0;i<intervalArr.length;i++)
		 {
		 	window.clearInterval(intervalArr[i]);
		 }
		 idleInterval = window.setInterval(timerIncrement, 1000);
		 intervalArr.push(idleInterval);
		 
	})
	
	  MathJax.Hub.Register.StartupHook("End",function () {
  		 createTimeline()
  		 audLoaded = true;

  		 // audio setup
  		 animationAudio = document.getElementById("audioCtrl");//new Audio('audio/animation.mp3');

  		 animationAudio.onplay = function() {
		    TweenLite.ticker.addEventListener('tick',Update);
		};
		animationAudio.onpause = function() {
		    TweenLite.ticker.removeEventListener('tick',Update);
		};
		animationAudio.onseeked = function(){
		    tl.progress(animationAudio.currentTime/animationAudio.duration);
		}

		animationAudio.ontimeupdate = function(){
		    tl.progress(animationAudio.currentTime/animationAudio.duration);
		};


  		 $('#bigPlayButton').bind("click",function(){animationAudio.play();})

	});

	  function timerIncrement() {
		
			console.log("idleTime : ",idleTime)
			idleTime = idleTime + 1;



			if(idleTime > 5){
				console.log("GGGGGGGGGG",idleInterval)
		 		$("#audioCtrl").removeClass('show');				
				idleTime = 0;
				window.clearInterval(idleInterval);
			}

		
	}



});

function ttsAudio()
{
	    if(audLoaded){
  		var audioText = $('.audioText').html();
	  jQuery.getJSON
	  (
	    "http://vaas.acapela-group.com/Services/UrlMaker?jsoncallback=?",
	   {
	      prot_vers: 2,
	      cl_login: "EVAL_VAAS",
	      cl_app: "EVAL_9288307",
	      cl_pwd: "4updw950", 
	      req_voice:"laura22k",  //sharon22k,ryan22k,karen22k,kenny22k
	      req_text: audioText,
	      //to produce ogg vorbis files, for MP3 you can remove this param.
	      req_snd_type:"OGG"
	   },
	   function(data) 
	   {
	      // Data exploitation 
	      $("audio source").attr('src', data.snd_url);
	      console.log(data);
	   }						
	  );
	  audLoaded = false;
    }
}


function Update(){
  tl.progress( animationAudio.currentTime/animationAudio.duration );
  $('#bigPlayButton').hide();

};

function createTimeline()
{
	tl = new TimelineLite({paused: true});
	//tl.set(".MathJax_Display", {opacity:0})
	tl.to(".container", 0.5, {opacity:1}, 0)
	  .set(".c-area", {'backgroundColor': 'none'})

	  .add("grp1", 3) // area dialogue box appears
	  .to(".c-area", 0.5, {'backgroundColor': 'orange', 'font-weight': 'bold', 'color': '#fff'}, "grp1")
	  .to(".areaDialogBox", 0.5, {opacity:1}, "grp1")
	  .to(".Green_patch", 0.5, {opacity:1}, 8)

	  .add("grp2", 9) // area dialogue box dissappears
	  .to(".areaDialogBox", 0.5, {opacity:0}, "grp2")
	  .to(".c-area", 0.5, {'backgroundColor': 'none', 'font-weight': 'normal', 'color': '#333333'}, "grp2")

	  .to(".strategyBox", 0.5, {left: 1758}) // strategy box appears
	  .to(".strategyDiv", 0.5, {left: 1299})
	  .to(".Green_patch", 0.5, {opacity:0}, 10.1)
	  .to(".orenge-Fill", 0.5, {opacity:1}, 19)
	  .to(".orenge-Fill", 0.5, {opacity:0}, 20)
	  .to(".strategyDiv, .strategyBox", 0.5, {left: 1931}, 21)
	  .to(".orenge-Fill", 0.5, {opacity:1}, 25)
	  .to(".Green_cone", 0.3, {opacity:1, 'z-index': 1}, 26.5)
	  .to(".Green_cone", 0.3, {opacity:0}, 28)
	  .to(".orenge-Fill", 0.5, {opacity:0}, 30)

	  .add("grp3", 30.5)
	  .to(".height_sp, .base_sp", 0.5, {opacity:1}, "grp3")
	  .to(".inch24", 0.5, {left: 403}, "grp3")
	  .to(".inch7", 0.5, {left: 241}, "grp3")

	  .set([".inch25_d", ".inch24_d", ".inch7_d", ".height_sp_d", ".base_sp_d"], {opacity: 1})

	  .add("grp4", 31.5) // triangle moves to right for rotaion with dimentions
	  .to(".inch25_d", 0.7, {left: 935}, "grp4")
	  .to(".inch24_d", 0.7, {left: 1192}, "grp4")
	  .to(".inch7_d", 0.7, {left: 1036}, "grp4")
	  .to(".height_sp_d", 0.7, {left: 1100}, "grp4")
	  .to(".base_sp_d", 0.7, {left: 955}, "grp4")
	  .to(".Triangle2_with_black-dot", 0.7, {left: 51, opacity: 1}, "grp4")
	  .to(".height_sp_d, .base_sp_d", 0.2, {opacity:0}, 32)

	  .set(".height_sp_d", {left: 602, top: 657})
	  .set(".base_sp_d", {left: 928})

	  .add("grp5", 32.4)	// rotation goes on here with dimentions
	  .to(".Triangle2_with_black-dot", 0.8, {rotation: 90, top: 132}, "grp5")
	  .to(".inch7_d", 0.3, {left: 692, top: 757}, "grp5")
	  .to(".inch7_d", 0.5, {left: 695, top: 657}, "grp5+=0.3")
	  .to(".inch24_d", 0.2, {left: 957, top: 686}, "grp5+=0.1")
	  .to(".inch24_d", 0.5, {left: 1007, top: 756}, "grp5+=0.1")
	  .to(".inch25_d", 0.5, {left: 955, top: 608}, "grp5+=0.3")

	  .to(".height_sp_d, .base_sp_d", 0.2, {opacity: 1}, 33)

	  .set([".inch7", ".base_sp"], {'backgroundColor': 'none'})
	  .to([".inch7", ".base_sp"], 0.5, {'backgroundColor': 'yellow'}, 36)

	  .add("grp6", 39) // triangle after rotation dissapears here
	  .to([".inch7", ".base_sp"], 0.5, {'backgroundColor': 'none'}, "grp6")
	  .to([".inch25_d", ".inch24_d", ".inch7_d", ".height_sp_d", ".base_sp_d", ".Triangle2_with_black-dot"], 0.5, {opacity: 0}, "grp6")
	  
	  .set(".Triangle2_with_black-dot", {left: -740, top: -50, rotation: 0})

	  // grey triangle reappears and starts moving right for rotation
	  .to(".Triangle2_with_black-dot", 0.5, {opacity: 1, 'z-index': 1}, 47.5)
	  .to(".Triangle2_with_black-dot", 0.5, {left: -160}, 48.2)
	  .to(".Triangle2_with_black-dot", 0.8, {rotation: 180, left: -160, top: -56})

	  .set(".Triangle2_with_black-dot", {'z-index': 0})
	  .set(".inch25", {'z-index': 1})

	  .add("grp7", 51) // grey triangle comes back here
	  .to(".Triangle2_with_black-dot", 0.5, {rotation: 180, left: -740, 'z-index': 0}, "grp7")
	  .to(".inch25", 0.5, {left: 176, top: 380, 'z-index': 1}, "grp7")

	  // .set("#math0", {opacity: 1}) // math line1 and line 2 appear
	  .to(["#line1", "#line2"] , 1, {opacity:1}, 57)
	  .to(".Green_line", 0.5, {opacity:1, 'z-index': 1}, 63)

	  .add("grp8", 65) // green triangle moves to the right
	  .to(".Green_line", 0.5, {left: -600}, "grp8")
	  .to(".Triangle_with_black-dot", 0.5, {left: -600}, "grp8")
	  .to(".inch25", 0.5, {left: 306}, "grp8")
	  .to(".height_sp", 0.5, {left: 452}, "grp8")
	  .to(".inch24", 0.5, {left: 548}, "grp8")
	  .to(".base_sp", 0.5, {left: 305}, "grp8")
	  .to(".inch7", 0.5, {left: 390}, "grp8")

	  .add("grp9", 74) // green triangle comes back to original position
	  .to(".Green_line", 0.5, {left: -741, opacity: 0}, "grp9")
	  .to(".Green_Square-line", 0.5, {left: -741, opacity: 1, 'z-index': 1}, "grp9")
	  .to(".Triangle_with_black-dot", 0.5, {left: -741}, "grp9")
	  .to(".Triangle2_with_black-dot", 0.5, {opacity:0}, "grp9")
	  .to(".inch25", 0.5, {left: 176}, "grp9")
	  .to(".height_sp", 0.5, {left: 307}, "grp9")
	  .to(".inch24", 0.5, {left: 403}, "grp9")
	  .to(".base_sp", 0.5, {left: 160}, "grp9")
	  .to(".inch7", 0.5, {left: 241}, "grp9")

	  .add("grp10", 78) // green square triangle dissapears
	  .to(".Green_Square-line", 0.5, {opacity: 0}, "grp10")
	  .to(".inch25", 0.5, {left: 146, top: 470}, "grp10")

	  // line 3 and 6 comes in
	  .to("#line5" , 0.5, {opacity:1}, 81)

	  .add("grp11", 82) // green triangle
	  .to("#line6" , 0.5, {opacity:1}, "grp11")
	  .to(".td1" , 0.5, {opacity:1}, "grp11")
	  .to(".td2" , 0.5, {opacity:1}, "grp11")

	  .set($("#color1"), {'backgroundColor':'none'})

	  .to($("#color1"), 0.5, {'backgroundColor':'yellow'})
	  .to($("#color1"), 0.5, {'backgroundColor':'none'}, 86)
	  .to($(".b_zoom").eq(0), 0.2, {'display': 'inline-block', scale: 1.6})
	  .to($(".b_zoom").eq(0), 0.2, {'display': 'inline', scale: 1.0}, 87.5)
	  .to($(".h_zoom").eq(0), 0.2, {'display': 'inline-block', scale: 1.6})
	  .to($(".h_zoom").eq(0), 0.2, {'display': 'inline', scale: 1.0}, 89.5)
	  .to("#line7" , 0.5, {opacity:1}, 92)	// line 5 comes in

	  .to(".b_hide" , 0.5, {opacity:0}, "grp12")
	  .to(".h_hide" , 0.2, {'margin-left': 43}, "grp12")
	  .to(".td5" , 0.5, {opacity:1}, "grp12")
	  .to(".h_hide" , 0.5, {opacity:0}, 95)
	  .to(".td6" , 0.2, {opacity:1})

	  .set($("#colorLine7"), {'backgroundColor':'none'})
	  .to($("#colorLine7"), 0.5, {'backgroundColor':'yellow'}, 97)
	  .to($("#colorLine7"), 0.5, {'backgroundColor':'none'}, 101)
	  .to("#line9" , 0.5, {opacity:1}, 104)			// line 6 comes in

	  .set($("#color2"), {'backgroundColor':'none'})
	  .to($("#color2"), 0.5, {'backgroundColor':'yellow'}, 104.5)
	  .to($("#color2"), 0.5, {'backgroundColor':'none'})
	  .set($("#color3"), {'backgroundColor':'none'})
	  .to($("#color3"), 0.5, {'backgroundColor':'yellow'}/*, 46*/)
	  .to($("#color3"), 0.5, {'backgroundColor':'none'})
	  .set($("#color4"), {'backgroundColor':'none'})
	  .to($("#color4"), 0.5, {'backgroundColor':'yellow'}/*, 47*/)
	  .to($("#color4"), 0.5, {'backgroundColor':'none'}, 107.5)
	  .set($("#color5"), {'backgroundColor':'none'})
	  .to($("#color5"), 0.5, {'backgroundColor':'yellow'}, 109)
	  .to($("#color5"), 0.5, {'backgroundColor':'none'}, 113)

	  //appearing line 7
	  .to("#line10" , 0.5, {opacity:1}, 114)
	  .set($("#line10 .col3"), {'backgroundColor':'none'})
	  .to($("#line10 .col3"), 0.5, {'backgroundColor':'yellow'}, 117)
	  .to($("#line10 .col3"), 0.5, {'backgroundColor':'none'}, "+=0.5")

	  .add("grp13", 119) //moving line 7 up
	  .to(["#line6", "#line7", '#line9'] , 0.5, {opacity:0}, "grp13")
	  .to("#line10" , 0.5, {top: 23}, "grp13")

	  .add("grp14", 120) //math data comes in
	  .to("#math0" , 0.5, {left: 1353}, "grp14")
	  .to("#math1" , 0.4, {left: 885, top: 120 }, "grp14+=0.1")
	  .to(".td7" , 0.4, {left: 987, top: 175}, "grp14+=0.1")

	  .set(".Triangle2_with_black-dot", {left: -740, top: -50, rotation: 0, opacity:0})

	  .add("grp15", 121) //math data comes in
	  .to(".Triangle2_with_black-dot", 0.5, {left: -330, opacity:1}, "grp15")
	  .to([".checkText",".checkUnder"], 0.2, {opacity:1}, "grp15")

	  .to(".Triangle2_with_black-dot", 0.8, {top: -56, rotation: 180}, 122)			//rotating

	  .add("grp16", 123) // triangle goes back
	  .to(".Triangle2_with_black-dot", 0.5, {rotation: 180, left: -740, 'z-index': 0}, "grp16") //moving back
	  .to(".inch25", 0.2, {left: 176, top: 380, 'z-index': 1}, "grp16+=0.3")

	  .set(".hiddenSpan", {opacity:0})
	  .to("#line3" , 0.5, {opacity:1}, 127)
	  .to(".hiddenSpan" , 0.5, {opacity:1})
	  .to("#line4" , 0.5, {opacity:1}, 130)
// green line in here
	  .to(".Green_cone" , 0.5, {opacity:1}, 134)
	  .to(".Green_cone" , 0.5, {opacity:0}, 138)

	  .to(['#line11', '#line12', '#line13'] , 0.5, {opacity:1}, 139)
	  .to("#line14" , 0.5, {opacity:1}, 144)
	  .set($("#line14 .col3"), {'backgroundColor':'none'})
	  .to($("#line14 .col3"), 0.5, {'backgroundColor':'yellow'}, 146)
	  .to($("#line14 .col3"), 0.5, {'backgroundColor':'none'})
	  .to(".Green_patch" , 0.5, {opacity:1})

	  .add("grp17", 150) // final moves
	  .to($(".tickMark"), 0.1, {opacity:1}, "grp17")
	  .to($(".Green_patch"), 0.2, {opacity:0}, "grp17")
	  .to($(".height_sp"), 0.2, {opacity:0}, "grp17")
	  .to($(".base_sp"), 0.2, {opacity:0}, "grp17")
	  .to($(".Triangle2_with_black-dot"), 0.5, {opacity:0}, "grp17")
	  .to($(".Triangle2_with_black-dot"), 0.5, {opacity:0}, "grp17")
	  .to($(".inch25"), 0.5, {left: 146, top: 470}, "grp17")
	  .to($(".inch24"), 0.5, {left: 307, top: 470}, "grp17")
	  .to($(".inch7"), 0.5, {left: 205, top: 756}, "grp17")
	  .to($(".finalAns"), 1, {left: 120, top: 1006}, "grp17-=1")
	  .to($(".finalAns"), 0.01, {opacity:1}, "grp17-=1")

	  .to($(".base_sp"), 0.2, {opacity:0}, 152.8)
}
