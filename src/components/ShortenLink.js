import React from 'react'

function ShortenLink({longLink, shortLink, fullShortLink}) {
    return (
       <section className="shorten-link">
           <div className="long-link">{longLink}</div>
           <div className="short-link"><span>{shortLink}</span>
           <button
           onClick={(e) => {
            e.target.innerHTML = "Copied!";
            navigator.clipboard.writeText(fullShortLink);
            e.target.className = "btn-clicked";
            setTimeout(() => {
              e.target.innerHTML = "Copied";
              e.target.className = "btn-clicked";
            }, 2000);
          }}
          className="copy-button"
           
           >
               COPY
           </button>

           </div>
         

       </section>
    )
}

export default ShortenLink
