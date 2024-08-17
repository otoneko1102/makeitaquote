declare module 'makeitaquote' {
  interface Format {
    text: string;
    avatar: string | null;
    username: string;
    display_name: string;
    color: boolean;
    watermark: string;
  }

  class MiQ {
    constructor(client?: any, guild?: any);

    setFromMessage(message: any, formatText?: boolean): MiQ;
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

  export { MiQ, Format };
}
