// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i=0; i< gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
      }
    
      return gifts;
    }
    
    wrapGifts(gifts)

    

    function writeCards(name, event){
      const cardsArray = [];
        for(let a=0; a < name.length; a++){
            const message = (`Thank you, ${name[a]}, for the wonderful ${event} gift!`);
            cardsArray.push(message);
            
        }
        return(cardsArray)
    }

    console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))
    //while loop
    


    function countDown(n){
        while ( n >= 0) {
          console.log(n);
        n=n-1;
        }
    }
    countDown(21)