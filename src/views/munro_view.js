MunroView = function (container, munro) {
    this.munrosContainer = container
    this.munro = munro
}

MunroView.prototype.render = function () {

  const munroContainer = document.createElement('div')
  // munroContainer.classList.add('munro')
  // munroContainer.appendChild()



this.munrosContainer.appendChild(munroContainer)

};

module.exports = MunroView;
