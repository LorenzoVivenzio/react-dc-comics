export default function AppHeader() {

    const arrayNav = [
        "Characters",
        "comics",
        "Moves",
        "Tv",
        "Games",
        "Collectibles",
        "Videos",
        "Fans",
        "News",
        "Shop"
    ]
    return (

        < header className=" cont align-center d-flex justify-content-beetwen" >
            <div className="logo-img">
                <img src="/img/dc-logo.png" alt="" />
            </div>
            <div className="header-menu">
                <ul className="d-flex">
                    {arrayNav.map((curArrayNav =>
                        <li>{curArrayNav} </li>
                    ))}
                </ul>
            </div>

        </header >)
}
