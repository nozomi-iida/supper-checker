const express = require("express")
const router = express.Router()
const utils = require("../../utils")
const line = require('@line/bot-sdk');
const fs = require(`fs`)
const path = require('path')

router.post("/create", (req, res) => {
  const client = new line.Client({
    channelAccessToken: utils.TOKEN
  });

  const richMenu = {
    "size":{
      "width":800,
      "height":270
    },
    "selected": false,
    "name": "ご飯食べる？",
    "chatBarText": "ご飯食べる？",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 400,
          "height": 270
        },
        "action": {
          "type": "message",
          "text": "ご飯いる？"
        }
      },
      {
        "bounds": {
          "x": 400,
          "y": 0,
          "width": 400,
          "height": 270
        },
        "action": {
          "type": "message",
          "text": "今日は夕飯いりません．"
        }
      }
    ]
  }
  const createRichMenu = async () => {
    const richMenuId = await client.createRichMenu(richMenu)
    const imagePath = path.join(__dirname, './richmenu.png')
    await client.setRichMenuImage(richMenuId, fs.createReadStream(imagePath))
    await client.setDefaultRichMenu(richMenuId)
    return res.send({richMenuId})
  }
  createRichMenu()
})

module.exports = router