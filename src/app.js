const SelectView = require('./views/select_view.js')
const Munros = require('./models/munros.js')
const MunroListView = require('./views/munro_list_view.js')
const MapView = require('./views/map_view.js')

document.addEventListener('DOMContentLoaded', () => {

  const benNevis = [56.79, -5.00]
  const mapdiv = document.querySelector('#map')
  const mapView = new MapView(mapdiv, benNevis, 7)
  mapView.init()
  mapView.bindEvents()

  const selectContainer = document.querySelector('#region-select')
  const selectView = new SelectView(selectContainer)
  selectView.bindEvents()

  const munrosListContainer = document.querySelector('#munros')
  munrosListView = new MunroListView(munrosListContainer)
  munrosListView.bindEvents()

  const munros = new Munros('https://munroapi.herokuapp.com/munros')
  munros.bindEvents()
  munros.getData();

});
