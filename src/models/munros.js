const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')


const Munros = function (url) {
  this.url = url
  this.munros = []
}

Munros.prototype.bindEvents = function () {
    PubSub.subscribe(`SelectView:Change`, (event) => {
      selectedRegion = event.detail;
      const munrosByRegion = this.munros.filter(munro => munro.region === selectedRegion)
      PubSub.publish(`Munros:MunrosByRegion`, munrosByRegion)
    })
};

Munros.prototype.getData = function () {
  const request = new RequestHelper(this.url)
  request.get()
  .then( (data ) => {
    this.munros = data
    // PubSub.publish('Munros:munros-data-ready', this.munros);
    const regions = this.getRegionNames(this.munros)
    PubSub.publish('Munros:unique-regions', regions)
  })

};



Munros.prototype.getRegionNames = function (munros) {
  return munros
  .map(munro => munro.region)
  .filter((region, index, regions) => regions.indexOf(region) === index)

}

module.exports = Munros
