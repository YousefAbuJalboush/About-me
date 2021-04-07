'use strict';

alert('Welcome to About Me "Yousef Abu-Jalboush"');

let userName = prompt('What is your username ?!');

let gender = prompt('What is your gender: male, female .');
let title = '';

if (gender === 'male') {
  title = 'Mr.';
} else if (gender === 'female') {
  title = 'Ms.';
}

alert('Welcome ' + title + userName.toUpperCase() + ' ,Now we can start with some general questions.');
let mark = 0;

q1();
q2();
q3();
q4();
q5();
q6();
q7();
takeMark();

function q1(){
  let question1 = prompt('If you are attentive, is my name "Yousef Abu-Jalboush" ?! , yes/y or no/n');
  question1 = question1.toLowerCase();
  // console.log('If you are attentive, is my name "Yousef Abu-Jalboush" ?! ',question1);

  if (question1 === 'yes' || question1 === 'y') {
    alert('Yes, correct answer, +1 mark ,' + ' marks is : ' + ++mark);
  } else if (question1 === 'no' || question1 === 'n') {
    alert('No, wrong answer : my name "Yousef Abu-Jalboush" ,' + ' marks is : ' + mark);
  } else {
    alert('You have not entered a correct answer from among the options yes/y or no/n.');
  }
}


function q2(){
  let question2 = prompt('Do you think that I am from Morocco ?! , yes/y or no/n');
  question2 = question2.toLowerCase();
  // console.log('Do you think that I am from Morocco ?! ',question2);

  if (question2 === 'yes' || question2 === 'y') {
    alert('No, wrong answer : I am from Jordan ,' + ' marks is : ' + mark);
  } else if (question2 === 'no' || question2 === 'n') {
    alert('Yes, correct answer, +1 mark ,' + ' marks is : ' + ++mark);
  } else {
    alert('You have not entered a correct answer from among the options yes/y or no/n.');
  }

}

function q3(){

  let question3 = prompt('Do you think I am good at speaking Chinese ?! , yes/y or no/n');
  question3 = question3.toLowerCase();
  // console.log( 'Do you think I am good at speaking Chinese ?! ' ,question3);

  if (question3 === 'yes' || question3 === 'y') {
    alert('No, wrong answer : In fact, I hate Asian languages, and I cannot speak them ,' + ' marks is : ' + mark);
  } else if (question3 === 'no' || question3 === 'n') {
    alert('Yes, correct answer, +1 mark ,' + ' marks is : ' + ++mark);
  } else {
    alert('You have not entered a correct answer from among the options yes/y or no/n.');
  }

}


function q4(){

  let question4 = prompt('Do you think I enrolled with ASAC to learn seriously ?! , yes/y or no/n');
  question4 = question4.toLowerCase();
  // console.log('Do you think I enrolled with ASAC to learn seriously ?! ' ,question4);

  if (question4 === 'yes' || question4 === 'y') {
    alert('Yes, correct answer, +1 mark ,' + ' marks is : ' + ++mark);
  } else if (question4 === 'no' || question4 === 'n') {
    alert('No, wrong answer : You really think so, of course I enrolled to learn and further my experience , ' + ' marks is : ' + mark);
  } else {
    alert('You have not entered a correct answer from among the options yes/y or no/n.');
  }
}

function q5(){
  let question5 = prompt('Do you think I like seafood ?! , yes/y or no/n');
  question5 = question5.toLowerCase();
  // console.log( 'Do you think I like seafood ?! ' , question5);

  if (question5 === 'yes' || question5 === 'y') {
    alert('No, wrong answer : Actually, I don\'t like seafood , ' + ' marks is : ' + mark);
  } else if (question5 === 'no' || question5 === 'n') {
    alert('Yes, correct answer, +1 mark ,' + ' marks is : ' + ++mark);
  } else {
    alert('You have not entered a correct answer from among the options yes/y or no/n.');
  }

}

function q6(){
  let question6 = prompt('From my personal cover photo, how tall do you think I am ?!');
  for (let i = 4; i > 0 ; i--){
    question6 = prompt('From my personal cover photo, how tall do you think I am ?!');
    question6 = parseInt(question6);
    if (question6 === 189) {
      alert('You did it guessed the answer, it was a hard question ,' + ' marks is : ' + ++mark);
      break;
    }else if ( question6 < 189) {
      alert('Too low , You have 4 attempts in total');
      continue;
    }else if ( question6 > 189) {
      alert('Too high , You have 4 attempts in total');
      continue;
    }else{
      alert('You missed the answer , You have 4 attempts in total');
      continue;
    }
  }
  alert('To remember, my height is 189');
}

function q7(){
  let laptop = ['acer','asus','dell'];
  // console.log(laptop.length);
  let question7 = prompt('Which type of laptop do you think I own ?! , You have 6 attempts');
  attempts:for ( let i = 6 ; i > 0 ; i-- ){
    question7 = prompt('Which type of laptop do you think I own ?! , You have 6 attempts');
    for ( let j = 0 ; j < laptop.length ; j++ ){
      if ( laptop[j] === question7.toLowerCase()) {
        console.log(laptop[j]);
        alert('Yes, I guessed it '+ ' marks is : ' + ++mark);
        break attempts;
      }
    }
  }
  let contentArray = '';
  for (let i = 0 ; i <= laptop.length - 1 ; i++ ) {
    contentArray += laptop[i] + ' / ';
  }
  alert('These are the correct answers :  '+contentArray);

}

function takeMark(){
  switch (mark) {
  case 0:
    alert('Your final mark is : '+ mark +'/7 , You don\'t know anything about me.');
    break;
  case 1:
    alert('Your final mark is : '+ mark +'/7 , You know very little about me.');
    break;
  case 2:
    alert('Your final mark is : '+ mark +'/7 , You know a little about me.');
    break;
  case 3:
    alert('Your final mark is : '+ mark +'/7 , You only know me by form.');
    break;
  case 4:
    alert('Your final mark is : '+ mark +'/7 , You know good information about my character.');
    break;
  case 5:
    alert('Your final mark is : '+ mark +'/7 , You know me well.');
    break;
  case 6:
    alert('Your final mark is : '+ mark +'/7 , You know me well, good.');
    break;
  case 7:
    alert('Your final mark is : '+ mark +'/7 , You know me well, very good.');
    break;
  }
}

alert('Thanks for visiting my platform');
