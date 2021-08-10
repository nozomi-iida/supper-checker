const cron = require('node-cron');
const utils = require('../../utils');

const AskDinner = () => {
  cron.schedule('* * 12 * * *', () => {
    const message = {
      "type": "template",
      "altText": "ask today's dinner",
      "template": {
        "type": "confirm",
        "text": "今日夜ご飯食べない人ー？",
        "actions": [
          {
            "type": "message",
            "label": "食べない🙅",
            "text": "食べない！🙅"
          },
          {
            "type": "message",
            "label": "食べるよ🙆",
            "text": "食べるよー🙆"
          }
        ]
      }
    }

    utils.client.pushMessage("C518e72aaa826ceff524df2d1eae28543", message).catch(e => {
      console.log(`error: ${e}`)
    })
  });
}

module.exports = AskDinner