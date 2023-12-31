import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary(){
    let [word, setWord] = useState("");
    let [results, setResults] = useState (null);
    

    function handleResponse(response){
        setResults(response.data);
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

    <h1>Dictionary</h1>

        <section>
        <form onSubmit={search}>
        <input type="search" 
        placeholder="What are you looking for?"
        onChange={handleWordChange}/>
        </form>
</section>
        <Results results = {results}/> 

    </div>
    );
}