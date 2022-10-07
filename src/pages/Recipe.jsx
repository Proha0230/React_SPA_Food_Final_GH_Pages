import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../Components/Preloader";

function Recipe () {
    const [recipe, setRecipe] = useState({});
    const {id} = useParams();
    const {goBack} = useHistory();

    useEffect (()=> {
        getMealById(id).then((data)=>
        setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>

        <button className="btn btnNav" onClick={goBack}>Назад</button>
        <Link to={"/"} className="btn btnNav">На главную</Link>

        {!recipe.idMeal ? (<Preloader/>) : (
            <div className="recipe">
                <img className="imgrecipe" src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h1 className="textRecipe">{recipe.strMeal}</h1>
                <h6 className="textRecipe">Категория: {recipe.strCategory}</h6>
                {recipe.strArea ? <h6 className="textRecipe">Страна: {recipe.strArea}</h6> : null}
                <p className="textRecipe">{recipe.strInstructions}</p>
                <table className="centered">
                    <thead>
                        <tr>
                            <th style={{fontSize:"25px", fontWeight: "bold" }}>Ингредиенты</th>
                            <th style={{fontSize:"25px", fontWeight: "bold" }}>Сколько нужно</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(recipe).map((key)=> {
                            if(key.includes('Ingredient') && recipe[key]){
                                return (
                                    <tr key={key}>
                                        <td className="textRecipe">{recipe[key]}</td>
                                        <td className="textRecipe">
                                            {recipe[`strMeasure${key.slice(13)}`]}
                                        </td>
                                    </tr>
                                );
                            }

                            return null;
                        })}
                    </tbody>
                </table>

                {recipe.strYoutube ? (
                    <div className="row">
                        <h5 style={{textAlign:"center", fontSize:"30px", fontWeight:"bold"}}>Видео Рецепта</h5>
                    <iframe className="YTVideo" title={id} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}/>  
                    </div> ) : null}
                                       
            </div>
        )}

        </>
    );
}

export {Recipe};