import React from 'react';
import './css/header-form.css';
import RecipeBody from './RecipeBody';

function HeaderForm(){
    var toRender = <h2>Type a Dish Name to search for its ingredients</h2>
    function getRecipe(e){
        e.preventDefault();
        console.log(document.getElementById('text').value);
        toRender = <RecipeBody />
        console.log(toRender);
    }
    return(
        <div>
            <div className="header-container">
                <h1 className="heading">Recipe Finder</h1>
                <form className="input-form">
                    <input type="text" placeholder="Enter the name of the dish" id="text" />
                    <input type="submit" value="Get Ingredients" onClick= {getRecipe} />
                </form>
            </div>
            <div id='dataBody'>{toRender}</div>
        </div>
    )
}
export default HeaderForm;