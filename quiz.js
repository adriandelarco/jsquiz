var user = {}
var responses = []

function question1() {
  var name = prompt('What is your name?')
  user.name = name
}


function question2() {

  var firstQuestion = prompt('Are we in 2016?)')

  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false
  } else {
    alert("Please answer either 'Yes' or 'No'");
    return question2();
  }
  responses.push(firstQuestion);
}

function question3() {
  js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');

  switch (js.toLowerCase()) {
    case 'java': case 'javaLive': case 'scriptyscript': default:
   		secondQuestion = false
  	break;
  	case 'livescript':
  		secondQuestion = true
  	break;
  }
  if (user.confident === false){}else{responses.push(secondQuestion);}
}

function areyousure() {
  var js2 = prompt('Are you sure it was ' + js + "?");

  switch (js2.toLowerCase()) {
    case 'yes': case 'sure':
   		user.confident = true
  	break;
  	case 'no':
  		user.confident = false
  		return question3();
  	break;
  	case 'not sure':
  		user.confident = false
  	break;
  	default:
	  	alert("Please answer either 'Yes', 'No', 'Sure', or 'Not sure'.");
    	return areyousure();		
  	break;
  }
}
function question4() {
  var js = prompt('How many millions of bitcoins will exist as maximum?');

  switch (js.toLowerCase()) {
    case '21': case 'twentyone': case 'twenty one':
   		thirdQuestion = true
  	break;
  	default:
  		thirdQuestion = false
  	break;
  }
  responses.push(thirdQuestion);
}


function evaluate(responsesArray) {
var true_questions = 0
var false_questions = 0

	for (var i = 0; i < responses.length; i++) {
		if (responses[i] === true){
			true_questions++;
		} else {
			false_questions++;
		}
	}

user.totaltrue = true_questions
user.totalfalse = false_questions
return showResults();
}

function showResults() {

	if (user.confident === true) {var confident = "was"}else{var confident = "was not"}
	alert ("The user name is " + user.name + ", and he " + confident + " condident. And he answered correctly to " + user.totaltrue + " questions. While he fails " + user.totalfalse + " questions.");
	return;
}





question1();
question2();
question3();
areyousure();
question4();



// call the function, passing it the responses array
evaluate(responses);
