import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput, 10),
      type: optionId,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(each => each.id !== id),
    }))
  }

  getIncome = () => {
    const {transactionList} = this.state
    return transactionList
      .filter(each => each.type === 'INCOME')
      .reduce((acc, curr) => acc + curr.amount, 0)
  }

  getExpenses = () => {
    const {transactionList} = this.state
    return transactionList
      .filter(each => each.type === 'EXPENSES')
      .reduce((acc, curr) => acc + curr.amount, 0)
  }

  getBalance = () => this.getIncome() - this.getExpenses()

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state

    return (
      <div className="app-container">
        <div className="header">
          <h1 className="name">Hi, Richard</h1>
          <p>
            Welcome back to Your <span>Money Manager</span>
          </p>
        </div>

        {/* moneydetails component */}
        <MoneyDetails
          balanceAmount={this.getBalance()}
          incomeAmount={this.getIncome()}
          expensesAmount={this.getExpenses()}
        />

        {/* transaction-and-history container */}
        <div className="transaction-and-history">
          {/* form container  */}
          <div className="form-container">
            <form className="form" onSubmit={this.addTransaction}>
              <h1>Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                className="input"
                placeholder="TITLE"
                value={titleInput}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                id="amount"
                className="input"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type">TYPE</label>

              <select
                id="type"
                value={optionId}
                className="select"
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit">Add</button>
            </form>
          </div>

          {/* history container  */}
          <div className="history-container">
            <h1>History</h1>
            <ul>
              <li className="history-table-header">
                <p className="title">Title</p>
                <p className="amount">Amount</p>
                <p className="type">Type</p>
              </li>
              {/* TransactionItem component */}

              {transactionList.map(each => (
                <TransactionItem
                  key={each.id}
                  transactionDetails={each}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
