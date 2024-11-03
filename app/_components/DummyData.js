const conversation = [
  {
    speaker: "Chatbot",
    message: ["Hello, I am a bot. Welcome to Mediswift!"],
    action: false
  },
  {
    speaker: "Human",
    message: ["When will my report be ready?"],
    action: false
  },
  {
    speaker: "Chatbot",
    message: ["Your patient report is now ready to view."],
    action: true,
    actionMessage: "Click here to view your report",
    actionLink: "https://mediswift.com/patient-report/12345"
  },
  {
    speaker: "Human",
    message: ["Thank you!"],
    action: false
  },
]

  
  export default conversation;





