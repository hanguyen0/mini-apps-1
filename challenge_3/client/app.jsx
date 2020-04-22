import React from 'react';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { f1: false }
        this.handleClick1 = this.handleClick1.bind(this);
        // this.handleClick2 = this.handleClick2.bind(this);
        // this.handleClick3 = this.handleClick3.bind(this);
    }

    handleClick1(e) {
        console.log(e);
        this.setState({ f1: !this.state.f1 });
    }
    // handleClick2(e) {
    //     console.log(e);
    //     this.setState({ f2: !this.state.f2 });
    // }
    // handleClick3(e) {
    //     console.log(e);
    //     this.setState({ f3: !this.state.f3 });
    // }

    render() {
        const { f1 } = this.state;
        let form;
        let start = 'Checkout';
        if (f1) {
            form = <Form1 />
            start = 'Next';
        }
        // else if (f2) {
        //     form = <Form2 />
        //     start = <button onClick={this.handleClick3}>Next</button>;
        // } else if (f3) {
        //     form = <Form3 />
        //     start = <button>Complete Checkout</button>;
        // }
        return (
            <div>
                <button onClick={this.handleClick1}>{start}</button>;
                {form}
            </div>
        )
    }
}

const Form1 = (props) => (
    <form action="/data" method="POST">
        <label htmlFor="">Name
            <input type="text" name="name" id="" />
        </label>
        <label htmlFor=""> Email
            <input type="text" name="email" id="" />
        </label>
        <label htmlFor=""> Password
        <input type="text" name="password" id="" />
        </label>
    </form>
)

// const Form2 = (props) => (
//     <form action="">
//         <label htmlFor="">Address 1
//             <input type="text" name="address_1" id="" />
//         </label>
//         <label htmlFor="">Address 1
//             <input type="text" name="address_2" id="" />
//         </label>
//         <label htmlFor="">City
//             <input type="text" name="city" id="" />
//         </label>
//         <label htmlFor="">State
//             <input type="text" name="state" id="" />
//         </label>
//         <label htmlFor="">Zipcode
//             <input type="text" name="zipcode" />
//         </label>
//     </form>
// )

// const Form3 = (props) => (
//     <form action="">
//         <label htmlFor=""> Credit Card
//             <input type="text" name="credit card" id="" />
//         </label>
//         <label htmlFor="">Expiration Date
//         <input type="text" name="address_2" id="" />
//         </label>
//         <label htmlFor=""> CVV
//         <input type="text" name="city" id="" />
//         </label>
//         <label htmlFor="">Billing Zipcode
//         <input type="text" name="state" id="" />
//         </label>

//     </form>
// )
ReactDOM.render(
    <Checkout />,
    document.getElementById('app')
);

