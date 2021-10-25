import React from 'react'
;

export default function GifGridItem({titulo, url}) {
    
    return (
        <div className="card animate__animated animate__fadeIn animate__slow	 ">
            <p>{titulo}</p>
            <img src={url} alt={titulo} /> 
            
        </div>
    )
}
