import { useState, useEffect } from "react";
interface Obj {
    id: string,
    current_price: number,
    name: string,
    price_change_percentage_24h: number
    image: string
}

function Home() {
    const [data, setData] = useState<Obj[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en")
                const result: Obj[] = await res.json()
                console.log(result)
                setData(result)
            }catch(error){
                alert(error)
            }
        };
        fetchData();
    }, []);
    
    return (
        <div className="home-container" id="home">
            <h2>track and trade <br />
            crypto currencies
            </h2>
            <div className="coin-container">
                {data.map((item: Obj) => (
                    <span className="coin-display">
                        <img src={item?.image} alt={item.id} key={item?.id} className="coin-image"/>
                        <p>{item?.name} <br />
                            {"$" + item?.current_price}
                        </p>
                        <p style={{color: item?.price_change_percentage_24h >= 0 
                                ? "#44ff00"
                                : "red"}}>
                            {item?.price_change_percentage_24h + "%"}
                        </p>
                    </span>
                )
                )}
            </div>
        </div>
    )
}

export default Home