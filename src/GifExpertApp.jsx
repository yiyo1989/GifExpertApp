import { useState } from "react";
import { AddCategory } from "./AddCategory";
import GifGrid from "./GifGrid";



export const GifExpertApp =() =>
{

    const [categories, setCategories] = useState([]);

    const onAddCategory=(newValue)=>{        
        //setCategories(['nuevo1',...categories]);
        if(categories.includes(newValue)) return;
        setCategories((c)=> [newValue,...c] )
    }

    return (        
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory onAddCategory={onAddCategory}/>       
              
           { 
            categories.map( val =>
            (                 
                <GifGrid key={val} category={val} />

            ))
            
            }
               
                   
    </>
    )

}
