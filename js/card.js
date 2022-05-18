


class CardGame{
    constructor(choices,randomArray,randomArray2,cardsArray,flipped){
        this.choices = choices
        this.randomArray = randomArray
        this.randomArray2 = randomArray2
        this.cardsArray = cardsArray
        this.flipped = flipped
    }
    choices = []
    randomArray = []
    randomArray2 = []
    cardsArray = []
    flipped = [0,0,0,0,0,0,0,0,0,0,0,0]
     restart = function(){
        this.flipped = [0,0,0,0,0,0,0,0,0,0,0,0]
        this.clear()
        this.randomized()
    }

    addEvents = function() {
        this.action = document.querySelectorAll('section').forEach(elemnt => elemnt.addEventListener("click", this.flip))
     }
    removeEvents = function(x){
    this.remove = document.getElementById(x).removeEventListener("click", this.flip)
       }

  


    randomize = function(){
        this.randomArray = []
        this.randomArray2 = []
        this.cardsArray = []
        while(cardGame.randomArray.length < 6){
            cardGame.randomArray.push(Math.floor(Math.random() * 6))
            cardGame.randomArray = [...new Set(cardGame.randomArray)]
        }
        while(cardGame.randomArray2.length < 6){
            cardGame.randomArray2.push(Math.floor(Math.random() * 6))
            cardGame.randomArray2 = [...new Set(cardGame.randomArray2)]
        }
        let offset = Math.ceil(32 * Math.random())
        cardGame.cardsArray = cardGame.randomArray.concat(cardGame.randomArray2)
        cardGame.cardsArray.forEach((elemnt, index) => {document.querySelectorAll('section')[index].classList=`card${elemnt+offset} flip`})
        console.log(cardGame.cardsArray)
    }
    
    flip = function(event){
        this.flipped = [0,0,0,0,0,0,0,0,0,0,0,0]
        if(!this.flipped[event.target.id]){
        cardGame.removeEvents(event.target.id)
           cardGame.choices += event.target.id
           console.log(cardGame.choices.length)
            event.target.classList.toggle("flip")
            this.flipped[event.target.id] = 1
    

            if(cardGame.choices.length === 11){
                cardGame.check()
             } 
            //  else{
            // //     cardGame.addEvents()
            // // }
        }
    }

    check =  function(){
            if(cardGame.cardsArray[cardGame.choices[0]!== cardGame.cardsArray[cardGame.choices[1]]]){
                setTimeout(()=>{
                    document.querySelectorAll('section')[cardGame.choices[0]].classList.toggle('flip')
                    document.querySelectorAll('section')[cardGame.choices[1]].classList.toggle('flip')
                    cardGame.flipped[choices[0]]=0
                    cardGame.flipped[choices[1]]=1
                    cardGame.addEvents()
                    CardGame.clear()
                    console.log('working')
                },1000)
        }else{
            cardGame.clear()
            cardGame.addEvents()
        }
        }

 
 

 clear = function(){ 
     cardGame.choices = []
 }

 skin = function(x){
    document.querySelectorAll('.flip').forEach(x=>x.style.backgroundImage = `url("img/back.jpeg")`)
    if(document.querySelectorAll('.card0').length!==0){document.querySelectorAll('.card1').forEach(x=>x.style.backgroundImage = `url("Yugioh/front1.gif")`)}
    if(document.querySelectorAll('.card1').length!==0){document.querySelectorAll('.card2').forEach(x=>x.style.backgroundImage = `url("Yugioh/front2.gif")`)}
    if(document.querySelectorAll('.card2').length!==0){document.querySelectorAll('.card3').forEach(x=>x.style.backgroundImage = `url("Yugioh/front3.gif")`)}
    if(document.querySelectorAll('.card3').length!==0){document.querySelectorAll('.card4').forEach(x=>x.style.backgroundImage = `url("Yugioh/front4.jpg")`)}
    if(document.querySelectorAll('.card4').length!==0){document.querySelectorAll('.card5').forEach(x=>x.style.backgroundImage = `url("Yugioh/front5.gif")`)}
    if(document.querySelectorAll('.card5').length!==0){document.querySelectorAll('.card6').forEach(x=>x.style.backgroundImage = `url("Yugioh/front6.gif")`)}
    if(document.querySelectorAll('.card6').length!==0){document.querySelectorAll('.card7').forEach(x=>x.style.backgroundImage = `url("Yugioh/front7.gif")`)}
    if(document.querySelectorAll('.card7').length!==0){document.querySelectorAll('.card8').forEach(x=>x.style.backgroundImage = `url("Yugioh/front8.gif")`)}
    if(document.querySelectorAll('.card8').length!==0){document.querySelectorAll('.card9').forEach(x=>x.style.backgroundImage = `url("Yugioh/front9.gif")`)}
    if(document.querySelectorAll('.card9').length!==0){document.querySelectorAll('.card10').forEach(x=>x.style.backgroundImage = `url("Yugioh/front10.gif")`)}
    if(document.querySelectorAll('.card10').length!==0){document.querySelectorAll('.card11').forEach(x=>x.style.backgroundImage = `url("Yugioh/front11.gif")`)}
    if(document.querySelectorAll('.card11').length!==0){document.querySelectorAll('.card12').forEach(x=>x.style.backgroundImage = `url("Yugioh/front12.jpg")`)}
    if(document.querySelectorAll('.card12').length!==0){document.querySelectorAll('.card13').forEach(x=>x.style.backgroundImage = `url("Yugioh/front13.jpeg")`)}
    if(document.querySelectorAll('.card13').length!==0){document.querySelectorAll('.card14').forEach(x=>x.style.backgroundImage = `url("Yugioh/back.jpg"`)}
    if(document.querySelectorAll('.card14').length!==0){document.querySelectorAll('.card15').forEach(x=>x.style.backgroundImage = `url("Yugioh/back.jpg")`)}
 }


}


  
  
   


const cardGame = new CardGame()
cardGame.randomize()
cardGame.addEvents()

