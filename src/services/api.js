import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getTopCoins = async () => {
  const response = await axios.get(
    `${BASE_URL}/coins/markets,`
    {
      params: {
        
      }
    }
  )
}