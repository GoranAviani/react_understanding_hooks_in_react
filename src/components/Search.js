import React , {useState, useEffect} from "react";

const Search = () => {
    const [term, setTerm] = useState('')

    useEffect(()=>{console.log({term})}, [term])

    const inputHandler = (e) => {
        setTerm(e.target.value)
    }

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