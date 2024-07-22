declare module 'makeitaquote' {
  import { Client, Guild, Message } from 'discord.js';

  interface Format {
    text: string;
    avatar: string | null;
    username: string;
    display_name: string;
    color: boolean;
    watermark: string;
  }

  class MiQ {
    constructor(client?: Client | null, guild?: Guild | null);

    setFromMessage(message: Message, formatText?: boolean): MiQ;
    setFromObject(data: Partial<Format>, formatText?: boolean): MiQ;
    setText(text: string, formatText?: boolean): MiQ;
    setAvatar(avatar: string | null): MiQ;
    setUsername(username: string): MiQ;
    setDisplayname(display_name: string): MiQ;
    setColor(color?: boolean): MiQ;
    setWatermark(watermark: string): MiQ;
    generate(returnRawImage?: boolean): Promise<string | Buffer>;
    getFormat(): Format;
  }
}
