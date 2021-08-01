import axios from 'axios';
import React, {useState} from 'react'

function Short() {
    const [link, setLink] = useState("");
    const [short, setShort]= useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        getLink();
    }

    const getLink = async ()=> {
        await axios
        .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.error(error);
        })

    }
    return (
        <section id="form" className="container short">
            <form onSubmit={(e)=> handleSubmit(e)} >
                <input 
                type="text" 
                value={link} 
                onChange={(e)=> setLink(e.target.value)}
                placeholder="shorten a link here..."/>
                <a onClick={(e)=> handleSubmit(e)} className="lg-rect-btn" href="/">Shorten it!</a>
            </form>
        </section>
    )
}

export default Short
