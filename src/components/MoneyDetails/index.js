import './index.css'

const MoneyDetails = ({balanceAmount, incomeAmount, expensesAmount}) => (
  <div className="details-container">
    <div className="card balance">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        className="icon"
      />
      <div>
        <p>Your Balance</p>
        <p data-testid="balanceAmount">Rs {balanceAmount}</p>
      </div>
    </div>

    <div className="card income">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
        className="icon"
      />
      <div>
        <p>Your Income</p>
        <p data-testid="incomeAmount">Rs {incomeAmount}</p>
      </div>
    </div>

    <div className="card expenses">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
        className="icon"
      />
      <div>
        <p>Your Expenses</p>
        <p data-testid="expensesAmount">Rs {expensesAmount}</p>
      </div>
    </div>
  </div>
)

export default MoneyDetails
