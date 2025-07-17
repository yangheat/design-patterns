// Product: 구체적인 제품을 생성하는 함수 */
function createWindowsStyleButton() {
  return {
    paint: () => console.log('Render a button in Windows Style')
  }
}

function createWindowsStyleCheckBox() {
  return {
    paint: () => console.log('Render a checkbox in Windows Style')
  }
}

function createMacStyleButton() {
  return {
    paint: () => console.log('Render a button in macOS Style')
  }
}

function createMacStyleCheckBox() {
  return {
    paint: () => console.log('Render a checkbox in macOS Style')
  }
}

// Factory - 관련 제품 생성 함수를 묶는 팩토리 함수
function createWindowsStyleFactory() {
  return {
    createButton: createWindowsStyleButton,
    createCheckbox: createWindowsStyleCheckBox
  }
}

function createMacStyleFactory() {
  return {
    createButton: createMacStyleButton,
    createCheckbox: createMacStyleCheckBox
  }
}

function createApplication(factory) {
  const button = factory.createButton()
  const checkbox = factory.createCheckbox()

  function paint() {
    button.paint()
    checkbox.paint()
  }

  return { paint }
}

// Client - 팩토리를 사용하여 작업을 수행
createApplication(createWindowsStyleFactory()).paint()
createApplication(createMacStyleFactory()).paint()
