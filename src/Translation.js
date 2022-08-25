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

 
 


//function translate() {
  // let apiUrl = `https://translation.googleapis.com/language/translate/v2`

//axios.get().then(handleResponse)

//}


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
