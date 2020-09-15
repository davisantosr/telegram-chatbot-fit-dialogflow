# Chatbot no Telegram utilizando Node.js :robot:

[![Generic badge](https://img.shields.io/badge/runtime-Node.js-green.svg)](https://nodejs.org)
[![Generic badge](https://img.shields.io/badge/plataform-Dialogform-orange.svg)](https://dialogflow.cloud.google.com/)
[![Generic badge](https://img.shields.io/badge/API-Youtube-red.svg)](https://developers.google.com/youtube/v3/quickstart/nodejs)



The application is a Telegram bot that searches for workout videos on Youtube and makes it available to anyone who asks.

## Technologies and libs :books:

- [Node.js](https://nodejs.org)
- [Dialogflow](https://dialogflow.cloud.google.com/)
- [Youtube API](https://developers.google.com/youtube/v3/quickstart/nodejs)
- [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)
- [youtube-node](https://www.npmjs.com/package/youtube-node)

## Configuration :wrench:

-----

First of all go to Telegram and find for BotFather(contacts), start the conversation and type:
 ```bash
 /newbot
  ```
After you follow the steps the BotFather gave you, take the Token to access the HTTP API and set it at index.js:
```javascript
const token = '**********************************' //token from telegram
```
-----

Using [Dialogflow](https://dialogflow.cloud.google.com/) create a agent. In the agent's general configuration get the private key on the Service Account for system integration and set it on telegram-bot.json document:
```json
{
  "type":"",
  "project_id":"",
  "private_key_id":"", 
  "private_key":"",
  "client_email":"",
  "client_id":"",
  "auth_uri":"",
  "token_uri":"",
  "auth_provider_x509_cert_url":"", 
  "client_x509_cert_url":""
}
```

Working with Dialogflow you can set a new Entitie with the general content for work with Intents. Configuring Intents, you can define some patterns for the users asks and put some answers for it, wich helps the bot understands the content.

:incoming_envelope: NOTE: In the code(index.js), the Intent from Dialogflow was configurated as 'treinos'. If you want to create a new Intent, just change the value for the same name you created.

-----
Finished those steps, you need to get the key from [Youtube's API](https://developers.google.com/youtube/v3/quickstart/nodejs) to become able to search and send the video for the user. After you get the key, set it at yt-config.json document.

## Usage :key:
Access the link of your bot window from BotFather to begin:
```bash
Done! Congratulations on your new bot. You will find it at t.me/NAMEOFYOURBOT_bot.
```
Send a message as you configurated at Dialogflow and the bot will text you back sending a video from Youtube

## Contributing :earth_americas:
Pull requests are welcome. 

## Source :computer:
- Code made following Digital Innovation One Tutorial - Node.js Web Developer Bootcamp