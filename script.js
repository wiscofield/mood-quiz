const MAX_QUESTIONS = 6;

/*---MATH---*/

//user object
let user = {
    //Stats
    nervous: 0,
    angry: 0,
    sad: 0,
    relaxed: 0
}

//functions
function addToStat(points, stat) {
    //BIG PROBLEM (SYNTAX)
    user[stat] += points;
    console.log(stat + user[stat]);
}

function setStat(points, stat) {
    user[stat] = points;
}

function getStat(stat) {
    return user[stat];
}

function highStat() {
    return Object.keys(user).reduce(function(a, b){return user[a] > user[b] ? a : b});
    //Yes I did steal this from the internet but I do understand it!
}

/*---QUIZ---*/
var qNum = 0;

/**
 * Moves to the next question
 */
function nextQuestion() {
    if(qNum === 0) {
        //Change button to next
        buttonToNext();
    }

    //BIG PROBLEM (LOGIC)
    qNum++;
    if (qNum < MAX_QUESTIONS + 1 && qNum > 0) {
        document.querySelector('.question#q' + (qNum - 1)).style.display = 'none';
        respond();
        document.querySelector('.question#q' + qNum).style.display = 'block';
    }

    if(qNum == 6) {
        //Change button to submit
        buttonToSubmit();
    }
    if(qNum == 7) {
        document.querySelector('.question#q' + (qNum - 1)).style.display = 'none';
        hideButton();
        onSubmit();
    }
}

function respond() {
    let stat = document.querySelector('input[name=q' + qNum + ']').value;

    addToStat(1, stat);
}

function buttonToNext() {
    console.log('Button updated to next');
    let button = document.querySelector('#next');
    button.innerText = 'Next';
}

function buttonToSubmit() {
    console.log('Button updated to submit');
    let button = document.querySelector('#next');
    button.innerText = 'Submit';
}

function hideButton() {
    console.log('Hiding button');
    let button = document.querySelector('#next');
    button.style.display = 'none';
}

function onSubmit() {
    //Show highStat() and links
    console.log(highStat());
}
