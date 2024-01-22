const { message_log } = require("../message_logger.js")
const colors = global.colors
async function handle_messages(message) {
    message_log(message)
}

module.exports = {
    handle_messages
}