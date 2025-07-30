// Component: 모든 레고 부품의 인터페이스
interface LegoComponent {
  display(): string
}

// Composite 전용 인터페이스
interface LegoComposite extends LegoComponent {
  add(component: LegoComponent): void
}

// Leaf: 기본 블록
class LegoBlock implements LegoComponent {
  constructor(private color: string, private size: string) { }

  display() {
    return `[${this.color} ${this.size} 블록]`
  }
}

// Composite: 조합된 구조물
class LegoStructure implements LegoComposite {
  private children: LegoComponent[] = []

  add(component: LegoComponent) {
    this.children.push(component)
  }

  display() {
    return this.children.map(child => child.display()).join(' + ')
  }
}

const wheel = new LegoBlock('검정색', '원형')
const body = new LegoBlock('빨간색', '4x6')
const car = new LegoStructure()

car.add(wheel)
car.add(wheel)
car.add(body)

console.log(car.display())