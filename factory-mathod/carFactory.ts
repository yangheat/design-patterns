// Product (자동차): 자동차의 인터페이스 정의
interface Car {
  name: string
  assemble(): string
  deliver(): string
}

// Creator (자동차 공장): Product 객체를 반환하는 팩토리 메서드의 추상 클래스
abstract class CarFactory {
  public abstract createCar(): Car

  public produceCar(): string {
    const car = this.createCar()
    return `
      ---start---
      ${car.assemble()}
      ${car.deliver()}
      ---end---
    `
  }
}

// Concrete Product (SUV 자동차) - SUV 자동차의 구체적인 객체
class SUV implements Car {
  name: string = 'SUV'
  assemble(): string {
    console.log('>>>> test:', this)
    return `${this.name} 조립`
  }
  deliver(): string {
    return `${this.name} 조립`
  }
}

// Concrete Product (전기 자동차) - 전기 자동차의 구체적인 객체
class ElectricCar implements Car {
  name: 'Electric Car'
  assemble(): string {
    return `${this.name} 조립`
  }
  deliver(): string {
    return `${this.name} 조립`
  }
}

// Concrete Creator (SUV 자동차 공장) - SUV 자동차 공장의 구체적인 팩토리 메서드
class SUVFactory extends CarFactory {
  public createCar(): Car {
    return new SUV()
  }
}

// Concrete Creator (전기 자동차 공장) - 전기 자동차 공장의 구체적인 팩토리 메서드
class ElectricCarFactory extends CarFactory {
  public createCar(): Car {
    return new ElectricCar()
  }
}

function clienApp(factory: CarFactory) {
  console.log(factory.produceCar())
}

clienApp(new SUVFactory())
clienApp(new ElectricCarFactory())