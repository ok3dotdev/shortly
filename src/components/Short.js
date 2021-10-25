import axios from 'axios';
import ShortenLink from './ShortenLink'
import React, {useState, useEffect} from 'react'

function Short() {
    const [link, setLink] = useState("");
    const [linkList, setLinkList] = useState([]);

    useEffect(() => {
        sessionStorage.getItem("linkList") &&
          setLinkList(JSON.parse(sessionStorage.getItem("linkList")));
      }, []);
    
      useEffect(() => {
        sessionStorage.setItem("linkList", JSON.stringify(linkList));
      }, [linkList]);

    const handleSubmit =(e)=>{
        e.preventDefault();
        getLink();
    }

    const getLink = async ()=> {
        await axios
        .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then(({data})=>{

            return setLinkList((oldList) => [...oldList, data.result]);
            
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
            {linkList.map((link, index) => (
                <ShortenLink
                key={index}
                longLink={link.original_link}
                shortLink={link.short_link}
                fullShortLink={link.full_short_link}
                />
             ))}     
    </section>
    )
}

export default Short
