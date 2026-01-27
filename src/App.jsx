import Input from "./components/Input"
import React from "react"

function App() {
  const url = "https://rickandmortyapi.com/api/character"
  React.useEffect(()=>{
    async function getData(url) {
      const resp = await fetch(url)
      if(!resp.ok) {
        throw new Error("HTTP Error", resp.status)
      }
      const data = await resp.json()
      console.log(data)
      // return data
    }
    getData()
  }, [])
  return (
    <div>
      <Input id="search" label="Search" name="search" placeholder="Search your character..."/>
    </div>
  )

}

export default App