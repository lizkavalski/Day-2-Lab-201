'use strict';
 
var score = 0;
var myanswers ={
        name: 'name',
        place: 'place',
        ready: 'ready',
        toDo:'excited for codeing',
        haveDog: 'dog',
        numberOfDog: 'numberOfDog',
        dragon: 'dragon',
        drive: 'drive',
        typOf: 'type of car',
        jods:'background',
    };
// question 0


var user = prompt ("What is you your name?")
    console.log('User name', user)
    alert('Nice to meet you ' + user + ' I am going to ask you a couple of questions');

//question 1
function questionOne(){
    var myName = prompt('What is my name?').toUpperCase();
    console.log('My name', myName);
    if (myName === 'LIZ'|| myName ==='ELIZABETH'){
        alert ('You are correct');
        localStorage.setItem(myName , JSON.stringify(myanswers.name=myName))
        score++
        
    }else{ 
        alert('not my name')
        localStorage.setItem(myName , JSON.stringify(myanswers.name=myName))
     
    }
}
questionOne();


//question 2 (loop)
function questionTwo(){
for(var i=0; i< 3; i++){
    var place = prompt('Where do you think I am from?' ).toUpperCase();
        if (place === 'WASHINGTON'){
            alert( 'You are Correct');
            localStorage.setItem(place , JSON.stringify(myanswers.place=place))
            score++;
            break;
        } else { 
            localStorage.setItem(place , JSON.stringify(myanswers.place=place))
       
        alert ('Try again')
    }  
     } 
console.log('place',place); 
}
questionTwo();


// question 3 (frist yes or no question)
function questionThree(){
var ready = prompt("Alright  the next question is a yes/no question. Please answer with Yes or No. Are you ready?" ).toUpperCase();
console.log('Ready', ready);

    if (ready === 'YES' || ready ==='Y' ){
        alert ('Alright lets go .');
        localStorage.setItem(ready, JSON.stringify(myanswers.ready=ready))
        score++;
       
    } else{ 
        alert('I think you can do it .' )
        localStorage.setItem(ready, JSON.stringify(myanswers.ready=ready))
    }
}
questionThree();


//question 4 (second y/n)
function questionFour(){
var toDoCodeing = prompt(' Another yes/no question: I am excited to do coding?').toUpperCase();
        console.log('excited to do code', toDoCodeing)

    if (toDoCodeing === "Y" ||toDoCodeing=== "Yes"){
        alert('I am excited');
        localStorage.setItem(toDoCodeing , JSON.stringify(myanswers.toDo=toDoCodeing))
        score++;
      
    } else{ 
        alert("I am excited ." );
        localStorage.setItem(toDoCodeing , JSON.stringify(myanswers.toDo=toDoCodeing))
       
    }
}
questionFour();

//question 5 (thrid y/n)
function questionFive(){
var dog = prompt("Another yes/no questions: Do I have a dog?").toUpperCase();
    console.log('Dog', dog)
        if (dog === "Y" ||dog === "Yes"){
            alert('I do have a dog ');
            score++;
        localStorage.setItem(dog , JSON.stringify(myanswers.haveDog=dog))
          
         } else{ 
            alert(' I do have a dog and they make great snuggle buddies' );
        localStorage.setItem(dog , JSON.stringify(myanswers.haveDog=dog))
            
        }
    }
    questionFive();


//question 6(make into number loop)
function questionSix(){
for(var i = 0; i<3; i++){
        var numDog = parseInt(prompt ('how many dogs do I have?'));
            if (numDog === 2){
                alert('You are correct');
                score++;
                localStorage.setItem(numDog , JSON.stringify(myanswers.numberOfDog=numDog))
                break;
            } else if (numDog < 2) {
                localStorage.setItem(numDog , JSON.stringify(myanswers.numberOfDog=numDog))
                 alert('too low');
            } else if (numDog > 2) {
                localStorage.setItem(numDog , JSON.stringify(myanswers.numberOfDog=numDog))
                alert('too high');
            } else {
                alert('a number plase');
            }
        }
    console.log('number of dogs', numDog);
    }
questionSix();
      
//question 7 (fifth y/n)
function questionSeven(){
var wantDragon = prompt('Would I like a pet dragon?').toUpperCase();
        if (wantDragon === 'YES' || 'Y' ){
            alert('Yes I would like a dragon');
            score++;
            localStorage.setItem(wantDragon , JSON.stringify(myanswers.dragon=wantDragon
                ))

           
        } else {
            localStorage.setItem(wantDragon , JSON.stringify(myanswers.dragon=wantDragon))
            alert ('of course I would want a dragon');
        }
    console.log('dragon',wantDragon);
    }
questionSeven();

// question 8 (sixth y/n)
function questionEight(){
var car= prompt('Do I drive?').toUpperCase();
    console.log('drive', car);
    if (car === "Y" ||car=== "YES" ){
        alert("Yes I do ." );
        localStorage.setItem(car , JSON.stringify(myanswers.drive=car))
            score++;
       
       
    } else {
        localStorage.setItem(car , JSON.stringify(myanswers.drive=car))
       alert('I do drive');
    }
}
questionEight();

//question 9 (make into a loop)
function questionNine(){
for(var i = 0;i < 3; i++){  
    var typeCar= prompt('What color of car do I drive?').toUpperCase();
        if(typeCar === 'YELLOW'){
            alert('You are correct')
            localStorage.setItem(typeCar, JSON.stringify(myanswers.typeOf=typeCar))
            score++;
            break;
        }else{
            localStorage.setItem(typeCar, JSON.stringify(myanswers.typeOf=typeCar))
            alert('nope');
        }
    }
    console.log('Make of car', typeCar);
}
questionNine();

//question 10 (arrary w/loop)
function questionTen(){
var backGround = ['CHILDCARE', 'FOOD', 'WEREHOUSE'];

for(var i= 0; i < backGround.length; i++){
    var vocation= prompt ('What was my previous job background?' ).toUpperCase();
       if(backGround.includes(vocation)){
           alert('You are correct');
           localStorage.setItem(vocation, JSON.stringify(myanswers.jobs=vocation))
           score++;
           break;
       } else {
        localStorage.setItem(vocation, JSON.stringify(myanswers.jobs=vocation))
        alert('Nope');
        }
   console.log(backGround[i]);
    }
}
questionTen();


alert('congreat '+ user + ' you got a of '+ score + ' out of 10');
document.getElementById("result").innerHTML = localStorage.getItem(myanswers);
// localStorage.answers = JSON.stringify(allAnswers);