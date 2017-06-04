var BasicCard=require("./BasicCard");
var ClozeCard=require("./ClozeCard");
var type=process.argv[2];
if (type=="basic") {
var question=process.argv[3];
var answer=process.argv[4];
var basictest= BasicCard(question, answer);
console.log("Front Text: "+basictest.front)
console.log("Back Text: "+basictest.back);
}
if (type=="cloze") {
var question=process.argv[3];
var cloze=process.argv[4];
var clozetest=ClozeCard(question,cloze);
console.log(clozetest);
console.log("Full Text: "+clozetest.fullText);
console.log("Cloze Text: "+clozetest.cloze);
console.log("Partial Text: "+clozetest.partial);
}