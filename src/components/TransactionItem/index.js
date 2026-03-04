import './index.css'

const TransactionItem = ({transactionDetails, deleteTransaction}) => {
  const {id, title, amount, type} = transactionDetails
  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="title">{title}</p>
      <p className="amount">Rs {amount}</p>
      <p className="type">{type}</p>
      <button
        type="button"
        data-testid="delete"
        onClick={onDelete}
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
