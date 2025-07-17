// Abstract Product - 객체들의 공통 인터페이스
interface Button {
  paint(): string
}

interface Checkbox {
  paint(): string
}

// Concrete Product - 인터페이스를 실제로 구현한 객체
class WindowsStyleButton implements Button {
  paint(): string {
    return 'Render a button in Windows Style'
  }
}

class WindowsStyleCheckbox implements Checkbox {
  paint(): string {
    return 'Render a checkbox in Windows Style'
  }
}

class MacStyleButton implements Button {
  paint(): string {
    return 'Render a button in Mac Style'
  }
}

class MacStyleCheckbox implements Checkbox {
  paint(): string {
    return 'Render a checkbox in Mac Style'
  }
}

// Abstract Factory - 추상 제품들을 생성하는 메서드들의 정의하는 인터페이스
abstract class GUIFactory {
  abstract createButton(): Button
  abstract createCheckbox(): Checkbox
}

// Concreate Factory - 추상 팩토리를 구현한 객체
class WindowsStyleFactory extends GUIFactory {
  public createButton(): Button {
    return new WindowsStyleButton()
  }
  public createCheckbox(): Checkbox {
    return new WindowsStyleCheckbox()
  }
}

class MacStyleFactory extends GUIFactory {
  public createButton(): Button {
    return new MacStyleButton()
  }
  public createCheckbox(): Checkbox {
    return new MacStyleCheckbox()
  }
}

// Client - 객체를 생성하고 작업을 수행
function client(factory: GUIFactory) {
  const button = factory.createButton()
  const checkbox = factory.createCheckbox()

  console.log(button.paint())
  console.log(checkbox.paint())
}

client(new WindowsStyleFactory())
client(new MacStyleFactory())