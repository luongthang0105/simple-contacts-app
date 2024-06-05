import data from "../../data/data.json";
import userImg from "../assets/user.png";
import pfp1 from "../assets/profile_picture (1).jpg"
export default function Content() {
    return (
        <div className="content">
            <div className="content--wrapper">
                <div className="content--contacts">
                {
                    data.map((user) => (
                        <div className="content--contacts--card" key={user.id}>
                            <img className="content--contacts--card--img" src={pfp1}></img>
                            <span className="content--contacts--card--name">
                                {user.name}
                            </span>
                            <span className="content--contacts--card--email">
                                {user.email}
                            </span>
                            <span className="content--contacts--card--website">
                                {user.website}
                            </span>
                            <span className="content--contacts--card--phone">
                                {user.phone}
                            </span>
                        </div>
                    ))
                } 
                </div>
            </div>
        </div>
    )
}