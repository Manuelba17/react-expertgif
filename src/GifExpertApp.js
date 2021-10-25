import React, {useState}from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export default function GifExpertApp({ defaultCategories = ['Cats'] }) {

    

    const [category, setCategories] = useState(defaultCategories)

 
    return (
        <>
        <ul>
<h2> Gif Expert App</h2>
</ul>   
        <AddCategory setCategories ={setCategories}/>
         <hr />

            
         <ol>
             {
             category.map(categories => (
             <GifGrid categories={categories} key={categories}/>
            ))
             
             }
         </ol>
        </>
    )
}
