
questions = [];
experts = [];

//for (var i = 0; i < numVictims; i++) {        // FOR
var i = 0;
do{                                             // DO WHILE
  i++;
  var vName = prompt(`Name ? ${i}`);
  var vPhone = prompt(`What is your question ? ${i}`);
  var vAddress = prompt(`Is this Urgent? ${i}`);
  questions.push({"name":qName, "category":qCategory, "question":qQuestion, "urgency":qUrgency  });
} while( confirm("add another question ?") );


var i = 0;
while( confirm("ADD AN EXPERT ?") ){     //  WHILE
  var vName = prompt(`Name of expert  ${i}`);
  var vPhone = prompt(`What is your area of expertice ${i}`);
  var vAddress = prompt(`Current availability ${i}`);
  experts.push({"name":eName, "area":eArea, "available":eAvailable  });
}

if (questions != null) {
  for(question in questions){
    document.getElementById("divQuestions").innerHTML =   question.qName
                                                        + " is asking an "
                                                        + question.qUrgency
                                                        + " question :"
                                                        + question.qQuestion;
  }
}

console.log(questions);
console.log(experts);
