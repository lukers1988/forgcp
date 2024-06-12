import { useState } from 'react'

function App() {
  const [name, setName] = useState<string | undefined>()

  return (
    <>
      <input onChange={((e: any) => setName(e.target.value))} /><br/>

      {name}
    </>
  )
}

export default App
