import React , { useState } from "react";
import Header from "./Header";
import Custom from "./custom";

const quotes = ['If you are good at something, dont do it for free',
'To be or not to be that is the question','Whatever does not kill you , makes you stronger','abc','def','ghi'];

export default function App()   {

    const [quote , setQuote] = useState(quotes[0]); // usestate accepts a default value of 0
    function randomQuote(){
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
    return <div>

        <Header />
        <div className= "content">
            <p>Quote : {quote}</p>
            <button onClick={randomQuote}><h2>Generate Quote</h2></button>
            
            <Custom name ="arghyadeep" surname = "dhar" />
        </div>
    </div>
}
