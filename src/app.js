const SelectView = require('./views/select_view.js')
const Munros = require('./models/munros.js')
const MunroListView = require('./views/munro_list_view.js')

document.addEventListener('DOMContentLoaded', () => {

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
