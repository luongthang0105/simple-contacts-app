import { useState } from "react";
import ContactCards from "./ContactCards";
import SearchBar from "./SearchBar";
export default function Content() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (input) => {
        //convert input text to lower case
        var lowerCase = input.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="content">
            <div className="content--wrapper">
                <SearchBar inputHandler={inputHandler}/>
                {/* 
                    I made a mistake where I initially didn't put the ContactCards in another component and
                    wrapped it by this div :( Now making this cleaner would take me so much time.
                */}
                <div className="content--contacts">
                    <ContactCards inputText={inputText}/>
                </div>
            </div>
        </div>
    )
}