let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : verdi
║│➸ ```UMUR``` : 14thn
║│➸ ```ASAL``` : -
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/I8Q4oJVw8buHhIgMH5iVAv
║│➸ ```ISTAGRAM``` : http://instagram.com/VERDI_ZZ
║│➸ ```WHATSAPP``` : http://wa.me/6285706735450
╰────────❉
`.trim(), m)
}

handler.help = ['inforozi']
handler.tags = ['main', 'utama']
handler.command = /^(inforozi)$/i

handler.exp = 150

module.exports = handler
