import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {
  
  const apiKey = 'voLM4cYjrzEwKgZpY0oZh1ShoNjeuBeY';

  const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

  const [categories, setCategories] = useState(['One Punch']);

  const OnAddCategory = ( newCategory) =>{

    if(categories.includes(newCategory)) return;
    //console.log(newCategory);
    setCategories([ ...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
      onNewCategory={ (event) => OnAddCategory(event)} // Con esto emitimos el evento
      ></AddCategory>

      <button onClick={OnAddCategory}>Agregar</button>


      { categories.map( (category) => 
        <GifGrid key={ category } category={ category }/>
      )}
      
    

    </>
  )
}

