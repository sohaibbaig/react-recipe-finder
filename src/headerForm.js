import React from 'react';
import './header-form.css';

function HeaderForm(){
    return(
        <div className="header-container">
            <h1 className="heading">Recipe Finder</h1>
            <form className="input-form">
                <input type="text" placeholder="Enter the name of the dish" />
                <input type="submit" value="Get Ingredients" onClick="getRecipe()" />
            </form>
        </div>
    )
}
export default HeaderForm;