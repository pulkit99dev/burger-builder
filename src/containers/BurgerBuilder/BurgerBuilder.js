import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Burger from '../../components/Burger/Burger'

import Aux from '../../hoc/Aux'

const INGREDIENTS_PRICES = {
    salad : 0.5,
    meat : 1,
    bacon : 2,
    cheese : 1
}

class BurgerBuilder extends Component{

    state= {
        ingredients: {
            salad : 0,
            bacon : 0,
            cheese: 0,
            meat:0
        },
        totalPrice : 2
    }

    addIngredientHandler =(type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice : newPrice,
            ingredients : updatedIngredients
        })
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            totalPrice : newPrice,
            ingredients : updatedIngredients
        })
    }

    render(){
        return(
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                     />

                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;

// import React, { Component } from 'react';

// import Aux from '../../hoc/Aux';
// import Burger from '../../components/Burger/Burger';

// class BurgerBuilder extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {...}
//     // }
//     state = {
//         ingredients: {
//             salad: 0,
//             bacon: 0,
//             cheese: 0,
//             meat: 0
//         }
//     }

//     render () {
//         return (
//             <Aux>
//                 <Burger ingredients={this.state.ingredients} />
//                 <div>Build Controls</div>
//             </Aux>
//         );
//     }
// }

// export default BurgerBuilder;