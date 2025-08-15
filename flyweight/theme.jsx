import { createContext, memo, useContext } from 'react'

const theme = {
  light: {
    background: '#ffffff',
    color: '#000000',
    primay: '#4285f4'
  },
  dark: {
    background: '#121212',
    color: '#ffffff',
    primay: '#8ab4f8'
  }
}

const ThemeContext = createContext(theme.light)

const ThemeButton = memo(({ children }) => {
  const theme = useContext(ThemeContext)

  return (
    <button
      style={{
        backgroundColor: theme.primay,
        color: theme.color,
        padding: '10px 20px',
        border: 'nonde',
        borderRadius: '4px'
      }}
    >
      {children}
    </button>
  )
})

export function App() {
  return (
    <ThemeContext.Provider value={theme.dark}>
      <ThemeButton>Click me</ThemeButton>
      <ThemeButton>Submit</ThemeButton>
    </ThemeContext.Provider>
  )
}
