import React from 'react'


const Total = (props) => {
return (
  <div>Total: ${props.cartItemsList.reduce((result, item) => {
    return result + (item.product.priceInCents * item.quantity) / 100
  },0)} </div>
)
}

export default Total
