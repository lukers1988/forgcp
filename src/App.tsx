import { useState } from 'react'

function App() {
  const [name, setName] = useState<string>('Podaj swoje imie')

  return (
    <>
      <input onChange={((e: HTMLInputElement) => setName(e.value))} /><br/>

      {name}
    </>
  )
}

export default App
