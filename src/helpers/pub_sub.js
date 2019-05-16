const PubSub = {
  publish: function (channel, payload) {
    console.log(`channel: ${channel} payload: ${payload}`);

    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    console.log(`channel: ${channel}`);
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
