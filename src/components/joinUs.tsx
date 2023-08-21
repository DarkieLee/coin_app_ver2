function JoinUs() {
    return (
        <div className="joinus-container" id="joinus">
            <h2>join us today</h2>
            <p className="second-line">on social media</p>
            <p className="third-line">connect with people sharing the same interest as yours</p>
            <div className="join-us">
                <div className="icon-rows">
                    <a href="https://discord.com/" target="_blank">
                        <img src="/images/discord.png" alt="discord" />
                    </a>
                    <a href="https://facebook.com/" target="_blank">
                        <img src="/images/facebook.png" alt="facebook" />
                    </a>
                </div>
                <div className="communication-img">
                    <img src="../images/communication.png" alt="communication" />
                </div>
                <div className="icon-rows">
                    <a href="https://instagram.com/" target="_blank">
                        <img src="/images/instagram.png" alt="instagram" />
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <img src="/images/x-twitter.png" alt="x-twitter" />
                    </a>
                </div>
            </div>
            <div className="priv-n-terms">
                <a href="#">Privacy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>
    )
}

export default JoinUs