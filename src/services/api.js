import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getTopCoins = async () => {
  const response = await axios.get(
    `${BASE_URL}/coins/markets`,
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
      }
    }
  )

  return response.data;
};

export const getCoinHistory = async (coinId) => {
  const response = await axios.get(
    `{BASE_URL}/coins/${coinId}/market_chart`,
    {
      params: {
        vs_currency: "usd",
        days: 1
      }
    }
  )
  console.log(response.data);
  return response.data.prices;
}