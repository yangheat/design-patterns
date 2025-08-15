// 포맷팅 함수 - Flyweight의 내재적 상태
const formaterText = (() => {
  const formatters = {
    uppercase: (text) => text.toUpperCase(),
    lowercase: (text) => text.lowerCase(),
    capitalize: (text) => text.charAt(0).toUpperCase() + text.slice(1)
  }

  return (type, text) => formatters[type]?.(text) || text
})()

// flyweight TextFormatter 컴포넌트
function TextFormatter({ type, children }) {
  return <span>{formaterText(type, children)}</span>
}

function App() {
  return (
    <div>
      <TextFormatter type="uppercase">hello world</TextFormatter>
      <TextFormatter type="capitalize">react flyweight</TextFormatter>
    </div>
  )
}
