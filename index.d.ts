declare module 'makeitaquote' {
  interface Format {
    text: string;
    avatar: string | null;
    username: string;
    display_name: string;
    color: boolean;
    watermark: string;
  }

  /**
   * @class MiQ
   * @description The MiQ class is designed to create a quote with customizable properties such as text, avatar, username, display name, color, and watermark. It also provides a method to generate a quote image or data from an external API.
   */
  class MiQ {
    constructor();

    /**
     * @function setFromMessage
     * @description Sets the quote properties based on a Discord message object.
     * @param {Object} message - The Discord message object.
     * @param {boolean} [formatText=false] - Whether to format the text by removing markdown.
     * @returns {MiQ} Returns the instance of MiQ for chaining.
     */
    setFromMessage(message: any, formatText?: boolean): MiQ;

    /**
     * @function setFromObject
     * @description Sets the quote properties based on an object.
     * @param {Object} data - The object containing quote properties.
     * @param {boolean} [formatText=false] - Whether to format the text by removing markdown.
     * @returns {MiQ} Returns the instance of MiQ for chaining.
     */
    setFromObject(data: Partial<Format>, formatText?: boolean): MiQ;

    /**
     * @function setText
     * @description Sets the text of the quote. Optionally formats the text to remove markdown.
     * @param {string} text - The text to be set.
     * @param {boolean} [formatText=false] - Whether to format the text by removing markdown.
     * @throws {TypeError} Throws an error if text is not a string or formatText is not a boolean.
     * @returns {MiQ} Returns the instance of MiQ for chaining.
     */
    setText(text: string, formatText?: boolean): MiQ;

    /**
     * @function setAvatar
     * @description Sets the avatar URL of the quote.
     * @param {string|null} avatar - The avatar URL to be set.
     * @throws {TypeError} Throws an error if avatar is not a string or null.
     * @returns {MiQ} Returns the instance of MiQ for chaining.
     */
    setAvatar(avatar: string | null): MiQ;

    /**
     * @function setUsername
     * @description Sets the username of the quote.
     * @param {string} username - The username to be set.
     * @throws {TypeError} Throws an error if username is not a string.
     * @returns {MiQ} Returns the instance of MiQ for chaining.
     */
    setUsername(username: string): MiQ;

    /**
     * @function setDisplayname
     * @description Sets the display name of the quote.
     * @param {string} display_name - The display name to be set.
     * @throws {TypeError} Throws an error if display_name is not a string.
     * @returns {MiQ} Returns the instance of MiQ for chaining.
     */
    setDisplayname(display_name: string): MiQ;

    /**
     * @function setColor
     * @description Sets whether the quote should have a colored background.
     * @param {boolean} [color=false] - Whether to use a colored background.
     * @throws {TypeError} Throws an error if color is not a boolean.
     * @returns {MiQ} Returns the instance of MiQ for chaining.
     */
    setColor(color?: boolean): MiQ;

    /**
     * @function setWatermark
     * @description Sets the watermark text of the quote.
     * @param {string} watermark - The watermark text to be set.
     * @throws {TypeError} Throws an error if watermark is not a string.
     * @returns {MiQ} Returns the instance of MiQ for chaining.
     */
    setWatermark(watermark: string): MiQ;

    /**
     * @function generate
     * @description Generates the quote by sending a request to the external API.
     * @param {boolean} [returnRawImage=false] - Whether to return raw image instead of the URL.
     * @throws {Error} Throws an error if text is not set or if an API request fails.
     * @returns {Promise<string|Buffer>} Returns the URL of the generated quote or the raw data.
     */
    generate(returnRawImage?: boolean): Promise<string | Buffer>;

    /**
     * @function generateBeta
     * @description Generates the quote by sending a request to the external API.
     * @throws {Error} Throws an error if text is not set or if an API request fails.
     * @returns {Promise<Buffer>} Returns the raw data.
     */
    generateBeta(): Promise<Buffer>

    /**
     * @function getFormat
     * @description Returns the current format settings of the quote.
     * @returns {Object} Returns the current format settings.
     */
    getFormat(): Format;
  }

  export { MiQ, Format };
}
