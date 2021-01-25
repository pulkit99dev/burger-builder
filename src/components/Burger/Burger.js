import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.css'

const Burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {return [...Array(props.ingredients[igKey])]
                                                                 .map((_, index) => {
                                                                     <BurgerIngredient key={igKey + index} type={igKey} />
                                                                 })
                                                                })

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            <BurgerIngredient type='bacon'></BurgerIngredient>
            <BurgerIngredient type='cheese'></BurgerIngredient>
            <BurgerIngredient type='meat'></BurgerIngredient>
            <BurgerIngredient type='salad'></BurgerIngredient>
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    )
}

export default Burger;