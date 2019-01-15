import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';
import CartItem from './components/CartItems';
import AddItem from './components/AddItem';
import Total from './components/Total'

const products =  [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
]
class App extends Component {
  state = {
  cartItemsList: [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]
  }

  addItemToState = (quantity, name)=> {
    let productToAdd = products.find(product => product.name === name)
    let newItem = {}
    let duplicate = this.state.cartItemsList.find(product => product.product.name === name)
    if (duplicate){
      duplicate.quantity = duplicate.quantity + parseInt(quantity)
      this.setState({cartItemsList: [...this.state.cartItemsList] })

    }
    else {
      newItem = {
      id: this.state.cartItemsList.length + 1,
      name: name,
      product: productToAdd,
      quantity: quantity
    }
    this.setState({cartItemsList: [...this.state.cartItemsList, newItem] })
  }
  }

  render() {

    return (
      <div className="App">
      <CartHeader />
      <CartItems cartItemsList={this.state.cartItemsList}/>
      <Total cartItemsList={this.state.cartItemsList}/>
      <AddItem products={products}
      addItemToState={this.addItemToState}/>
      <CartFooter copyright={2019}/>
      </div>
    );
  }
}

export default App;
