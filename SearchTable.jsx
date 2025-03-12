import React, { useState } from "react";

const SearchTable = () => {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Amanda Wallet Shirt Men", price: "$33", category: "Fashion" },
    { id: 2, name: "Abercrombie Allen Brook Shirt", price: "$70", category: "Fashion" },
    { id: 3, name: "Abercrombie Lake Arnold Shirt", price: "$60", category: "Fashion" },
    { id: 4, name: "Bench Shirt", price: "$29", category: "Fashion" }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="my-3">Search Products</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <button className="btn btn-info btn-sm mr-2">Read</button>
                <button className="btn btn-warning btn-sm mr-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTable;
