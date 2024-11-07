import { useState } from "react";




export const AddCategory = () => {


    const [inputValue, setInputValue] = useState();

    const handleInputChange= ({data})=>{
        
        setInputValue(data);
    }

    const handleOnSumit =() =>
    {
        event.preventDefault();

    }

    return (
        <form onSubmit={handleOnSumit}>
    <input type="text" placeholder="Buscar gifs" value={inputValue} 
    onChange={handleInputChange}/>
    </form>
  )
}
