const Youtube = require('youtube-node');
const config = require('./yt-config');

const youtube = new Youtube();
youtube.setKey(config.key);

function searchVideoURL(message, queryText){
    return new Promise((resolve, reject) => {
        youtube.search(`Exercicios para bíceps ${queryText}`, 2, function(error, result){
            if(!error){
                const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);
                const youtubeLinks = videoIds.map(videoId => `https://youtube.com/watch?v=${videoId}`)
                resolve(`${message} ${youtubeLinks.join(`, `)}`);
            } else {
                reject('deu erro')
            };
        });
        
    });        
}

module.exports.searchVideoURL = searchVideoURL;

