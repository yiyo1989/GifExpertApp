import { useState } from "react";
import { AddCategory } from "./AddCategory";

const apiKey='UkdomiVzNarj4C6wsCT2cnKcfJ61e1e1';



export const GifExpertApp =() =>
{

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory=(newValue)=>{        
        //setCategories(['nuevo1',...categories]);
        setCategories((c)=> [newValue,...c] )
    }

    return (        
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory onAddCategory={onAddCategory}/>
        
        {/* <AddCategory setCategory={setCategories}/>
         */}

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
