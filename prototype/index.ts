class Car {
  private make: string
  private model: string

  constructor(make: string, model: string) {
    this.make = make
    this.model = model
  }

  clone(): Car {
    return new Car(this.make, this.model)
  }

  start() {
    return `${this.make} ${this.model} start.`
  }

  stop() {
    return `${this.make} ${this.model} stop.`
  }
}

const sonata = new Car('Hyundai', 'Sonata')
const avante = sonata.clone()
avante.model = 'Avante'
console.log(avante.start())
console.log(avante.stop())
console.log(sonata.start())
console.log(sonata.stop())