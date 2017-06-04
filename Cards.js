var inquirer = require("inquirer");
var BasicCard=require("./BasicCard");
var ClozeCard=require("./ClozeCard");
var fs=require('fs');
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
            var basicentry= BasicCard(basic.question,basic.answer);
            console.log("Front Text: "+basicentry.front);
            console.log("Back Text: "+basicentry.back);
            var logBasicQuestion = "\n***Question: " + basicentry.front +
    " ***Answer: " + basicentry.back;
    fs.appendFile("basic.txt", logBasicQuestion);
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
            var clozeentry= ClozeCard(clozeformat.question,clozeformat.cloze);
            console.log(clozeentry);
            console.log("Full Text: "+clozeentry.fullText);
            console.log("Cloze Text: "+clozeentry.cloze);
            console.log("Partial Text: "+clozeentry.partial);
            console.log("Is Valid Statement: "+clozeentry.validStatement);
            if (clozeentry.validStatement) {
                var logClozeQuestion = "\n***Full Text: " + clozeentry.fullText +
                " ***Cloze text: " + clozeentry.cloze + " ***Partial Text: "+ clozeentry.partial;
                fs.appendFile("cloze.txt", logClozeQuestion);
            }
        });
}
