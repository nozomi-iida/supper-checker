const AskDinner = () => {
  const replyMessage = [
    {
      "type": "template",
      "altText": "this is a confirm template",
      "template": {
        "type": "confirm",
        "text": "誰にききますか？",
        "actions": [
          {
            "type": "message",
            "label": "Yes",
            "text": "yes"
          },
          {
            "type": "message",
            "label": "No",
            "text": "no"
          }
        ]
      }
    }
  ]


}

module.exports = AskDinner
