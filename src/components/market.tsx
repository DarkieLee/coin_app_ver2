import { useState, useEffect } from "react";

interface Obj {
    id: string,
    current_price: number,
    name: string,
    price_change_percentage_24h: number
    image: string
    market_cap: number
}

function Market() {
    function handleOnClick() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const [data, setData] = useState<Obj[]>([])

    useEffect(() => {
        async function fetchData() {
            try{
                const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=80&page=1&sparkline=false&locale=en")
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
        <div className="market-container" id="market">
            <button onClick={handleOnClick} className="roll-back-top">
                <img src="../images/up-arrow.png" alt="" />
            </button>
            <h2>Market Update</h2>
            <div className="coin-table">
                <div className="table-first-row">
                    <div className="column-name">
                        <p>Coin</p>
                    </div>
                    <div className="column-name">
                        <p>Price</p>
                    </div>
                    <div className="column-name">
                        <p>24-hour Change</p>
                    </div>
                    <div className="column-name">
                        <p>Market Cap</p>
                    </div>
                </div>
                <div className="coin-rows">
                        {data.map((item: Obj) => (
                            <div className="coin-info">
                                <div>
                                    <img src={item?.image} alt={item.id} key={item?.id} className="coin-image-table"/>
                                    <p>{item?.name}</p>
                                </div>
                                <div>
                                    <p>
                                        {"$" + item?.current_price.toFixed(2)}
                                    </p>
                                </div>
                                <div>
                                    <p style={{color: item?.price_change_percentage_24h >= 0 
                                        ? "#44ff00"
                                        : "red"}}>
                                    {item?.price_change_percentage_24h + "%"}
                                    </p>
                                </div> 
                                <div>
                                    <p>
                                        {"$" + item?.market_cap.toLocaleString("en-US")}
                                    </p>
                                </div>   
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}


export default Market