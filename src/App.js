import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import TableCoins from './components/TableCoins'



function App() {

  const [coins, setCoins] = useState([])

  const getData = async () =>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    console.log(res.data)
    setCoins(res.data)// res.data es un arreglo con 100 elementos y aqui le digo, que actualice la variable coins con esos 100 datos
  }

  useEffect(()=>{
    getData()
  },[])

  // en TableCoins de abajo, le digo a table coins que voy a pasarle una propiedad que se llama coins y como valor le pasare el coins creado mas arriba
  return (
   <div className='container'>
      <div className='row'>
        <h1>Criptomarket</h1>
        
        <TableCoins coins={coins}/> 
      </div>
   </div>
  );
}

export default App;
