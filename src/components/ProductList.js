import React, { useState, useEffect } from "react";
import oneBedRoom from "../assets/kasur.jpg";
import twoBedRoom from "../assets/kasur2.jpg";
import bestOfferRoom1 from "../assets/best1.jpg";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const staticProducts = [
      {
        id: 1,
        name: "Deluxe Room",
        description: "Spacious room with a king-size bed and city view",
        price: 199,
        image: oneBedRoom,
      },
      {
        id: 2,
        name: "Suite",
        description: "Luxurious suite with separate living area and ocean view",
        price: 299,
        image: twoBedRoom,
      },
      {
        id: 3,
        name: "Grand",
        description: "The Most Beautifull view in the entire hotel available",
        price: 488,
        image: bestOfferRoom1,
      },
      // Add more products as needed
    ];
    setProducts(staticProducts);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">
                  ${product.price}/night
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
