import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger'

import Aux from '../../hoc/Aux'

class BurgerBuilder extends Component{

    state= {
        ingredients: {
            salad : 1,
            bacon : 2,
            cheese: 2,
            meat:1
        }
    }

    render(){
        return(
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    Build Controls
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