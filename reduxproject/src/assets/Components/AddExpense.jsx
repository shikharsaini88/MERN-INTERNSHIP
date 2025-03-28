import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    // Fetch expenses on component mount
    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:3002/Expense');
                setExpenses(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching expenses:', error);
                setLoading(false);
            }
        };
        fetchExpenses();
    }, []);

    // Add a new expense
    const handleAddExpense = async (e) => {
        e.preventDefault();
        if (!title || !amount) return;

        const newExpense = { title, amount: Number(amount) };

        try {
            const response = await axios.post('http://localhost:3002/Expense', newExpense);
            setExpenses([...expenses, response.data]);
            setTitle('');
            setAmount('');
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    // Delete an expense
    const handleDeleteExpense = async (id) => {
        try {
            await axios.delete(`http://localhost:3002/Expense/${id}`);
            setExpenses(expenses.filter((expense) => expense.id !== id));
        } catch (error) {
            console.error('Error deleting expense:', error);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center mb-6">Expense Tracker</h1>

            {/* Add Expense Form */}
            <form onSubmit={handleAddExpense} className="flex flex-col md:flex-row items-center gap-4 mb-6 bg-white p-4 shadow-md rounded-md">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full md:w-auto"
                >
                    Add Expense
                </button>
            </form>

            {/* Expense List */}
            <div className="bg-white p-4 shadow-md rounded-md">
                <h2 className="text-xl font-semibold mb-4">Expenses</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : expenses.length === 0 ? (
                    <p>No expenses found.</p>
                ) : (
                    <ul className="space-y-4">
                        {expenses.map((expense) => (
                            <li
                                key={expense.id}
                                className="flex justify-between items-center p-4 border border-gray-200 rounded-md"
                            >
                                <div>
                                    <p className="font-semibold">{expense.title}</p>
                                    <p className="text-gray-600">${expense.amount}</p>
                                </div>
                                <button
                                    onClick={() => handleDeleteExpense(expense._id)}
                                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ExpenseTracker;