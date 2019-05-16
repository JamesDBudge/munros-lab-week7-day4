const Munros = require('./models/munros.js')
const MunroListView = require('./views/munro_list_view.js')

document.addEventListener('DOMContentLoaded', () => {


  const munrosListContainer = document.querySelector('#munros')
  munrosListView = new MunroListView(munrosListContainer)
  munrosListView.bindEvents()

  const munros = new Munros('https://munroapi.herokuapp.com/munros')
  munros.getData();

});
