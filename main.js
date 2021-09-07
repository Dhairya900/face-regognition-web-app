Webcam.set({
    width: 350,
    height: 300,
    img_format: "png",
    img_quality: 90
}) ;
var camera = document.getElementById("camera") ;
Webcam.attach('#camera') ;

function capture()
{
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id = "your_img"src="'+data_uri+'"/>' ;
    }) ;
}
console.log('ml5 version',ml5.version) ;