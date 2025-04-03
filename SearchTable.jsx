import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const SearchTable = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [data] = useState([
    { id: 1, name: 'Amanda Valler Short Mini', price: 33.33, category: 'Fashion' },
    { id: 2, name: 'Abercrombie Allen Book Shirt', price: 70, category: 'Fashion' },
    { id: 3, name: 'Abercrombie Lake Active Shirt', price: 65, category: 'Fashion' },
    { id: 4, name: 'Bench Shirt', price: 29, category: 'Fashion' },
  ]);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const handleAction = (action, item) => {
    switch (action) {
      case 'read':
        alert(`Viewing details for: ${item.name}`);
        break;
      case 'edit':
        alert(`Editing: ${item.name}`);
        break;
      case 'delete':
        alert(`Deleting: ${item.name}`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="table-container">
      <div className="header">
        <h2>Search products: shirt</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="create-button">+ Create Product</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.category}</td>
              <td className="action-buttons">
                <button className="read-btn" onClick={() => handleAction('read', item)}>
                  Read
                </button>
                <button className="edit-btn" onClick={() => handleAction('edit', item)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleAction('delete', item)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTable;
