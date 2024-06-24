import React, { Component } from 'react';

class SolarCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Initialize state variables here if needed
    };
  }

  // Function to calculate total production for a given direction
  yearlySum(houseDirection) {
    const productionData = {
      south: [17.494, 34.523, 70.247, 96.248, 132.192, 137.706, 133.241, 115.048, 70.268, 46.308, 18.794, 13.286],
      southEast: [16, 32, 65, 92, 128, 135, 131, 110, 68, 43, 17, 12],
      southWest: [15, 31, 67, 94, 130, 136, 130, 112, 67, 43, 17, 12],
      eastWest: [10, 23, 56, 84, 120, 128, 121, 102, 59, 34, 13, 8],
    };
    return productionData[houseDirection].reduce((a, b) => a + b, 0);
  }

  // Function to calculate monthly consumption
  calculateMonthlyConsumption(totalEnergyConsumption) {
    const monthlyConsumption = {};
    const monthlyConsumptionPercentage = [0.0951, 0.0891, 0.0899, 0.0800, 0.0781, 0.0753, 0.0733, 0.0774, 0.0760, 0.0829, 0.0878, 0.0951];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    for (let i = 0; i < months.length; i++) {
      const month = months[i];
      const consumption = totalEnergyConsumption * parseFloat(monthlyConsumptionPercentage[i]);
      monthlyConsumption[month] = Number(consumption.toFixed(6));
    }
    return monthlyConsumption;
  }

  // Function to calculate total cost
  calculateTotalCost(PVSize, panelQty, panelPrice, AdditionalCost) {
    const batterySizeInputValue = parseFloat(this.state.batterySizeInputValue);
    const batteryPrice = batterySizeInputValue > 0 ? this.getBatteryPrice(batterySizeInputValue) : this.getBatteryPrice(15);

    let mountingAndInstallationPrice = 0;
    const mountingCategoryPrice = [[8, 17500], [16, 21000], [20, 24000], [26, 26000], [30, 28000], [37, 29000], [50, 39000], [66, 60000]];

    for (let i = 0; i < mountingCategoryPrice.length; i++) {
      if ((panelQty <= mountingCategoryPrice[i][0]) && panelQty <= mountingCategoryPrice[mountingCategoryPrice.length - 1][0]) {
        mountingAndInstallationPrice = mountingCategoryPrice[i][1];
        break;
      }
    }

    let InverterPrice = 0;
    let hybrideInverterPrice = 0;
    const inverterList = [[2.40, 6595.875], [6.00, 12218.375], [7.20, 13676], [9.60, 16172], [12.00, 18187], [15.60, 28390], [18.00, 30405], [21.60, 34359], [24.00, 36374], [30.00, 48592], [33.60, 52546], [36.00, 54561], [42.00, 66779], [45.60, 70733], [48.00, 72748], [54.00, 84966], [57.60, 88920], [60.00, 90935]];
    const hybrideInverter = [[2.40, 6595.875], [6.00, 12218.375], [7.20, 13676], [9.60, 16172], [12.00, 18187], [14.40, 18676.125], [18.00, 21108.75], [24.00, 22766.25], [36.00, 0], [48.00, 0], [60.00, 27007.5]];

    for (let i = 0; i < inverterList.length; i++) {
      if ((PVSize <= inverterList[i][0]) && PVSize <= inverterList[inverterList.length - 1][0]) {
        InverterPrice = inverterList[i][1];
        break;
      }
    }

    for (let i = 0; i < hybrideInverter.length; i++) {
      if ((PVSize <= hybrideInverter[i][0]) && PVSize <= hybrideInverter[hybrideInverter.length - 1][0]) {
        hybrideInverterPrice = hybrideInverter[i][1];
        break;
      }
    }

    let SystemCostWithBattery = panelPrice + InverterPrice + batteryPrice + AdditionalCost + mountingAndInstallationPrice;
    let SystemCostWithoutBattery = panelPrice + hybrideInverterPrice + AdditionalCost + mountingAndInstallationPrice;

    if (batteryPrice > 0) {
      var inverter = inverterList;
    } else {
      inverter = hybrideInverter;
    }

    return {
      SystemCostWithBattery: Math.round(SystemCostWithBattery / 1000) * 1000,
      SystemCostWithoutBattery: parseInt(SystemCostWithoutBattery / 1000) * 1000,
      inverter,
    };
  }

  // Function to get battery price
  getBatteryPrice(batterySize) {
    const batteryPriceList = [31300, 53000, 76000];
    return batterySize > 0 ? batteryPriceList[Math.floor(batterySize / 5) - 1] : batteryPriceList[2];
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Your calculation logic here
  }

  render() {
    return (
      <div>
       
      </div>
    );
  }
}

export default SolarCalculator;
