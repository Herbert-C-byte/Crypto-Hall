function CryptoCard({coin}) {
  return(
    <div onClick={() => onSelect(coin.id)} style={{
      cursor: "pointer",
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "10px"
    }}>
      <h3>{coin.name}</h3>
      <p>Price: ${coin.price}</p>
      <p>Market Cap Rank: #{coin.market_cap_rank}</p>
    </div>
  )
}

export default CryptoCard;