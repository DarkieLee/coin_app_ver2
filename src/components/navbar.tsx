function NavBar() {
    return (
        <nav className="nav-bar">
            <a href="#" className="logo">
                CoinMarket
            </a>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#market">Market</a>
                </li>
                <li>
                    <a href="#chooseus">Choose Us</a>
                </li>
                <li>
                    <a href="#joinus">Join Us</a>
                </li>
            </ul>
            <div className="submit-buttons">
                <button type="submit" className="login-btn">Login</button>
                <button type="submit" className="sign-up-btn">Sign Up</button>
            </div>
        </nav>
    )
}

export default NavBar