import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {


    //console.log(props);
    const [inputValue, setInputValue ] = useState('One Punch');

    const OnInputChange = (event)=>{
        setInputValue(event.target.value);
    }

    const OnSubmit = (event)=>{
        event.preventDefault();
        console.log(inputValue);
        if(inputValue.trim().length <= 1){
            return;
        }
        //onAddCategory(categories => [ ...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }


  return (
    <form onSubmit={(event) => OnSubmit(event)}>

      <input 
      type="text" 
      laceholder='Buscar Gifs' 
      value={inputValue}
      onChange={(event) => OnInputChange(event)}
      ></input>
    </form>
  )
}

