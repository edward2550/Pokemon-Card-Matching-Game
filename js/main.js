function CardGame(){
this.choices = []
this.cardsArray= []
this.randomArray2 = []
this.randomArray = []
console.log(this.flipped)


    this.restart = function(){
        this.flipped = [0,0,0,0,0,0,0,0,0,0,0,0]
        cg.clear()
        cg.randomized()
    },
    this.randomized = function(){
        
    while(cg.randomArray.length < 6){
        cg.randomArray.push(Math.floor(Math.random() *6))
        cg.randomArray = [...new Set(cg.randomArray)]
    }
    while(this.randomArray2.length < 6){
        cg.randomArray2.push(Math.floor(Math.random() * 6))
        cg.randomArray2 = [...new Set(cg.randomArray2)]
        let offset = Math.ceil(32 * Math.random())
            cg.cardsArray = cg.randomArray.concat(this.randomArray2)
            cg.cardsArray.forEach((elemnt, index) => {document.querySelectorAll('section')[index].classList=`card${elemnt+offset} flip`})
    }
    },
    this.addEvents = function(){
        document.querySelectorAll('section').forEach(elemnt => elemnt.addEventListener("click", this.flip))
    },

    this.removeEvents = function(x){
        document.querySelectorAll('section').forEach(x=>x.removeEventListener("click", this.flip))
    },
    this.flipped = [0,0,0,0,0,0,0,0,0,0,0,0],  
    this.flip = function(event){
        console.log(cg.flipped)
        if(!cg.flipped[event.target.id]){
            cg.removeEvents(event.target.id)
            cg.choices.push(event.target.id)
            console.log(cg.choices)
            console.log(cg.choices.length)
                event.target.classList.toggle("flip")
                // cg.flipped[event.target.id] = 1
        

                if(cg.choices.length === 2){
                    cg.check()
                } 
                else{
                    cg.addEvents()
                }
            }
    },

    this.check = function(){
       console.log(this.cardsArray[cg.choices[0]])
       console.log(this.cardsArray[cg.choices[1]])
       console.log(cg.choices[0])
       console.log(cg.choices[1])

        if(cg.cardsArray[cg.choices[0]]!== cg.cardsArray[cg.choices[1]]){
            setTimeout(()=>{
                document.querySelectorAll('section')[cg.choices[0]].classList.toggle('flip')
                document.querySelectorAll('section')[cg.choices[1]].classList.toggle('flip')
                cg.flipped[cg.choices[0]]=0
                cg.flipped[cg.choices[1]]=0
                cg.addEvents()
                cg.clear()
              },1000)
    }else{
        this.clear()
        cg.addEvents()
    }},


    this.clear = function(){
        cg.choices = []
    },

    this.skin = function(x){
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

const cg = new CardGame()
cg.randomized()
cg.addEvents()
function restartB(){
    cg.randomized()
    cg.clear()
    console.log(cg.choices)
    console.log(cg.clear)
} 