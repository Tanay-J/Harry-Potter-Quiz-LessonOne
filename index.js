var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
var userName = readlineSync.question(chalk.yellowBright("Enter your name: "))
console.clear();
console.log(" ");
console.log(chalk.yellowBright("Hello ")+chalk.cyanBright.bold(userName.toUpperCase())+chalk.yellowBright(", Welcome to ")+chalk.yellowBright.bgCyan.bold("the Harry Potter Quiz! "));
console.log(" ")
console.log(chalk.yellowBright.italic("The Quiz is divided into two levels, each consisting of five questions "))
console.log(" ");
console.log(chalk.cyan('* ')+chalk.yellowBright("For each correct answer you will get a")+chalk.bold.green(" +2 "));
console.log(chalk.cyan('* ')+chalk.yellowBright("For each incorrect answer you will get a")+chalk.bold.red(" -1 "));
console.log(" ");
readlineSync.question(chalk.yellowBright("Press ")+chalk.yellowBright.bgCyan('Enter')+chalk.yellowBright(' to start the quiz '));
console.clear();

console.log(chalk.yellowBright("Hello ")+chalk.cyanBright.bold(userName.toUpperCase())+chalk.yellowBright(", Welcome to ")+chalk.cyan.bgYellowBright("the Harry Potter Quiz! "));
console.log(" ");


function quiz(question,answer,optA,optB,optC){
  console.log(chalk.blue('------------------------'))
  console.log(chalk.yellowBright(question));
  console.log(chalk.cyanBright(optA));
  console.log(chalk.cyanBright(optB));
  console.log(chalk.cyanBright(optC));
  
  var userAns = readlineSync.question(chalk.yellowBright("Enter your answer (a/b/c): "));
  if(userAns.toLowerCase()===answer){
    score = score+2;
    console.log(chalk.greenBright("That's a correct answer!"));
    console.log(chalk.magentaBright.italic('Your score: ')+score);
    console.log(" ");
  }else{
    console.log(chalk.red('You are wrong!'));
    score--;
    console.log(chalk.magentaBright.italic('Your score: ')+score);
    console.log(" ");
  }
}

//Level One Questions go here
var questionListOne = [
{
  question : "1. Which is the muggle family that Harry must live with every summer?",
  a: 'a. Dursleys',
  b: 'b. Dudleys',
  c: 'c. Weasleys',
  answer : 'a'},
{
  question : "2. Which of these Hogwarts professors teaches Transfiguration?",
  a: 'a. Prof. Snape',
  b: 'b. Prof. McGonagall',
  c: 'c. Prof. Sprout',
  answer : 'b'},
{
  question : "3. Who was Tom Marvolo Riddle?",
  a: 'a. The ghost of Sirius Black',
  b: 'b. Voldemort',
  c: 'c. Professor at Hogwarts',
  answer : 'b',
},
{
  question : "4. The creature Dobby was a ___",
  a: 'a. Goblin',
  b: 'b. Centaur',
  c: 'c. House-elf',
  answer : 'c',
},
{
  question : "5. The first Harry Potter theme park opened in 2010. Where is it?",
  a: "a. Kyoto, Japan",
  b: "b. Bermingham, England",
  c: "c. Orlando, Florida",
  answer: "c",
},
]

//Level Two questions go here
var questionListTwo = [{
  
  question : "6. Hogwarts students are excited when Professor Lockhart starts a dueling club. At the first meeting, Harry unwittingly reveals a mysterious and rare ability. What is this ability?",
  a: "a. Harry is a Horcrux.",
  b: "b. Harry can cast a Patronus charm.",
  c: "c. Harry can speak Parseltongue.",
  answer: "c",
},
{
  question : "7. Harry hasn't had the best experiences with his Defense Against the Dark Arts teachers, but in his third year, he finally gets one who really knows his stuff. Who is he?",
  a: "a. Professor Lockhart",
  b: "b. Professor Lupin",
  c: "c. Professor Grubbly-Plank",
  answer: "b",
},
{
  question : "8. In the fourth book, Harry received much unwanted attention from which Daily Prophet reporter?",
  a: "a. Rita Skeeter",
  b: "b. Barnabas Cuffe",
  c: "c. Gilderoy Lockhart",
  answer: "a",
},
{
  question : "9. Which horse-like creatures pull the school carriages at Hogwarts?",
  a: "a. Thestrals",
  b: "b. Centaurs",
  c: "c. Hippogriffs",
  answer: "a",
},
{
  question : "10. What magical object must Draco Malfoy repair in order to carry out his instructions from Voldemort?",
  a: "a. Slytherin's locket",
  b: "b. Vanishing Cabinet",
  c: "c. The Room of Requirement",
  answer: "b",
}]

