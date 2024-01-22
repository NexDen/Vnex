const { message_log } = require("../message_logger.js")

async function handle_messages(message) {
    message_log(message)
}

module.exports = {
    handle_messages
}