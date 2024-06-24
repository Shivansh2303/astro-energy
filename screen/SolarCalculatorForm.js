import React, { Component } from 'react';

class SolarCalculatorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roofType: 'tile',
      yearlyConsumption: '',
      heatSource: 'gas',
      heatingArea: '',
      ownCar: 'no',
      carConsumption: '',
      houseDirection: 'south',
      batterySize: '0',
      roofArea: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form data:', this.state);
    // Redirect or perform calculations based on the form data
  };

  render() {
    return (
      <div>
        <div>
          <h2>Roof Top Energy Calculation</h2>
        </div>
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <div>
                  <div>
                    <h3>Site Information</h3>
                  </div>
                  <div>
                    <label htmlFor="roof-type-select">Roof Type</label>
                    <select
                      name="roofType"
                      id="roof-type-select"
                      value={this.state.roofType}
                      onChange={this.handleInputChange}
                    >
                      <option value="tile">Tile</option>
                      <option value="slate-tile">Slate Tile</option>
                      <option value="concrete">Concrete</option>
                      <option value="corrugated">Corrugated</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="yearly-consumption">Yearly kWh Consumption</label>
                    <input
                      type="text"
                      id="yearly-consumption-input"
                      name="yearlyConsumption"
                      value={this.state.yearlyConsumption}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="heat-source-select">Heat Source</label>
                    <select
                      name="heatSource"
                      id="heat-source-select"
                      value={this.state.heatSource}
                      onChange={this.handleInputChange}
                    >
                      <option value="gas">Gas</option>
                      <option value="electric">Electric</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="heating-area-input">Heating Area(in sq. meters)</label>
                    <input
                      type="text"
                      id="heating-area-input"
                      name="heatingArea"
                      value={this.state.heatingArea}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="own-car-checkbox">Do you own an Electric Car?</label>
                    <select
                      name="ownCar"
                      id="own-car-checkbox"
                      value={this.state.ownCar}
                      onChange={this.handleInputChange}
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="car-consumption-input">How Many km per year</label>
                    <input
                      type="text"
                      id="car-consumption-input"
                      name="carConsumption"
                      value={this.state.carConsumption}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="house-direction-select">Your Roof Direction?</label>
                    <select
                      name="houseDirection"
                      id="house-direction-select"
                      value={this.state.houseDirection}
                      onChange={this.handleInputChange}
                    >
                      <option value="south">South</option>
                      <option value="southeast">South East</option>
                      <option value="southwest">South West</option>
                      <option value="eastwest">East West</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>Battery</h3>
                  </div>
                  <div>
                    <label htmlFor="battery-size">What size battery do you want? (kWh)</label>
                    <select
                      name="batterySize"
                      id="battery-size"
                      value={this.state.batterySize}
                      onChange={this.handleInputChange}
                    >
                      <option value="0">0</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>Roof Information</h3>
                  </div>
                  <div>
                    <label htmlFor="roof-area">Roof Area in Sq. M</label>
                    <input
                      type="text"
                      name="roofArea"
                      id="roof-area"
                      value={this.state.roofArea}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" id="submitButton">
                  Calculate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SolarCalculatorForm;
