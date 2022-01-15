var cat = 0;
var dog = 0;
var cow = 0;
var background_noise = 0;

function Start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MUSwB2XFM/model.json' , modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = " I can hear - "+results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("image");

        if(results[0].label == "Barking"){
            img.src = "https://static.pokemonpets.com/images/monsters-images-800-800/2836-Shiny-Boltund.webp";
            dog = dog+1;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png";
            cat = cat+1;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://www.kindpng.com/picc/m/90-908318_cartoon-picture-of-a-cow-cow-clipart-transparent.png";
            cow = cow+1;
        }
        else{
            img.src = "https://media1.giphy.com/media/ameXD7uSYTkh9DHr79/giphy.gif";
            background_noise = background_noise+1;
        }
    }
}