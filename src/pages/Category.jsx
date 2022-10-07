import {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import {getFilterCategory} from '../api';
import {Preloader} from '../Components/Preloader';
import {MealList} from '../Components/MealList';

function Category () {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const {goBack} = useHistory();

    useEffect(()=> {
        getFilterCategory(name).then((data)=>
        setMeals(data.meals));
    }, [name]);

    return (
    <>
    <button className="btn btnNav" onClick={goBack}>Назад</button>
    {!meals.length ? <Preloader/> : <MealList meals={meals} />}
    </>
    )
}

export {Category};