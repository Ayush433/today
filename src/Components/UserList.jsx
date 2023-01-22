import React, { useState } from "react";

const UserList = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
  ]);
  const [transactions, setTransactions] = useState([
    { id: 1, customerId: 1, amount: 100 },
    { id: 2, customerId: 2, amount: 50 },
    { id: 3, customerId: 3, amount: 75 },
  ]);

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            Customer:{" "}
            {customers.find((c) => c.id === transaction.customerId).name}{" "}
            Amount: {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
