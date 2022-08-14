import React, {useRef, useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [wallet, setWallet] = useState(100)
  const plateCount = useRef(0)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setSushi(data.map(s => {return {...s, eaten: false}}))
    })
  }, [])

  let eatSushi = (s) => {
    if (s.price <= wallet) {
      plateCount.current += 1
      let copySushi = [...sushi]
      copySushi[s.id-1].eaten = true
      setSushi([...copySushi])
      setWallet(wallet - s.price)
      
    } else {
      alert("You don't have enough money!")
    }
  }

  return (
    <div className="app">
      <SushiContainer sushi={sushi} eatSushi={eatSushi}/>
      <Table wallet={wallet} plateCount={plateCount}/>
    </div>
  );
}

export default App;
