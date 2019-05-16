const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')


const Munros = function (url) {
    this.url = url
    this.munros = []
}

Munros.prototype.getData = function () {
  const request = new RequestHelper(this.url)
  request.get()
  .then( (data ) => {
    this.munros = data
    console.log(this.munros);
    PubSub.publish('Munros:munros-data-ready', this.munros)
  })
};

module.exports = Munros
