import React, { Component } from 'react';

class FinancialAnalysis extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="table">
            <div className="table-header">
              <div className="header__item">
                <p id="name" className="filter__link">
                  Financial Analysis
                </p>
              </div>
              <div className="header__item">
                <p id="wins" className="filter__link filter__link--number">
                  Values
                </p>
              </div>
            </div>
            <div className="table-content">
              <div className="table-row">
                <div className="table-data">Recommended System size kWp</div>
                <div className="data" id="sys-size"></div>
              </div>
              <div className="table-row">
                <div className="table-data">Production Degradation</div>
                <div className="data" id="prod-degrade">
                  0.30%
                </div>
              </div>
              <div className="table-row">
                <div className="table-data">Consumption Increase per year</div>
                <div className="data" id="consumption-increase">
                  5%
                </div>
              </div>
              <div className="table-row">
                <div className="table-data">Import Tariff</div>
                <div className="data" id="import-tariff">
                  3.1
                </div>
              </div>
              <div className="table-row">
                <div className="table-data">Export Tariff</div>
                <div className="data" id="export-tariff">
                  0.9
                </div>
              </div>
              <div className="table-row">
                <div className="table-data">Tariff Increase per year</div>
                <div className="data" id="tariff-increase">
                  3%
                </div>
              </div>
              <div className="table-row">
                <div className="table-data">System Cost Without Battery</div>
                <div className="data" id="sys-cost-wo-battery"></div>
              </div>
              <div className="table-row">
                <div className="table-data">System Cost With Battery</div>
                <div className="data" id="sys-cost-w-battery"></div>
              </div>
              <div className="table-row">
                <div className="table-data">Number of Panels</div>
                <div className="data" id="panels-count"></div>
              </div>
              <div className="table-row">
                <div className="table-data">Square meters</div>
                <div className="data" id="panels-area"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FinancialAnalysis;
