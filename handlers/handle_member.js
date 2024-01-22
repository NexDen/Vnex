const colors = global.colors
async function handle_member_add(interaction){
    return console.log(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[WARNING]${colors.Reset} The member join handler has not been implemented.`)
}

async function handle_member_leave(interaction){
    return console.log(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[WARNING]${colors.Reset} The member leave handler has not been implemented.`)
}

module.exports = { handle_member_add, handle_member_leave }