
    var app = new Vue({
    el: '#main',
    data: {
        newWord : "", 
            newImage : "",
            trickyName : "",
            gameContinue : true,
        allWords: [
                    {title : "WINTER", img : "images/winter.png"},
                    {title : "GENIE", img : "images/genie.png"},
                    {title : "YACHT", img : "images/yacth.png"},
                    {title : "SUSHI", img : "images/sushi.png"},
                    {title : "FOUNTAIN", img : "images/fountain.png"},
                    {title : "MUSHROOM", img : "images/mushroom.png"},
                    {title : "SKATEBOARD",  img :src = "images/skateboard.png"},
                    {title : "HIPPOPOTAMUS", img : "images/hippo.png"}
                   ]
            
         },
methods :
        {
            getRandomWord(){
             if(this.allWords.length > 0) //this function will not work once all words are solved
            {
                let n = Math.floor(Math.random()* this.allWords.length); //random number given selects a word at array index
            
           this.newWord = this.allWords[n].title; //randomly selected words
           this.newImage = this.allWords[n].img; //randomly selected image

            this.allWords.splice(n,1); //removing the selected word once solved
            this.trickyName = this.scramble(this.newWord.split("")); //splitting the selected word into an array of letters
        }
            else {
                this.gameContinue = false; //stop the game when all words are solved.
                }
            },
            scramble(arr){
                let trick = arr.sort(); //sort the letters
                    trick = trick.reverse(); //reverse the letter positions
                    return trick.join(""); //returning the joined word again
            },
            hint() {
                this.notification('hint-img');
            },

            checkAnswer(){
                let answer = document.getElementsByClassName('blank')[0].value;
                
                if(!answer) { //no answer inserted
                    this.notification('noti-one');
                }
                else if(answer.length !=0 & answer.toUpperCase() != this.newWord.toUpperCase())
            {
                this.notification('noti-two');
            }
            else { //if the answer is correct
                this.notification('noti-three');
                
                let replay = () =>
                    {
                        document.getElementsByClassName('blank')[0].value = ""; //clears input field
                        this.getRandomWord();
                    }
                    setTimeout(function(){
                        replay();
                    });
        
            } //end else
          
        },
            notification(element) {  //hiding and showing the right element
                document.getElementsByClassName(element)[0].style.display = "block";
                setTimeout(function(){
                    document.getElementsByClassName(element)[0].style.display = "none";
                },3500);
            }
        },

created(){
    this.getRandomWord();
} 
});

