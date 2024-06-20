const axios = require('axios');
const displus = require('displus');

/**
 * @class MiQ
 * @description The MiQ class is designed to create a quote with customizable properties such as text, avatar, username, display name, color, and watermark. It also provides a method to generate a quote image or data from an external API.
 */

class MiQ {
  constructor() {
    this.format = {
      text: '',
      avatar: null,
      username: '',
      display_name: '',
      color: false,
      watermark: '',
    };
  }

  /**
   * @function setText
   * @description Sets the text of the quote. Optionally formats the text to remove markdown.
   * @param {string} text - The text to be set.
   * @param {boolean} [formatText=false] - Whether to format the text by removing markdown.
   * @throws {TypeError} Throws an error if text is not a string or formatText is not a boolean.
   * @returns {MiQ} Returns the instance of MiQ for chaining.
   */

  setText(text, formatText = false) {
    if (typeof text !== 'string') {
      throw new TypeError('Text must be string');
    }
    if (typeof formatText !== 'boolean') {
      throw new TypeError('formatText must be boolean');
    }
    this.format.text = formatText ? displus.removeMarkdown(text) : text;
    return this;
  }

  /**
   * @function setAvatar
   * @description Sets the avatar URL of the quote.
   * @param {string|null} avatar - The avatar URL to be set.
   * @throws {TypeError} Throws an error if avatar is not a string or null.
   * @returns {MiQ} Returns the instance of MiQ for chaining.
   */

  setAvatar(avatar) {
    if (avatar !== null && typeof avatar !== 'string') {
      throw new TypeError('Avatar must be string or null');
    }
    this.format.avatar = avatar;
    return this;
  }

  /**
   * @function setUsername
   * @description Sets the username of the quote.
   * @param {string} username - The username to be set.
   * @throws {TypeError} Throws an error if username is not a string.
   * @returns {MiQ} Returns the instance of MiQ for chaining.
   */

  setUsername(username) {
    if (typeof username !== 'string') {
      throw new TypeError('Username must be string');
    }
    this.format.username = username;
    return this;
  }

  /**
   * @function setDisplayname
   * @description Sets the display name of the quote.
   * @param {string} display_name - The display name to be set.
   * @throws {TypeError} Throws an error if display_name is not a string.
   * @ret
   */

  setDisplayname(display_name) {
    if (typeof display_name !== 'string') {
      throw new TypeError('Display name must be string');
    }
    this.format.display_name = display_name;
    return this;
  }

  /**
   * @function setColor
   * @description Sets whether the quote should have a colored background.
   * @param {boolean} [color=false] - Whether to use a colored background.
   * @throws {TypeError} Throws an error if color is not a boolean.
   * @returns {MiQ} Returns the instance of MiQ for chaining.
   */

  setColor(color = false) {
    if (typeof color !== 'boolean') {
      throw new TypeError('Color must be boolean');
    }
    this.format.color = color;
    return this;
  }

  /**
   * @function setWatermark
   * @description Sets the watermark text of the quote.
   * @param {string} watermark - The watermark text to be set.
   * @throws {TypeError} Throws an error if watermark is not a string.
   * @returns {MiQ} Returns the instance of MiQ for chaining.
   */

  setWatermark(watermark) {
    if (typeof watermark !== 'string') {
      throw new TypeError('Watermark must be string');
    }
    this.format.watermark = watermark;
    return this;
  }

  /**
   * @function generate
   * @description Generates the quote by sending a request to the external API.
   * @param {boolean} [returnRawData=false] - Whether to return raw data (array buffer) instead of the URL.
   * @throws {Error} Throws an error if text is not set or if an API request fails.
   * @returns {Promise<string|ArrayBuffer>} Returns the URL of the generated quote or the raw data.
   */

  async generate(returnRawData = false) {
    if (!this.format.text) {
      throw new Error('Text is required');
    }
    if (typeof returnRawData !== 'boolean') {
      throw new TypeError('returnRawData must be boolean');
    }

    try {
      const response = await axios.post('https://api.voids.top/fakequote', this.format, {
        responseType: returnRawData ? 'arraybuffer' : 'json'
      });
      return returnRawData ? response.data : response.data.url;
    } catch (error) {
      if (error.response) {
        throw new Error(`Failed to generate quote: ${error.message}, Status: ${error.response.status}, Data: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        throw new Error(`Failed to generate quote: No response received, ${error.message}`);
      } else {
        throw new Error(`Failed to generate quote: ${error.message}`);
      }
    }
  }

  /**
   * @function getFormat
   * @description Returns the current format settings of the quote.
   * @returns {Object} Returns the current format settings.
   */
  
  getFormat() {
    return this.format;
  }
}

module.exports = { MiQ };
