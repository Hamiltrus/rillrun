let handler = async (m, { conn, command }) => {

switch (command) {
    case 'addusr':
    case 'adduser': 
        console.log(command)
    break
}

}

handler.command = /^(addu?s?e?r?)$/i
module.exports = handler
