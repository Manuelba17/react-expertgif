import React, {useState}from 'react'
import PropTypes from 'prop-types'

export default function AddCategory({setCategories}) {
    
        const [inputValue, setinputValue] = useState('')    

        const handleInputChange = (e) => {
            setinputValue(e.target.value )

             }
        const handleSubmit = (e) => {
            e.preventDefault();

            if(inputValue.trim().length > 0) {
                setCategories(cate => [inputValue, ...cate])
                setinputValue('');
            }
            
            
        }

        
    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue} 
                onChange={handleInputChange}
                placeholder="Busca tu categoria favorita"
                required 
                           />
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}


