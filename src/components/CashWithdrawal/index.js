// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawl extends Component {
  state = {
    balance: 2000,
  }

  updatebalance = value => {
    this.setState(prevstate => ({balance: prevstate.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="cash-withdrawl">
        <div className="inner-contianer">
          <div className="user-container">
            <div className="iniital-contianer">
              <p className="initial">S</p>
            </div>
            <p className="name-heading">Search Williams</p>
          </div>
          <div className="balance-container">
            <p className="message">Your balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachdenomination => (
              <DenominationItem
                denominationDetails={eachdenomination}
                key={eachdenomination.id}
                updatebalance={this.updatebalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawl
