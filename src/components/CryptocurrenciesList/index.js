import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoCurrencyData} = this.props
    console.log(cryptoCurrencyData)
    return (
      <div className="crypto-currencies-container">
        <h1 className="heading"> Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-currency-image"
        />
        <div className="crypto-currency-item-container">
          <div className="currency-type-container">
            <p className="coin-type-heading">Coin Type</p>
            <div className="usd-euro-container">
              <p className="coin-value-heading">USD</p>
              <p className="coin-value-heading">EURO</p>
            </div>
          </div>
          <ul className="crypto-item-list-container">
            {cryptoCurrencyData.map(eachCurrency => (
              <CryptocurrencyItem
                currencyDetails={eachCurrency}
                key={eachCurrency.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
