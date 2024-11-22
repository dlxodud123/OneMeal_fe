import './../css/recipe_form.css';
import Header from '../../common/header/js/header';
import Recipe_category from './recipe_category';
import Recipe_info from './recipe_info';
import Footer from '../../common/footer/js/footer';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Recipe_form = () => {
    const { category } = useParams();
    const recipe = 'recipe';
    let [recipeCategory, setRecipeCategory] = useState(decodeURIComponent(category));

    const location = useLocation(); 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return(
        <div>
            <Header select={recipe}></Header>
            <Recipe_category recipeCategory={recipeCategory} setRecipeCategory={setRecipeCategory}></Recipe_category>
            <Recipe_info recipeCategory={recipeCategory}></Recipe_info>
            <Footer></Footer>
        </div>
    )
}

export default Recipe_form;