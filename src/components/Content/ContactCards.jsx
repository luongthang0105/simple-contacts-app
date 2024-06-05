import pfp1 from "../../assets/profile_picture (1).jpg"
import linkedinImg from "../../assets/linkedin.png"
import twitterImg from "../../assets/twitter.png"
import data from "../../../data/data.json";


export default function ContactCards() {
    return (
        data.map((user) => (
            <div className="content--contacts--card" key={user.id}>
                <img className="content--contacts--card--img" src={pfp1}></img>
                <span className="content--contacts--card--name">{user.name}</span>
                <span className="content--contacts--card--email">{user.email}</span>
                <span className="content--contacts--card--website">{user.website}</span>
                <span className="content--contacts--card--phone">{user.phone}</span>
                <div className="content--contacts--card--socials">
                    <img className="contacts--card--socials--media" src={linkedinImg}></img>
                    <img className="contacts--card--socials--media" src={twitterImg}></img>
                </div>
                <span className=""></span>
            </div>      
        ))
    )
}