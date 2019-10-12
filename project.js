
'use strict';
var counter = 0
var name = prompt('Hello!! , What\'s your name ?');
alert('welcome ' + name + ' nice to have you here ');

function hobbyGuessGame() {
    var hobbies = [
        [
            'Do i love coding?',
            'of course I do',
            'You should know me more'
        ],
        [
            'BMW is my favorite car?',
            'Of course BMW the best',
            'Ohh , don\'t tell me theres any car best than BMW'
        ],
        [
            'Real Madrid My Dream Team ?',
            'that\'s the Absolute Truth',
            'No!! That\'s the most important thing you should know about me'
        ],
        [
            'i love watch romance movies?',
            'I love action and drama , but I found romance movies boring',
            'it seems you know my favorite type of movies '
        ],
        [
            'i wish to travel and live in canada?',
            'canada is a wonderfull country , i love it ',
            'You should answer with yes or no'
        ],

    ];
    for (var i = 0; i < hobbies.length; i++) {
        var currentQuestion = hobbies[i]; // array of 3 items [prompt, positive, negative]
        var promptIndex = 0;
        var positiveIndex = 1;
        var negativeIndex = 2;
        var currentPrompt = currentQuestion[promptIndex];
        var userResponse = prompt(currentPrompt);
        userResponse = userResponse.toUpperCase();
        var currentPositiveReply = currentQuestion[positiveIndex];
        var currentNegativeReply = currentQuestion[negativeIndex];
        switch (userResponse) {
            case 'YES':
            case 'Y':

                alert(currentPositiveReply);
                counter++;
                break;

            case 'NO':
            case 'N':
                alert(currentNegativeReply);
                break;
            default:
                alert(' Thats A Wrong Answer!');
        }
    }
}
hobbyGuessGame();


function age() {
    for (let j = 0; j < 4; j++) {
        var number = prompt('can you guess in which year i was born');
        if (number == 1991) {
            alert(' It is correct ! ');
            counter++;
            break;
        } else if (number >= 2000) {
            alert('That is too high');
        }
        else if (number > 1991) {
            alert('That is high');
        }
        else if (number < 1991) {
            alert('That is low');
        } else if (number <= 1980) {
            alert('That is too low');
        }
    }
}
age();

function dreamCar() {
    for (let h = 0; h < 6; h++) {
        var car = prompt('what\'s my dreams cars?');
        car = car.toLowerCase();
        if (car == 'bmw' || car == 'Mercedes' || car == 'audi' | car == 'Land Rover') {
            alert('Great , thats a correct answer');
            counter++;
            break;
        } else {
            alert('wrong answer');
        }
    }
    alert('thats my dreams cars : Bmw , audi , Mercedes , Land Rover');
    alert('Thank you for your time, You have got ' + counter + ' of 7');
}
dreamCar();