//Level-1
console.log("Welcome to Level 1 of B99 Quiz :)\nGet a score of 3 or more to advance to the next level\nEnter the correct option \nIf your answer is option A, then enter A or a");
var l1_score=0
function quiz(question,answer,level)
{
  var readLineSync=require("readline-sync");
  var user_answer=readLineSync.question(question);
  if(level === 1)
  {
    if(user_answer.toUpperCase() === answer.toUpperCase())
    {
      l1_score++;
      console.log("Correct!Your current score is "+l1_score+"\n");
    }
    else
    {
      console.log("Incorrect!You current score is "+l1_score+"\n");
    }
  }
  else
  {
    if(user_answer.toUpperCase() === answer.toUpperCase())
    {
      l2_score++;
      console.log("Correct!Your current score is "+l2_score+"\n");
    }
    else
    {
      console.log("Incorrect!You current score is "+l2_score+"\n");
    }
  }
  }
var questionList1=[{question:"Q1)Which season does Jake propose to Amy in? \nA)Season 6\nB)Season 5\nC)Season 4\n",answer:"B"},{question:"Q2)Doug Judy is better known as \nA)Pontiac Bandit\nB)Trudy Judy\nC)Mangy Carl\n",answer:"A"},{question:"Q3)Who hasn't won a Halloween Heist yet?\nA)Rosa\nB)Amy\nC)Terry\nD)Charles\n",answer:"D"},{question:"Q4)What were Jake and Holt's names while living in Florida?\nA)Larry & Craig\nB)Barry and Craig\nC)Larry and Greg\nD)Barry and Craig\n",answer:"C"},{question:"Q5)How many kids does Terry have?\nA)1\nB)2\nC)3\nD)4\n",answer:"C"}];

for(var i=0;i<questionList1.length;i++)
  {
    quiz(questionList1[i].question,questionList1[i].answer,1);
  }
if(l1_score>=3)
{
  console.log("Congrats!! You scored  "+l1_score+" And will now advance to level 2");
for(i=0;i<100000000;i++)
  {
    continue;
  }
console.clear();

//Level-2
console.log("Welcome to Level 2 of B99 Quiz :) This one is gonna be a lot harder!!\nEnter the correct option \nIf your answer is option A, then enter A or a");
var l2_score=0;

var questionList2=[{question:"Q1)How many times has Hitckock been married? \nA)4\nB)6\nC)5\nD)7\n",answer:"B"},{question:"Q2)Kelly is \nA)Scully's Wife\nB)Scully's Dog\nC)Scully's Wife and Dog\n",answer:"C"},{question:"Q3)What does Rosa's landlord think her name is?\nA)Alice Goldfinger\nB)Emily Goldfinger\nC)Emily Goldflinch\nD)Alice Goldflinch\n",answer:"C"},{question:"Q4)What is the name of Rosa's dog in S7?\nA)Cheedar\nB)Arlo\nC)Andy\nD)Arnold\n",answer:"B"},{question:"Q5)Who Is Jake's Favourite Musician?\nA)Taylor Swift\nB)Carly Rae Jepsen\nC)Ariana Grande\nD)Ruth B\n",answer:"A"}];

for(var i=0;i<questionList2.length;i++)
  {
    quiz(questionList2[i].question,questionList2[i].answer,2);
  }
var total=l1_score+l2_score
console.log("Congratulations!! You have scored "+l2_score+" in level 2 and your total score is "+total);
}
else
{
  console.log("Do you even watch B99? You only scored  "+l1_score+"Watch the show and retake the quiz");
}

