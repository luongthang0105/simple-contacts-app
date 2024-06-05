import phoneImg from "../../assets/icons/phone.png";
import userImg from "../../assets/icons/user.png";
import downArrowImg from "../../assets/icons/down-arrow.png";

export default function Navbar() {
    return (
        <div className="nav">
            <span className="nav--title">find your contacts</span>
            <img className="nav--logo" src={phoneImg}></img>
            <div className="nav--user">
                <img className="nav--user--pfp" src={userImg}></img>
                <span className="nav--user--name">Luong N.</span>
                <img className="nav--user--arrow" src={downArrowImg}></img>
            </div>
        </div>
    )
}