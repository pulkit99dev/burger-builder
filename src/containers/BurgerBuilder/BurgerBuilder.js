import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Burger from '../../components/Burger/Burger'

import Aux from '../../hoc/Aux';

import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
        totalPrice : 2,
        purchasable : false,
        purchasing : false
    }

    updatePurchaseState(ingredients){
        
        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        return ingredients[igKey]
                    })
                    .reduce((sum, el)=>{
                        return sum + el;
                    },0);
        this.setState({purchasable : sum > 0});
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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
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
        });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () =>{
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler =() =>{
        alert('Continue Onwards')
    }


    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseCancelled ={this.purchaseCancelHandler}
                    purchaseContinued ={this.purchaseContinueHandler}
                    price = {this.state.totalPrice}
                    />
                </Modal>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price = {this.state.totalPrice}
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