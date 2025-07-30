function LegoComponent() {}

function LegoBlock(color, size) {
  return {
    display: () => `[${color} ${size} 블록]`
  }
}

function LegoStructure() {
  const children = []

  return {
    add: (component) => children.push(component),
    display: () => children.map((child) => child.display()).join(' + ')
  }
}
const wheel = LegoBlock('검정색', '원형')
const body = LegoBlock('빨간색', '4x6')
const car = LegoStructure()

car.add(wheel)
car.add(wheel)
car.add(body)

console.log(car.display())
