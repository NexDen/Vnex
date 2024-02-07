const colors = global.colors
config = global.config
async function handle_member_add(interaction){
    return console.log(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[${config.warningMessages.baseWarning}]${colors.Reset} ${config.warningMessages.memberJoinHandlerNotImplemented}`)
}

async function handle_member_leave(interaction){
    return console.log(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[${config.warningMessages.baseWarning}]${colors.Reset} ${config.warningMessages.memberLeaveHandlerNotImplemented}`)
}

module.exports = { handle_member_add, handle_member_leave }