let handler = async (m, { conn }) => {
let caption = `*kok kamu gitu si sayang😭💕*`

conn.sendButton( m.chat, caption, `©️ VERDIbotz`, `anjay slibaw`, `.trigger`, m)

       }
       
handler.customPrefix = /^(peler|njig|anj|babi|bab1|ngentod|sial|anjir|anjirt|kontol|goblok|pantek|jahanam|ngentod|ngewe|bodoh|memek|ewe|ewek|lesbi|pepek|asu|asuk|gay|asw)/i
handler.command = new RegExp
module.exports = handler
