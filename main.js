function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(760,75);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    textSize(difference)
    text('Snek_does_coding',10,250);
}
function modelLoaded()
{
console.log("posenet is loaded!")
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX - rightWristX);
        console.log("right = " + rightWristX + "left = " + leftWristX + "difference = " + difference)
    }
}
leftWristX=0;
rightWristX=0;
difference=0;