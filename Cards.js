var inquirer = require("inquirer");
var BasicCard=require("./BasicCard");
var ClozeCard=require("./ClozeCard");
var type=process.argv[2];

if (type=="basic") {
    askBasicQuestions();
}

if (type=="cloze") {
    askClozeQuestions();
}

function askBasicQuestions() {
    inquirer.prompt([
        {
            name: "question",
            message: "What is the question to ask? "
        }, {
            name: "answer",
            message: "What is the correct answer to the question? "
        }
        
        ]).then(function(basic) {
            var basictest= BasicCard(basic.question,basic.answer);
            console.log("Front Text: "+basictest.front)
            console.log("Back Text: "+basictest.back);
        });
    }

function askClozeQuestions() {
    inquirer.prompt([
        {
            name: "question",
            message: "What is the full text of the statement? "
        }, {
            name: "cloze",
            message: "What is the Cloze phrase to remove from the statement? "
        }
        
        ]).then(function(clozeformat) {
            var clozetest= ClozeCard(clozeformat.question,clozeformat.cloze);
            console.log(clozetest);
            console.log("Full Text: "+clozetest.fullText);
            console.log("Cloze Text: "+clozetest.cloze);
            console.log("Partial Text: "+clozetest.partial);
        });
}