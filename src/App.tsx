import { ChangeEvent, useState } from 'react'

function App() {
  const [name, setName] = useState<string>('Podaj swoje imie')

  return (
    <>
      <input onChange={((e: ChangeEvent<HTMLInputElement>) => setName(e.target.value))} /><br/>

      {name}
    </>
  )
}

export default App
