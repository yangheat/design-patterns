class Mug {
  getDescription() {
    return 'Mug'
  }
  getPrice() {
    return 10000
  }
}

class WrappingPaperDecorator {
  constructor(private mug: Mug) { }
  getDescription() {
    return this.mug.getDescription() + ' with wrapping paper'
  }
  getPrice() {
    return this.mug.getPrice() + 1000
  }
}

const newMug = new Mug()
const warpperMugCup = new WrappingPaperDecorator(newMug)

console.log(warpperMug.getDescription())
console.log(warpperMug.getPrice())
console.log(newMug.getDescription())
console.log(newMug.getPrice())