function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '5493491456806', 'Shadow - Creador - Oficial', m)}
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i
module.exports = handler
