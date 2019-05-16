const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (selectElement) {
  this.element = selectElement
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:unique-regions', (event) => {
    this.populate(event.detail)
  })
  this.element.addEventListener('change', (evt) => {
    const selectedRegion = evt.target.value;
    PubSub.publish('SelectView:Change', selectedRegion);
  })
};

SelectView.prototype.populate = function (munros) {
  munros.forEach((region) => {
    const regionOption = this.createOption(region)
    this.element.appendChild(regionOption)
  })
};

SelectView.prototype.createOption = function (region) {
  const option = document.createElement('option')
  option.textContent = region
  option.value = region
  return option
};




module.exports = SelectView
