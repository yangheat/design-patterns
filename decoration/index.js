function mug() {
  return {
    getDescription: () => {
      return 'Mug'
    },
    getPrice: () => {
      return 10000
    }
  }
}

function wrappingPaperDecorator(mug) {
  return {
    getDescription: () => {
      return mug.getDescription() + ' with wrapping paper'
    },
    getPrice: () => {
      return mug.getPrice() + 1000
    }
  }
}

function ribbonDecorator(mug) {
  return {
    getDescription: () => {
      return mug.getDescription() + ' with ribbon'
    },
    getPrice: () => {
      return mug.getPrice() + 500
    }
  }
}

const mugCup = mug()
const warpperMug = wrappingPaperDecorator(mugCup)
const ribbonMug = ribbonDecorator(warpperMug)

console.log(mugCup.getDescription())
console.log(mugCup.getPrice())

console.log(warpperMug.getDescription())
console.log(warpperMug.getPrice())

console.log(ribbonMug.getDescription())
console.log(ribbonMug.getPrice())
