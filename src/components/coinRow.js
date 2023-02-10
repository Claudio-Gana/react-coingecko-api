import React from 'react'


const CoinRow = ({coin,index}) => {
    console.log(coin,index)
  return (
    <tr>
        <td> {index}</td>
        <td>
            <img src={coin.image} style={{width: '6%'}} className='img-fluid  me-4'/>
            <span>{coin.name}</span>
            <span className='ms-3 text-muted text-uppercase'>{coin.symbol}</span>
            </td>
        <td>US {coin.current_price}</td>
        
        <td className={coin.price_change_percentage_24h < 0 ? 'text-danger': 'text-success'}>

            % {coin.price_change_percentage_24h}
            
        </td>
        <td>{coin.total_volume}</td>
    
    </tr>
  )
}

export default CoinRow
