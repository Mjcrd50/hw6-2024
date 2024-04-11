var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
	console.log ('auto play is set to ' + video.autoplay)
	console.log ('loop is set to ' + video.loop)
});

document.getElementById("play").addEventListener("click", function play() {
	video.play();
	console.log("Play Video")
});

document.getElementById("pause").addEventListener("click", function pause() {
	video.pause();
	console.log("Pause Video")
});

document.getElementById("slower").addEventListener("click", function setPlaySpeed() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log ("Slow down video");
	console.log ("Speed is " + video.playbackRate);
	  })

document.getElementById("faster").addEventListener("click", function setPlaySpeed() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
	  })

document.getElementById("skip").addEventListener("click", function() {
		console.log("Skip ahead");
		console.log("Video current time is")
	})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

