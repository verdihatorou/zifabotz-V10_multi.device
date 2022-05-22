let moment = require('moment-timezone')
let fetch = require('node-fetch')
let wm = global.botwm
let handler = m => m

handler.all = async function (m) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let logo = await (await fetch(`${logos()}`)).buffer()
let tag = `@${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
    let waofc = `@${'0'.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
 let ow = `@${'628706735450'.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let tks = `Saya adalah ZIFABOTZ salah satu Bot Whatsapp yang diciptakan oleh : ${ow}
Silahkan tekan Tombol ${user.registered ? '"Menu"' : '"Menu"'} untuk ${user.registered ? 'melihat list command dari' : 'list menu di zifabotz'} zifabotz.

*Official Bot By ${waofc}*
*Powered By ${ow}*`
    const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Hai Kak ${username}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fla + `${ucap()}`)).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let tksk = `${user.banned ? 'Maaf kak, kamu telah dibanned Oleh Owner karna Alasan tertentu!' : tks}`
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendMessage(m.chat, { "contentText": `${ucapan()} ${username} !`, "footerText": tksk,
"buttons": [
{buttonId: user.registered ? '.menu' : `.menu`, buttonText: {displayText: user.registered ? '⋮☰ Menu' : 'menu'}, type: 1},
{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},
{buttonId: '.rules', buttonText: {displayText: 'Rules'}, type: 1}
],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ah9LXq1Z_XnRLzlVnZSt6_yWxC6mp20xTpZRSJxc7TUP.enc",
            "mimetype": "application/pdf",
            "title": "ness.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "99999999999999",
            "pageCount": 100,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": `Runtime : ${uptime}`,
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7118-24/351756_287008086621545_8250021012380583765_n.enc?ccb=11-4&oh=6f0f730e5224c054969c276a6276a920&oe=61A21F46",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": await (await fetch('https://telegra.ph/file/20c62b52ac7fb9bf223bf.jpg')).buffer(),
  }}, 'buttonsMessage', { quoted: ftroli, contextInfo: { mentionedJid: this.parseMention(tksk), forwardingScore: 999, isForwarded: true, externalAdReply: { title: global.wm, body: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, description: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, mediaType: 2, thumbnail: await (await fetch(`${logos()}`)).buffer(), mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`}}})
    user.pc = new Date * 1
}

module.exports = handler

function logos() {
  const lgs = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (lgs >= 4) {
    imp = 'https://telegra.ph/file/fa364a0ff73e280a2d4dc.jpg'
  }
  if (lgs > 10) {
    imp = 'https://telegra.ph/file/fa364a0ff73e280a2d4dc.jpg'
  }
  if (lgs >= 15) {
    imp = 'https://telegra.ph/file/fa364a0ff73e280a2d4dc.jpg'
  }
  if (lgs >= 18) {
    imp = 'https://telegra.ph/file/fa364a0ff73e280a2d4dc.jpg'
  }
  return imp
}
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "🌄 Good Morning"
    }
    if (time > 10) {
        res = "☀️ Good Afternoon"
    }
    if (time >= 15) {
        res = "🌇 Good Afternoon"
    }
    if (time >= 18) {
        res = "🌙 Good Night"
    }
    return res
}
function ucap() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari ☀️"
    if (time >= 4) {
        res = "Pagi"
    }
    if (time > 10) {
        res = "Siang"
    }
    if (time >= 15) {
        res = "Sore"
    }
    if (time >= 18) {
        res = "Malam"
    }
    return res
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
