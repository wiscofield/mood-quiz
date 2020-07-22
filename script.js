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
    user['stat'] += points;
    console.log();
}

function setStat(points, stat) {
    user['stat'] = points;
    console.log();
}

function getStat(stat) {
    return user['stat'];
    console.log();
}

function highStat() {
    return Object.keys(user).reduce(function(a, b){return user[a] > user[b] ? a : b});
    //Yes I did steal this from the internet but I do understand it!
    console.log();
}

/*---QUIZ---*/
var qNum = 0;

function nextQuestion() {
    document.querySelector('.question#q' + qNum).style.display = 'none';
    qNum++;
    document.querySelector('.question#q' + qNum).style.display = 'block';
    console.log();
}
