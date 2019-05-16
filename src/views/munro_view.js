MunroView = function (container, munro) {
    this.munrosContainer = container
    this.munro = munro
}

MunroView.prototype.render = function () {
  const munroContainer = document.createElement('div')
  munroContainer.classList.add('munro')

  const name = this.createMunroName()
  munroContainer.appendChild(name)

  const meaning = this.createMunroMeaning()
  munroContainer.appendChild(meaning)

  const height = this.createMunroHeight()
  munroContainer.appendChild(height)



this.munrosContainer.appendChild(munroContainer)

};

MunroView.prototype.createMunroName = function () {
  const name = document.createElement('h3')
  name.classList.add('munro-name')
  name.textContent = this.munro.name
  return name
};

MunroView.prototype.createMunroMeaning = function () {
  const meaning = document.createElement('p')
  meaning.classList.add('munro-meaning')
  meaning.textContent = this.munro.meaning
  return meaning
};

MunroView.prototype.createMunroHeight = function () {
  const height = document.createElement('p')
  height.classList.add('munro-height')
  height.textContent = `Height (m):${this.munro.height}`
  return height
};




module.exports = MunroView;
