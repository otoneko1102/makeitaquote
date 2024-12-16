# Example for discord.js@13 (beta)
```js
const { Client } = require('discord.js');
const client = new Client({ intents: [/* Required intents */] });
const { MiQ } = require('makeitaquote');

// Normal
client.on('messageCreate', async message => {
  if (message.content === '!miq') {
    const replied = await message.channel.messages.fetch(message.reference.messageId);
    const miq = new MiQ()
      .setFromMessage(replied);

    const response = await miq.generateBeta();
    await message.reply({ files: [new MessageAttachment(response, 'miq.png')] });
  }
})

// Color
client.on('messageCreate', async message => {
  if (message.content === '!miq') {
    const replied = await message.channel.messages.fetch(message.reference.messageId);
    const miq = new MiQ()
      .setFromMessage(replied)
      .setColor(true);

    const response = await miq.generateBeta();
    await message.reply({ files: [new MessageAttachment(response, 'miq.png')] });
  }
})

client.login('TOKEN');
```