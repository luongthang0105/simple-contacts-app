import icons from '../../assets'
import PropTypes from 'prop-types'

export default function SearchBar(props) {
    let onChange = (e) => {
        props.inputHandler(e.target.value)
    }

    return (
        <div className="content--search">
            <img className="content--search--icon" src={icons.searchImg}></img>
            <input 
                    className="content--search--input" 
                    placeholder="who do you wanna meet today?"
                    onChange={onChange}
            />
        </div>
    )
}

SearchBar.propTypes = {
    inputHandler: PropTypes.func
}