// Concreate Prototype - 메서드를 구현하는 클래스
function Car(make, model) {
  this.make = make
  this.model = model
}

// Prototype - 복제에 필요한 clone() 메서드를 선언하는 인터페이스
Car.prototype.clone = function () {
  const newCar = Object.create(Object.getPrototypeOf(this))
  Object.assign(newCar, this)

  return newCar
}

Car.prototype.start = function () {
  return `${this.make} ${this.model} start.`
}

Car.prototype.stop = function () {
  return `${this.make} ${this.model} stop.`
}

// Client - 새로운 객체를 요청
const sonata = new Car('Hyundai', 'Sonata')
const avante = sonata.clone()
avante.model = 'Avante'
console.log(avante.start())
console.log(avante.stop())
console.log(sonata.start())
console.log(sonata.stop())
