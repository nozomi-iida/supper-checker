const express = require("express")
const dotenv = require("dotenv")
const app = express()
dotenv.config()
const richMenuRoutes = require('./routes/RichMenu');
const webHookRoutes = require('./routes/Webhook');
const AskDinner = require('./crons/AskDinner');

const PORT = process.env.PORT
exports.TOKEN = process.env.LINE_ACCESS_TOKEN

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.sendStatus(200)
});


app.use('/webhook', webHookRoutes)

app.use('/rich_menu', richMenuRoutes)

AskDinner();

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
