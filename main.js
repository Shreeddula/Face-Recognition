Webcam.set({
    width:350,
    height:300,
    image_format: 'jpg',
    jpg_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera)

function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML='<img src='+data_uri+' id="captured_image">';
    });
}

console.log('ml5 version : ',ml5.version);

classfier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ucauFym44/.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function identify_image(){
    captureImage=document.getElementById("captured_image");
    classfier.classify(captureImage,gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML=results[0].label;
        document.getElementById("confidence").innerHTML=results[0].confidence.toFixed(3);
        }
}