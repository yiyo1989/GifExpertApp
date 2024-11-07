import { useState } from "react";
import { AddCategory } from "./AddCategory";

const apiKey='UkdomiVzNarj4C6wsCT2cnKcfJ61e1e1';



export const GifExpertApp =() =>
{

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const handleAddCategory=()=>{        
        setCategories(['nuevo1',...categories]);
    }

    return (        
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory/>
        <button onClick={handleAddCategory}>Agregar</button>

        <ol>
            {
            categories.map( category =>
            {
                return (
                <li key={category}>
                {category}
                </li>
                )

            })
        }
               
            
        </ol>
    </>
    )

}
