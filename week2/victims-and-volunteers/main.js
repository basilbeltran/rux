function promptUser() {

questions = [];
experts = [];

var i = 0;
do{                                             // DO WHILE
  i++;
  var qName = prompt(`Name ? ${i}`, "Basil");
  var qQuestion = prompt(`What is your question ? ${i}`, "How many turtles are there?");
  var qCategory = prompt(`Category of your question ${i}`, "cosmology");
  var qUrgency = prompt(`Degree of urgency? ${i}`, "urgent");
  questions.push({"name":qName, "category":qCategory, "question":qQuestion, "urgency":qUrgency  });
} while( confirm("add another question ?") );


var i = 0;
while( confirm("ADD AN EXPERT ?") ){     //  WHILE
  var eName = prompt(`Name of expert  ${i}`, "Stephan");
  var eArea = prompt(`What is your area of expertice ${i}`, "cosmology");
  var eAvailable = prompt(`Current availability ${i}`, "available");
  experts.push({"name":eName, "area":eArea, "available":eAvailable  });
}

if (questions != null) {
  //for(question in questions)
  for (var i = 0; i < questions.length; i++) {
    document.getElementById("divQuestions").innerHTML +=
       questions[i].name
      + " is asking an "
      + questions[i].urgency
      + " question related to "
      + questions[i].category + " : "
      + questions[i].question+ " </br> ";
  }
}

console.log(questions);
console.log(experts);

} // end window.onload
