Webcam.set({
    width:350,
    height:250,
    image_format : 'png',
    png_quality:100
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

     
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yK23o7TBu/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
     
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    object_name = document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
  if (object_name == "Smiling") {
    location.href = 'about.html';
  }
  if (object_name == "Not Smiling") {
    document.getElementById("spark").innerHTML = "Turn that frown upside down! It's just a fun Authentication!";
  }
}