import icons from "../../assets"
import data from "../../../data/data.json";
import PropTypes from 'prop-types';
// const profilePictures = require.context('../')

export default function ContactCards(props) {
    const inputText = props.inputText
    const filteredUsers = data.filter((user) => {
        const userIdentifier = (user.name + '|' + user.email + '|' + user.website + '|' + user.phone).toLowerCase()
        return userIdentifier.includes(inputText)
    })
    
    let idToPfp = {}
    filteredUsers.forEach((user) => {
        idToPfp[user.id] = `src/assets/pfp/pfp(${user.id}).png`
    })

    return (
        filteredUsers.map((user) => (
            <div className="content--contacts--card" key={user.id}>
                <div className="contacts--card--img-wrapper">
                    <img className="content--contacts--card--img" src={require(idToPfp[user.id])}></img>
                </div>
                <div className="content--contacts--card--info">
                    <span className="content--contacts--card--name">{user.name}</span>
                    <span className="content--contacts--card--email">{user.email}</span>
                    <span className="content--contacts--card--website">{user.website}</span>
                    <span className="content--contacts--card--phone">{user.phone}</span>
                    <div className="content--contacts--card--socials">
                        <img className="contacts--card--socials--media" src={icons.linkedinImg}></img>
                        <img className="contacts--card--socials--media" src={icons.twitterImg}></img>
                    </div>
                </div>
                
            </div>      
        ))
    )
}

ContactCards.propTypes = {
    inputText: PropTypes.string
}
