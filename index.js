const axios = require('axios');
const displus = require('displus');

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

  setAvatar(avatar) {
    if (avatar !== null && typeof avatar !== 'string') {
      throw new TypeError('Avatar must be string or null');
    }
    this.format.avatar = avatar;
    return this;
  }

  setUsername(username) {
    if (typeof username !== 'string') {
      throw new TypeError('Username must be string');
    }
    this.format.username = username;
    return this;
  }

  setDisplayname(display_name) {
    if (typeof display_name !== 'string') {
      throw new TypeError('Display name must be string');
    }
    this.format.display_name = display_name;
    return this;
  }

  setColor(color = false) {
    if (typeof color !== 'boolean') {
      throw new TypeError('Color must be boolean');
    }
    this.format.color = color;
    return this;
  }

  setWatermark(watermark) {
    if (typeof watermark !== 'string') {
      throw new TypeError('Watermark must be string');
    }
    this.format.watermark = watermark;
    return this;
  }

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

  getFormat() {
    return this.format;
  }
}

module.exports = { MiQ };
