import React, {Component} from 'react';
import Axios from 'axios';
import './css/recipe-body.css';

class RecipeBody extends Component{
    constructor(props){
        super(props);
        this.state = {
            meal: [],
            liked: false
        };
    }
    
    componentDidMount(){
        console.log("https://www.themealdb.com/api/json/v1/1/search.php?s="+this.props.foodItem);
        if (this.props.foodItem==='')
            alert('Enter a Dish!!')
        else{
            Axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+this.props.foodItem)
                .then(resolve => {
                console.log(resolve.data.meals);
                this.setState({
                    meal: resolve.data.meals,
                    liked: false
                });
            })
        }
        
    }
    
    componentDidUpdate(prevProps){
        
        if (this.props.foodItem !== prevProps.foodItem) {
            if (this.props.foodItem==='')
                    alert('Enter a Dish!!')
            else{
                Axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+this.props.foodItem)
                    .then(resolve => {
                    console.log(resolve.data.meals);
                    this.setState({
                        meal: resolve.data.meals,
                        liked: false
                    });
                })
            }
        }
        
        
        
    }
    
    likeMe = e =>{
        console.log(1);
        this.setState({
            liked: true
        });
    }
    unlikeMe = e =>{
        console.log(2);
        this.setState({
            liked: false
        });
    }
    
    render(){
        const {meal, liked} = this.state;
        if (meal!==null &&meal.length>0){
            var list = [];
            let i=1;
            
            while (meal[0]['strIngredient'+i] !== ''){
                list.push(<li key={i}>{meal[0]['strIngredient'+i]+"----"+meal[0]['strMeasure'+i]}</li>);
                i++;
            }
        }
         const like = (this.state.liked)?(<span className="like red" onClick = {this.unlikeMe} >♥</ span >
                ) : ( <span className="like" onClick= {this.likeMe} >♥</span> );
        
        const id = (meal!==null && meal.length>0) ? (
            <div className="recipeContainer">
                <div className="title">
                    <h1>{meal[0].strMeal} <span>{like}</span></h1>
                </div>
                <div className="recipeData">
                    <img src = {meal[0].strMealThumb} alt={"Your meal for "+meal[0].strMeal} />
                    <div class="textData">
                        <p><em>Category of Meal:</em> {meal[0].strCategory} </p>
                        <p><em>Area of the Meal:</em> {meal[0].strArea} </p>
                        <h3>Ingredients:</h3>
                        <ul className="ingredients">{list}</ul>
                        <h3>Recipes</h3>
                        <div className="recipe">{meal[0].strInstructions}</div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="noData">No Data has been recieved</div>
        );
        return <div>{id}</div>
    }
}

export default RecipeBody;

