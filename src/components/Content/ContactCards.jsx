import pfp1 from "../../assets/profile_picture (1).jpg"
import linkedinImg from "../../assets/icons/linkedin.png"
import twitterImg from "../../assets/icons/twitter.png"
import data from "../../../data/data.json";
import PropTypes from 'prop-types';

// const profilePictures = require.context('../')

export default function ContactCards(props) {
    const inputText = props.inputText
    const filteredUsers = data.filter((user) => {
        const userIdentifier = (user.name + '|' + user.email + '|' + user.website + '|' + user.phone).toLowerCase()
        return  userIdentifier.includes(inputText)
    })
    return (
        filteredUsers.map((user) => (
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
            </div>      
        ))
    )
}

ContactCards.propTypes = {
    inputText: PropTypes.string
}
