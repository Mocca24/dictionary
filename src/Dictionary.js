import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    let [word, setWord] = useState("");

    function handleResponse(response){
        console.log(response.data[0]);
    }

    function search(event){
        event.preventDefault();

        let key = "8a84a250d94e12ocbbetef4209917359";

        let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleWordChange (event){
        setWord(event.target.value);
    }


    return (
    <div className="Dictionary">
        <form onSbmit={search}>
        <input type="search" onChange={handleWordChange}/>
        </form>
    </div>
    );
}