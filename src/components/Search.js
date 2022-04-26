import React , {useState} from "react";

const Search = () => {
    const [term, setTerm] = useState('')


    return (
        <div className="ui form">
            <div className="field">
                <label> enter search term</label>
                <input className="input"
                value = {term}
                onChange = {inputHandler}/>
            </div>
        </div>
    )
}

export default Search;