import PropTypes from "prop-types";
import { useState } from "react";




export const AddCategory = ({onAddCategory}) => {

  
    const [inputValue, setInputValue] = useState('');

    const handleInputChange= ({target:{value}})=>{
        
        setInputValue(value);
       
    }

    const handleOnSumit =() =>
    {
        event.preventDefault();

        if(inputValue.trim().length <2) return;

        //setCategory((categories) => [inputValue, ...categories]);
        onAddCategory(inputValue);
        setInputValue('');

    }

    return (
        <form onSubmit={handleOnSumit}>
    <input type="text" placeholder="Buscar gifs" value={inputValue} 
    onChange={handleInputChange}/>
    </form>
  )
};

AddCategory.propTypes = {
    onAddCategory: PropTypes.func
}

