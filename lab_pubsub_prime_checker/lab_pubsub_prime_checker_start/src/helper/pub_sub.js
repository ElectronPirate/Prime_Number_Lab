const PubSub = {
  publish: (channel, data) => {
    const event = new CustomEvent(channel, {
      detail: data
    })
    document.dispatchEvent(event);
  },
  subscribe:(channel, callback) =>{
    document.addEventListener(channel,callback);
  }

}
module.exports = PubSub;
