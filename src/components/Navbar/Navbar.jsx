import icons from "../../assets"

export default function Navbar() {
    return (
        <div className="nav">
            <span className="nav--title">find your contacts</span>
            <img className="nav--logo" src={icons.phoneImg}></img>
            <div className="nav--user">
                <img className="nav--user--pfp" src={icons.userImg}></img>
                <span className="nav--user--name">Luong N.</span>
                <img className="nav--user--arrow" src={icons.downArrowImg}></img>
            </div>
        </div>
    )
}