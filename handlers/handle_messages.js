const { mesaj_log } = require("../message_logger.js")

async function handle_messages(message) {
    mesaj_log(message)
}

module.exports = {
    handle_messages
}