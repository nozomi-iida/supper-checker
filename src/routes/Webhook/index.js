const https = require("https");
const express = require("express");
const  utils = require("../../utils")
const router = express.Router()
const TOKEN = process.env.LINE_ACCESS_TOKEN

router.get("/", (req, res) => {
  res.send("HTTP GET request for webHook")
})

router.post("/", (req, res) => {
  res.send("Check webhook")
  const replyToken = req.body.events[0].replyToken;

  const returnIds = (e) => {
    const message = {
      type: "text",
      text: `group_id: ${e.source.groupId},\nuser_id: ${e.source.userId}`
    }

    utils.client.replyMessage(replyToken, message).catch(e => {
      console.log(e)
    })
  }

  if (req.body.events[0].message.text.includes("ids")) {
    returnIds(req.body.events[0])
  }
})

module.exports = router