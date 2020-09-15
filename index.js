const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('./dialogflow')
const youtube = require('./youtube')

const token = '**********************************' //token from telegram


const bot = new TelegramBot(token, {polling: true});

bot.on('message', async function (msg){
    const chatId = msg.chat.id;
    console.log(msg.text);

    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

    let responseText = dfResponse.text;
    if(dfResponse.intent === 'treinos'){
        responseText = await youtube.searchVideoURL(responseText, dfResponse.fields.corpo.stringValue);
        
    }

    bot.sendMessage(chatId, responseText); 
});


