import React, { useState } from "react";
import axios from "axios"
import "./Translation.css"
import Results from "./Results"

export default function Translation(props) {
 let [loaded, setLoaded] = useState(false)

 function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  
 function handleTextChange(event) {
    setKeyword(event.target.value);
  }

 function load() {
    setLoaded(true);
    search();
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
             <textarea class="form-control" onChange={handleTextChange} placeholder="Text" id="floatingTextarea2"></textarea>
            <label for="floatingTextarea2">Translation</label>
       </div>
        </p>
         
        <form className="Form">
            <input type="submit" value="Translate" onSubmit={handleSubmit} />
        </form>
        <Results />
       </div>
      </div>
    </div>
    );
 } else {
    load();
    return "Loading...";
 }
}
