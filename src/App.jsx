import Input from "./components/Input"
import React, { useState } from "react"

function App() {
  const url = "https://rickandmortyapi.com/api/character"

  const [data, setData] = useState([])

  React.useEffect(()=>{
    async function getData() {
      const resp = await fetch(url)
      if(!resp.ok) {
        throw new Error("HTTP Error", resp.status)
      }
      const data = await resp.json()
      setData(data)
    }
    getData()
  }, [url])
  const keyword = "o"
  return (
    <div>
      <Input id="search" label="Search" name="search" placeholder="Search your character..."/>
      <div className="flex flex-wrap gap-6 justify-between">
        {
          data.results && data.results.filter(r=>r.name.toLowerCase().includes(keyword.toLowerCase())).map((r, idx) =>{
            return (
              <div key={idx}>
                <img src={r.image} alt={r.name} />
                <h2>{r.name}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}

export default App