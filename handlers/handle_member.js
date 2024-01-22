async function handle_member_add(interaction){
    return console.log(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[UYARI]${colors.Reset} Kullanıcı girişi işleme kısmı eklenmemiş.`)
}

async function handle_member_leave(interaction){
    return console.log(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[UYARI]${colors.Reset} Kullanıcı çıkma işleme kısmı eklenmemiş.`)
}

module.exports = { handle_member_add, handle_member_leave }