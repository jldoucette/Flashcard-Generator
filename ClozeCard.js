var ClozeCard = function(text,cloze) {
    if (this instanceof ClozeCard) {
        this.fullText=text;
        this.cloze=cloze;
        this.partial=text.replace(cloze," ...");
        if (this.partial==this.fullText){
        console.log("*************Oops. Your cloze deletion does not appear in your Text Entry************");
        this.validStatement=false;
        }
        else if (this.partial != this.fullText) {
        console.log("Your cloze deletion was successful");
        this.validStatement=true;
        }
    }
    else {
        return new ClozeCard(text,cloze);
    }
};

module.exports=ClozeCard;
