function ChooseUs() {
    return (
        <div className="chooseus-container" id="chooseus">
            <h2> why choose us</h2>
            <div className="reasons-table">
                <div className="left-column">
                    <div className="reason">
                        <img src="../images/wallet.png" alt="wallet" className="icon"/>
                        <div>
                            <h3>CONNECT YOUR WALLET</h3>
                            <p>Use Trust Wallet or Metamask to connect to the app.</p>
                        </div>
                    </div>
                    <div className="reason">
                        <img src="../images/select.png" alt="select" className="icon"/>
                        <div>
                            <h3>SELECT YOUR QUANTITY</h3>
                            <p>Upload your crypto and set a title, description and price.</p>
                        </div>
                    </div>
                    <div className="reason">
                        <img src="../images/selling.png" alt="selling" className="icon"/>
                        <div>
                            <h3>CONFIRM TRANSACTION</h3>
                            <p>Earn by selling your crypto on our marketplace.</p>
                        </div>
                    </div>
                </div>
                <div className="center-image">
                    <img src="../images/bitcoin.png" alt="bitcoin" />
                </div>
                <div className="right-column">
                    <div className="reason">
                        <img src="../images/market.png" alt="market" className="icon"/>
                        <div>
                            <h3>RECEIVE YOUR OWN NFTS</h3>
                            <p>Invest all your crypto at one place on one platform.</p>
                        </div>
                    </div>
                    <div className="reason">
                        <img src="../images/mining.png" alt="mining" className="icon"/>                        <div>
                            <h3>TAKE A MARKET TO SELL</h3>
                            <p>Discover, collect the right crypto collections to buy or sell.</p>
                        </div>
                    </div>
                    <div className="reason">
                        <img src="../images/manage.png" alt="manage" className="icon"/>                        <div>
                            <h3>DRIVE YOUR COLLECTION</h3>
                            <p>We make it easy to discover, invest and manage.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChooseUs