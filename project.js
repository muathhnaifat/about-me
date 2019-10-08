
// var love = prompt ('Do i love coding?');
// love = love.toLowerCase();

// if(love ==='yes' ||love=== 'y') {
//     alert ('of course I do') ;
// }
// else if (love === 'no'|| love ==='n'){
// alert (' You should know me more ');
// }
// else  {
//     alert ('You should answer with yes or no')

// }

// var car = prompt ('BMW is my favorite car');
// car = car.toLowerCase();

// if(car ==='yes' || car=== 'y') {
//     alert ('Of course BMW the best') ;
// }
// else if (car === 'no' || car=== 'n'){
// alert (' Ohh , don\'t tell me theres any car best than BMW ');
// }
// else  {
//     alert ('You should answer with yes or no')
// }


// var football = prompt ('Real Madrid My Dream Team');
// football = football.toLowerCase();

// if(football ==='yes' || football=== 'y') {
//     alert ('that\'s the Absolute Truth') ;
// }
// else if (football === 'no' || football=== 'n'){
// alert (' No No No !! That\'s the most important thing you should know about me ');
// }
// else  {
//     alert ('You should answer with yes or no')
// }



// var movies = prompt ('i love watch romance movies');
// movies = movies.toLowerCase();

// if(movies ==='yes' || movies=== 'y') {
//     alert (' I love action and drama , but I found romance movies boring ') ;
// }
// else if (movies === 'no' || movies=== 'n'){
// alert (' it seems you know my favorite type of movies ');
// }
// else  {
//     alert ('You should answer with yes or no')
// }



// var live = prompt (' i wish to travel and live in canada');
// live = live.toLowerCase();

// if(live ==='yes' || live=== 'y') {
//     alert (' canada is a wonderfull country , i love it  ') ;
// }
// else if (live === 'no' || live=== 'n'){
// alert (' you should try to know more about me ');
// }
// else  {
//     alert ('You should answer with yes or no')
// }


// 'use srict'

// var name = prompt ('Hello!! , What\'s your name ?');
// alert ('welcome ' + name + ' nice to have you here ');

// var lab = [

// ['Do i love coding?',
// 'of course I do',
// 'You should know me more'

// ]

// ['BMW is my favorite car?',
// 'Of course BMW the best',
// 'Ohh , don\'t tell me theres any car best than BMW'

// ]


// ['Real Madrid My Dream Team ?',
// 'that\'s the Absolute Truth',
// 'No!! That\'s the most important thing you should know about me'

// ]


// ['i love watch romance movies?',
// 'I love action and drama , but I found romance movies boring',
// 'it seems you know my favorite type of movies '

// ]


// ['i wish to travel and live in canada?',
// 'canada is a wonderfull country , i love it ',
// 'You should answer with yes or no'

// ]


// ]















'use strict';
var counter = 0
var name = prompt('Hello!! , What\'s your name ?');
alert('welcome ' + name + ' nice to have you here ');

var lab = [
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
for (var i = 0; i < lab.length; i++) {
    var currentQuestion = lab[i]; // array of 3 items [prompt, positive, negative]
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