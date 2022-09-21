import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencyDetails()
  }

  getCryptoCurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)

    const updatedCryptoCurrencyInfo = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    console.log(updatedCryptoCurrencyInfo)
    this.setState({
      cryptoCurrencyData: updatedCryptoCurrencyInfo,
      isLoading: false,
    })
  }

  render() {
    const {cryptoCurrencyData, isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoCurrencyData={cryptoCurrencyData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
