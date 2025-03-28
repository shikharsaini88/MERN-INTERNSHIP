import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ExpenseList() {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [remark, setRemark] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3002/Expense2')
            .then(response => {
                setTransactions(response.data);
                setFilteredTransactions(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const addTransaction = () => {
        const newTransaction = { remark, amount: parseFloat(amount), type };
        axios.post('http://localhost:3002/Expense2', newTransaction)
            .then(response => {
                const updatedTransactions = [...transactions, response.data];
                setTransactions(updatedTransactions);
                setFilteredTransactions(updatedTransactions);
                setRemark('');
                setAmount('');
                setType('');
                setShowForm(false);
            })
            .catch(error => console.error(error));
    };

    const deleteTransaction = (id) => {
      axios.delete(`http://localhost:3002/Expense2/${id}`)
        .then(() => {
          const updatedTransactions = transactions.filter(t => t._id !== id);
          setTransactions(updatedTransactions);
          setFilteredTransactions(updatedTransactions);
        })
        .catch(error => console.error(error));
    };

    const filterTransactions = (filterType) => {
        if (filterType === 'all') {
            setFilteredTransactions(transactions);
        } else {
            setFilteredTransactions(transactions.filter(t => t.type === filterType));
        }
    };

    const totalIncome = filteredTransactions
      .filter(t => t.type === 'income')
      .reduce((acc, t) => acc + (isNaN(parseFloat(t.amount)) ? 0 : parseFloat(t.amount)), 0);
  
    const totalExpense = filteredTransactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => acc + (isNaN(parseFloat(t.amount)) ? 0 : parseFloat(t.amount)), 0);

    const balance = totalIncome - totalExpense;

    return (
      <div className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Money</h1>
        <h2 className="text-xl font-semibold text-gray-600">Dashboard</h2>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Income</h3>
          <p className="text-3xl font-bold">₹{totalIncome.toFixed(2)}</p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Expense</h3>
          <p className="text-3xl font-bold">₹{totalExpense.toFixed(2)}</p>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Balance</h3>
          <p className="text-3xl font-bold">₹{balance.toFixed(2)}</p>
        </div>
        </section>
        <section className="mb-8 bg-black text-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-400">Money History</h3>
          <div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow mr-2"
            onClick={() => setFilteredTransactions(transactions.filter(t => t.type === 'income'))}
          >
            Show Income
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow mr-2"
            onClick={() => setFilteredTransactions(transactions.filter(t => t.type === 'expense'))}
          >
            Show Expense
          </button>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow"
            onClick={() => setFilteredTransactions(transactions)}
          >
            Show All
          </button>
          </div>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow mb-4"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Close Form' : 'Add Transaction'}
        </button>
        {showForm && (
          <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
            type="text"
            name='remark'
            placeholder="Remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            className="border p-3 rounded-lg"
            />
            <input
            type="number"
            placeholder="Amount"
            name='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-3 rounded-lg"
            />
            <select
            name='type'
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-3 rounded-lg"
            >
            <option value="" className='text-black'>Select Type</option>
            <option value="income"className='text-black'>Income</option>
            <option value="expense"className='text-black'>Expense</option>
            </select>
          </div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow mt-4"
            onClick={addTransaction}
          >
            Save
          </button>
          </div>
        )}
        </section>
        <section className='bg-black text-white p-6 rounded-lg shadow'>
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left font-semibold text-gray-600">Remark</th>
            <th className="py-3 px-4 text-left font-semibold text-gray-600">Amount</th>
            <th className="py-3 px-4 text-left font-semibold text-gray-600">Type</th>
            <th className="py-3 px-4 text-left font-semibold text-gray-600">Action</th>
          </tr>
          </thead>
          <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction._id} className="border-t">
            <td className="py-3 px-4 text-black">{transaction.remark || 'N/A'}</td>
            <td className="py-3 px-4 text-black">₹{transaction.amount ? parseFloat(transaction.amount).toFixed(2) : '0.00'}</td>
            <td className="py-3 px-4 capitalize text-black">{transaction.type || 'N/A'}</td>
            <td className="py-3 px-4">
              <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow"
              onClick={() => deleteTransaction(transaction._id)}
              >
              Delete
              </button>
            </td>
            </tr>
          ))}
          </tbody>
        </table>
        </section>
      </div>
      </div>
    );
}