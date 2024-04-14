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
	let volume = document.getElementById("volume")
	console.log(volume)
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

document.getElementById("skip").addEventListener("click", function skip() {
	video.currentTime += 10;
	video.loop=true;
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime)
	})

document.getElementById("mute").addEventListener("click", function () {
	if (video.muted === false) {
		video.muted=true;
		console.log("Muted");
	}

	else {
		video.muted=false;
		console.log("Unmuted");
	}
})

document.getElementById("slider").addEventListener("change", function () {
	let sliderVolume = document.getElementById("slider").value;
	video.volume = sliderVolume / 100;
	console.log(sliderVolume + "%");
	})

document.getElementById("vintage").addEventListener("click", function () {
	video.classList.add("oldSchool")
	console.log("Old School");
	})

document.getElementById("orig").addEventListener("click", function () {
	video.classList.remove("oldSchool")
	console.log("Original");
	})
