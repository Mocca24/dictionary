import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
    let [word, setWord] = useState("");
    let [results, setResults] = useState (null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();

        let apiKey = "8a84a250d94e12ocbbetef4209917359";

        let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleWordChange (event){
        setWord(event.target.value);
    }


    return (
    <div className="Dictionary">
        <form onSubmit={search}>
        <input type="search" onChange={handleWordChange}/>
        </form>

        <Results results = {results}/> 

    </div>
    );
}