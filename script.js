let message1, message2, message3;
message1 = ['I','am','the', 'message'];
message2 = ['Hit','me','up', 'Scotty'];
message3 = ['It','be','the', 'one'];
let messages = {message1, message2, message3};

const createMessage = (obj) => {
  let finalMessage = [];
  for(let key in obj){
    let currentMessage = obj[key];
    let chosenWord = Math.floor(Math.random() * currentMessage.length);
    finalMessage.push(currentMessage[chosenWord]);
  }
  let finalMSG = finalMessage.join(' ');
  console.log(finalMSG);
}

createMessage(messages);