import React, {
  Component
} from 'react'

class AddItem extends Component {
  state = {
    quantity: 0
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItemToState(this.state.quantity,
       this.state.name)
  }
  render() {
      return ( <
        form onSubmit = {
          this.onSubmit
        } >
        <
        div className = "form-group" >
        <
        label htmlFor = "quantity" > Quantity < /label> <
        input type = "number"
        className = "form-control"
        id = "quantity"
        value = {
          this.state.quantity
        }
        onChange = {
          (e) => this.setState({
            quantity: e.target.value
          })
        }
        />

        <
        label htmlFor = "product" > Product < /label> <
        select id = "product"
        className = "form-control"
        value = {
          this.state.productId
        }
        onChange = {
          (e) => this.setState({
            name: e.target.value
          })
        } >
        <
        option > Choose... < /option> {
          this.props.products.map(product => < option key = {
              product.id
            } > {
              product.name
            } < /option>)} <
            /select>

            <
            button type = "submit"
            className = "btn btn-primary" > Submit < /button> <
            /div> <
            /form>
          )
        }
      }

      export default AddItem
