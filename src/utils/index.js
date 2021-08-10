const dotenv = require("dotenv");
const line = require('@line/bot-sdk');

dotenv.config()
const TOKEN = process.env.LINE_ACCESS_TOKEN
const CHANNEL_ID = process.env.CHANNEL_ID

const client = new line.Client({
  channelAccessToken: TOKEN
});

module.exports = {
  TOKEN,
  CHANNEL_ID,
  client
}