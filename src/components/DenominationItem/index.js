// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updatebalance} = props
  const {value} = denominationDetails
  const onChangeBalance = () => {
    updatebalance(value)
  }

  return (
    <li className="list-items">
      <button type="button" className="balance-but" onClick={onChangeBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
