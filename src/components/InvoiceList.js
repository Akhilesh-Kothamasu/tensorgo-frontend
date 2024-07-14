import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/invoices');
        setInvoices(response.data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div>
      <h2>Invoice List</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice._id}>
            <span className="invoice-id">ID: {invoice._id}</span>
            <span className="amount">Amount: ${invoice.amount}</span>
            <span className="due-date">Due Date: {new Date(invoice.dueDate).toLocaleDateString()}</span>
            <span className="recipient">Recipient: {invoice.recipient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
