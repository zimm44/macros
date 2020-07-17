// Courtesy from @Zimm and thanks to the user @KrishMero at Discord
// This macro copy the image from Image Tab of an open journal and paste it on chat

let imageUrl = game.journal.find(j => j.sheet.rendered).data.img;

ChatMessage.create({
  user: game.user._id,
  content: `<img src="${imageUrl}" />`,
  type: CONST.CHAT_MESSAGE_TYPES.OOC
});
