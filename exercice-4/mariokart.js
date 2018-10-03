
function Pilote(nom) {
  this.nom = nom

  var localState = state
  this.origin = ''

  this.receiveData = function () {

  }

  this.needUpdate = function (infos) {
    // speak ?
  }

  this.getState = function () {
    return localState
  }

  this.speak = function () {
    let msg = ''
    switch (this.getState()) {
      case 'ready':
        msg = `Here we go!'`
        break;
      case 'happy':
        msg = `Let\'s have some fun`
        break;
      case 'sad':
        msg = `Outch!!! Damn ${this.origin}`
        break;
      default: break;
    }
  }

}

function Vehicule() {

}