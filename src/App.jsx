import { useEffect, useState } from 'react'
import { getTopCoins, getCoinHistory } from './services/api'
import CryptoCard from './components/CryptoCard'
import PriceChart from './components/PriceChart'

function App() {
  const [coins, setCoins] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopCoins();
      setCoins(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const fetchChart = async () => {
      const rawData = await getCoinHistory("bitcoin");

      const formatted = rawData.map(item => ({
        time: new Date(item[0]).getHours() + ":00",
        price: item[1]
      }))

      setChartData(formatted);
    }

    fetchChart();
  }, [])
  
  return (
    <>
      <h1>Crypto Board</h1>

      {coins.map((coin) => (
        <CryptoCard key={coin.id} coin={coin}/>
      ))}
      <PriceChart data={chartData}/>
    </>
  )
}

export default App
