import React from 'react'

export const GifExpertApp = () => {
  
  const apiKey = 'voLM4cYjrzEwKgZpY0oZh1ShoNjeuBeY';

  const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

  return (
    <>
    {/* titulo */}
      <h1>GifExpertApp</h1>

    {/* Input */}

    {/* lista */}

      
    </>
  )
}

