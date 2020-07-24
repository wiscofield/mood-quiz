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
    console.log(stat , user[stat],points);
    user[stat] = user[stat] + 1;
    console.log(user);

}

function setStat(points, stat) {
    return user[stat] = points;
}

function getStat(stat) {
    return user[stat];
}

function highStat() {
    Object.keys(user).reduce(function(a, b){return user[a] > user[b] ? a : b});
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
        document.querySelector('.question#q' + qNum).style.display = 'block';
        let names = document.querySelectorAll(".result");
        for (let i = 0; i < names.length; i++){
            names[i].innerHTML = localStorage.getItem("textvalue");
        }
    }

    if(qNum == 6) {
        //Change button to submit
        buttonToSubmit();
        console.log(user);

    }
    if(qNum == 7) {
        document.querySelector('.question#q' + (qNum - 1)).style.display = 'none';
        hideButton();
        document.querySelector("#relaxed").innerHTML = "relaxed : " + user.relaxed;
        console.log(user);
        document.querySelector("#angry").innerHTML = "angry : " + user.angry;
        console.log(user);
        document.querySelector("#sad").innerHTML ="sad : " + user.sad;
        console.log(user);
        document.querySelector("#nervous").inner="nervous : " + user.nervous;
        console.log(user);
    }

}

function respond() {
    console.log(qNum);
    let button = document.querySelector('#next');
    button.style.display = 'none';
    console.log('Hiding button');

//var gender = document.querySelector('input[name = "gender"]:checked').value;
  //  console.log("You entered " + gender + " for your gender<br>");


  let questionNum = "q"+qNum.toString();
    let stat = document.querySelector(`input[name = "${questionNum}"]:checked`).value;
    console.log(stat);

    addToStat(1, stat);


}


//New Stuff!
document.querySelector("#form1").addEventListener("submit",function(evt){
    evt.preventDefault();
    respond();
    nextQuestion();
})

document.querySelector("#form2").addEventListener("submit",function(evt){
    evt.preventDefault();
    respond();
    nextQuestion();
})

document.querySelector("#form3").addEventListener("submit",function(evt){
    evt.preventDefault();
    respond();
    nextQuestion();
})

document.querySelector("#form4").addEventListener("submit",function(evt){
    evt.preventDefault();
    respond();
    nextQuestion();
})

document.querySelector("#form5").addEventListener("submit",function(evt){
    evt.preventDefault();
    respond();
    nextQuestion();
})

document.querySelector("#form6").addEventListener("submit",function(evt){
    evt.preventDefault();
    respond();
    nextQuestion();
})

function buttonToNext() {
    console.log('Button updated to next');
    // let button = document.querySelector('#next');
    // button.innerText = 'Next';
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

//document.querySelectorAll (".waffle").style.display = 'none';
