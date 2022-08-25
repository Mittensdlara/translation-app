import React, { useState } from "react";
import axios from "axios"
import "./Translation.css"
import Results from "./Results"

export default function Translation(props) {
 let [text, setText] = useState(props.defaultText);
 let [loaded, setLoaded] = useState(false)
 let [results, setResults] = useState(null);
 
function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
}


 function handleTranslate() {
    
const encodedParams = new URLSearchParams();
encodedParams.append("q", "Hello, world!");
encodedParams.append("target", "es");
encodedParams.append("source", "en");

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '2583a75a4dmshb34f90d0e9e5eeap173ba6jsn7a5f43d6c965',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  data: encodedParams
};

axios.get(options).then(handleResponse)
 }
 
 
 function handleLanguages() {

    const options = {
        method: 'GET',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
        headers: {
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': '2583a75a4dmshb34f90d0e9e5eeap173ba6jsn7a5f43d6c965',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
      };
      
      axios.get(options).then(handleTranslate)
  }


function translate() {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", `${text}`);

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '2583a75a4dmshb34f90d0e9e5eeap173ba6jsn7a5f43d6c965',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  data: encodedParams
};
axios.get(options).then(handleLanguages)

}


 function handleSubmit(event) {
    event.preventDefault();
    translate();
  }

 function handleTextChange(event) {
    setText(event.target.value);
  }

 function load() {
    setLoaded(true);
    translate();
  }


 if (loaded) {
    return (
    <div className="Translation">
      <div className="row m-5">
       <div className="col-6">
         <p className="text-center">
         <div class="form-floating">
             <textarea class="form-control" placeholder="Text" id="floatingTextarea2"></textarea>
            <label for="floatingTextarea2">Your Text</label>
       </div>
         </p>
       </div>
       <div className="col-6">
        <p className="text-center">
        <div class="form-floating">
             <textarea class="form-control" onChange={handleTextChange}  defaultValue={props.defaultText} placeholder="Text" id="floatingTextarea2"></textarea>
            <label for="floatingTextarea2">Translation</label>
       </div>
        </p>
         
        <form className="Form">
            <input type="submit" value="Translate" onSubmit={handleSubmit} />
        </form>
        <Results results={results} />
       </div>
      </div>
    </div>
    );
 } else {
    load();
    return "Loading...";
 }
}
