import React, { useState } from "react";

function ShoppingList() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    setItems([...items, { name: name, product: product }]);
    setName("");
    setProduct("");
  };

  return (
    <div className="container mx-auto bg-cyan-300 .mx-0 my-40 pt-10">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 mx-2"
        />
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="border rounded p-2 mx-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white p-2 mx-2 rounded"
        >
          Add
        </button>
      </div>
      <table className="text-center w-full mt-4">
        <thead className="p-5 border">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Product</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">{item.product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShoppingList;
