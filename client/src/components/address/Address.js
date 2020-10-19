import React from "react";
import './Address.scss'

class Address extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      country: '',
      district: '',
      city: '',
      street: '',
      building: '',
      flat: '',
      room: ''
    }
  }

  componentDidMount() {
    window.M.updateTextFields()
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  proceedOrder = () => {
    this.props.setAddress(this.state)
  }

  render() {
    return (
      <div className="address-edit">
        <h2>Please, fill in the shipping address fields</h2>
        <div className="row">
          <div className="country-field input-field">
            <input
              placeholder="Country"
              id="country"
              type="text"
              className="validate"
              name="country"
              onChange={this.handleFieldChange}
            />
            <label htmlFor="country">Country</label>
          </div>
          <div className="district-field input-field">
            <input
              placeholder="District"
              id="district"
              type="text"
              className="validate"
              name="district"
              onChange={this.handleFieldChange}
            />
            <label htmlFor="district">District</label>
          </div>
        </div>
        <div className="row">
          <div className="city-field input-field">
            <input
              placeholder="City"
              id="city"
              type="text"
              className="validate"
              onChange={this.handleFieldChange}
              name="city" />
            <label htmlFor="city">City</label>
          </div>
        </div>
        <div className="row">
          <div className="street-field input-field">
            <input
              placeholder="Street"
              id="street"
              type="text"
              className="validate"
              onChange={this.handleFieldChange}
              name="street" />
            <label htmlFor="street">Street</label>
          </div>
        </div>
        <div className="row">
          <div className="building-field input-field">
            <input
              placeholder="Building"
              id="building"
              type="text"
              className="validate"
              onChange={this.handleFieldChange}
              name="building" />
            <label htmlFor="building">Building</label>
          </div>
          <div className="flat-field input-field">
            <input
              placeholder="Flat"
              id="flat"
              type="text"
              className="validate"
              onChange={this.handleFieldChange}
              name="flat" />
            <label htmlFor="flat">flat</label>
          </div>
          <div className="room-field input-field">
            <input
              placeholder="Room"
              id="room"
              type="text"
              className="validate"
              onChange={this.handleFieldChange}
              name="room" />
            <label htmlFor="room">Room</label>
          </div>
          <div className="spacer" />
        </div>
        <button
          className="waves-effect waves-light purple darken-4 order-btn btn"
          onClick={this.proceedOrder}
        >make order ({this.props.total}$)</button>
      </div>
    )
  }
}

export default Address
