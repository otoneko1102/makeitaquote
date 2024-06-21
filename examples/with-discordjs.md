# Example for discord.js@13
```js
const { Client } = require('discord.js');
const client = new Client({ intents: [/* Required intents */] });
const { MiQ } = require('makeitaquote');

// Normal
client.on('messageCreate', async message => {
  if (message.content === '!miq') {
    const replied = await message.channel.messages.fetch(message.reference.messageId);
    const miq = new MiQ(client, message.guild)
      .setFromMessage(replied);

    const response = await miq.generate();
    message.reply(response);
  }
})

// Color
client.on('messageCreate', async message => {
  if (message.content === '!miq') {
    const replied = await message.channel.messages.fetch(message.reference.messageId);
    const miq = new MiQ(client, message.guild)
      .setFromMessage(replied)
      .setColor(true);

    const response = await miq.generate();
    message.reply(response);
  }
})

client.login('TOKEN');
```