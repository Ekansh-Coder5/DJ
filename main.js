song1 ="";
song2 = "";
lX = "";
lY = "";
rY = "";
rX = "";

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", getRes)
}

function getRes(results) {
    if(results.length > 0) {
        console.log(results)
        lX = results[0].pose.leftWrist.x;
        lY = results[0].pose.leftWrist.y;
        console.log(lX+", "+lY)

        rX = results[0].pose.rightWrist.x;
        rY = results[0].pose.rightWrist.y;
        console.log(rX+", "+rY)
    }
}

function modelLoaded() {
    console.log("model loaded")
}

function draw() {
    image(video, 0, 0, 600, 500)
}

function preload() {
    song1 = loadSound("lmusic.mp3")
    song2 = loadSound("hmusic2.mp3")
}

