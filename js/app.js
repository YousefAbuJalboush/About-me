'use strict';

alert('Welcome to About Me');

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

let question1 = prompt('Do you think that HTML stands for "Hypertext Markup Language" ?! , yes/y or no/n');
question1 = question1.toLowerCase();
// console.log('Do you think that HTML stands for "Hypertext Markup Language" ?! ',question1);

if (question1 === 'yes' || question1 === 'y') {
    alert('Yes, correct answer, +1 mark ,' + 'The sum of the marks is : ' + ++mark);
} else if (question1 === 'no' || question1 === 'n') {
    alert('No, wrong answer ,' + 'The sum of the marks is : ' + mark);
} else {
    alert('You have not entered a correct answer from among the options yes/y or no/n.');
}



let question2 = prompt('Do you think that CSS stands for "Cascading Sheets Style" ?! , yes/y or no/n');
question2 = question2.toLowerCase();
// console.log('Do you think that CSS stands for "Cascading Sheets Style" ?! ',question2);

if (question2 === 'yes' || question2 === 'y') {
    alert('No, wrong answer ,' + 'The sum of the marks is : ' + mark);
} else if (question2 === 'no' || question2 === 'n') {
    alert('Yes, correct answer, +1 mark ,' + 'The sum of the marks is : ' + ++mark);
} else {
    alert('You have not entered a correct answer from among the options yes/y or no/n.');
}



let question3 = prompt('Is this tag included in HTML tags? " <image> " ?! , yes/y or no/n');
question3 = question3.toLowerCase();
// console.log( 'Is this tag included in HTML tags? " <image> " ?! ' ,question3);

if (question3 === 'yes' || question3 === 'y') {
    alert('No, wrong answer ,' + 'The sum of the marks is : ' + mark);
} else if (question3 === 'no' || question3 === 'n') {
    alert('Yes, correct answer, +1 mark ,' + 'The sum of the marks is : ' + ++mark);
} else {
    alert('You have not entered a correct answer from among the options yes/y or no/n.');
}



let question4 = prompt('WHAT JavaScript : is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Is that correct ?! , yes/y or no/n');
question4 = question4.toLowerCase();
// console.log('WHAT JavaScript : is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Is that correct ?! ' ,question4);

if (question4 === 'yes' || question4 === 'y') {
    alert('Yes, correct answer, +1 mark ,' + 'The sum of the marks is : ' + ++mark);
} else if (question4 === 'no' || question4 === 'n') {
    alert('No, wrong answer ,' + 'The sum of the marks is : ' + mark);
} else {
    alert('You have not entered a correct answer from among the options yes/y or no/n.');
}


let question5 = prompt('Markdown is a program language. Is that correct ?! , yes/y or no/n');
question5 = question5.toLowerCase();
// console.log( 'Markdown is a program language. Is that correct ?! ' , question5);

if (question5 === 'yes' || question5 === 'y') {
    alert('No, wrong answer ,' + 'The sum of the marks is : ' + mark);
} else if (question5 === 'no' || question5 === 'n') {
    alert('Yes, correct answer, +1 mark ,' + 'The sum of the marks is : ' + ++mark);
} else {
    alert('You have not entered a correct answer from among the options yes/y or no/n.');
}

switch (mark) {
    case 0:
        alert('Your final mark is : '+ mark +' , Wow, you didn\'t learn anything through this course.');
        break;
    case 1:
        alert('Your final mark is : '+ mark +' , You are very weak, try to persevere more.');
        break;
    case 2:
        alert('Your final mark is : '+ mark +' , A situation that is not new, including to obtain more learning yet.');
        break;
    case 3:
        alert('Your final mark is : '+ mark +' , Your condition is average, but you did your best.');
        break;
    case 4:
        alert('Your final mark is : '+ mark +' , Good job You learned a lot with us in this course but you lack a little.');
        break;
    case 5:
        alert('Your final mark is : '+ mark +' , Wonderful job You did the best, I am proud that you are among us in the course.');
        break;
}