//Leaderboard array
var leaderboard = [
  {
    name : 'Jay',
    score : 17,
  },
  {
    name : 'Veeru',
    score : 14,
  }
]


//Calling quiz function for Level One
for(var i = 0;i<questionListOne.length;i++){
  quiz(questionListOne[i].question,questionListOne[i].answer,questionListOne[i].a,questionListOne[i].b,questionListOne[i].c)
}
//Conditional entry into Level Two
if(score>6){
  console.log("----------");
  console.log(chalk.redBright.italic.bold("Grrreatt! You have entered Level Two of the Harry Potter Quiz, you sure are a Potterhead! "));
  readlineSync.question(chalk.yellowBright("Press ")+chalk.yellowBright.bgCyan('Enter')+chalk.yellowBright(' to start Level Two'));
  console.clear();
  console.log(chalk.yellowBright("Hello ")+chalk.cyanBright.bold(userName.toUpperCase())+chalk.yellowBright(", Welcome to Level Two of ")+chalk.cyan.bgYellowBright("the Harry Potter Quiz! "));
  console.log(" ");
  
  for(var i = 0;i<questionListTwo.length;i++){
  quiz(questionListTwo[i].question,questionListTwo[i].answer,questionListTwo[i].a,questionListTwo[i].b,questionListTwo[i].c)
 
    if(i==questionListTwo.length-1){
      console.log('-------------');
      
      if(score > leaderboard[0].score){
        console.log(chalk.yellowBright.italic.bold('Fantastic! You have beaten ')+chalk.cyanBright.bold(leaderboard[0].name.toUpperCase())+chalk.yellowBright.italic.bold(' to top the leaderboard, JK Rowling would be proud!'))
        console.log("");
        console.log(chalk.bgYellowBright.black('Leaderboard:'));
        console.log(chalk.yellowBright(userName.toUpperCase())+"   "+chalk.cyanBright.bold(score));
          for(var j = 0;j<leaderboard.length;j++){
          console.log(chalk.yellowBright(leaderboard[j].name.toUpperCase())+"   "+chalk.cyanBright.bold(leaderboard[j].score));
          }
      }else if(score == leaderboard[0].score || score ==leaderboard[1].score || score>leaderboard[1].score){
        console.log(chalk.yellowBright.italic('Fantastic! You now feature on the leaderboard, JK Rowling would be proud!'));
        console.log(" ");
        console.log(chalk.bgYellowBright.black('Leaderboard: '));
        
          for(var j = 0;j<leaderboard.length;j++){
          console.log(chalk.yellowBright(leaderboard[j].name.toUpperCase())+"   "+chalk.cyanBright.bold(leaderboard[j].score));
            if(j==0){
              console.log(chalk.yellowBright(userName.toUpperCase())+"   "+chalk.cyanBright.bold(score));
            }
          }
      }else{
        console.log(chalk.cyanBright.bold.italic(score)+chalk.yellowBright(" is a great score, JK Rowling would be proud!"));
        console.log(chalk.cyanBright('Thank you for playing.'))
        console.log(" ");
        console.log(chalk.bgYellowBright.black('Leaderboard: '));
          for(var j = 0;j<leaderboard.length;j++){
          console.log(chalk.yellowBright(leaderboard[j].name.toUpperCase())+"   "+chalk.cyanBright.bold(leaderboard[j].score));
        }
    }
  }
}
}else{
  console.log(chalk.redBright("Uh uh, you didn't qualify for Level Two of the quiz."))
  console.log(chalk.cyanBright('Thank you for playing.'))
}