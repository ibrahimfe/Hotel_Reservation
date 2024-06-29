import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import oneBedRoom from "../../assets/kasur.jpg";
import twoBedRoom from "../../assets/kasur2.jpg";
import bestOfferRoom1 from "../../assets/best1.jpg";
import image1 from "../../assets/best2.jpg";
import image2 from "../../assets/best3.jpg";
import image3 from "../../assets/dapur.jpg";
import image4 from "../../assets/dapur2.jpg";
import image5 from "../../assets/kamarmandi.jpg";
import image6 from "../../assets/kamarmandi2.jpg";

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
      {
        id: 4,
        name: "Secret Point Hotel",
        description:
          "This classic hotel is ideally located on the main commercial artery of the city in the heart of New York.",
        price: 230,
        image: image1,
      },
      {
        id: 5,
        name: "Country Home",
        description:
          "Save up to 50% off traditional hotels. Free WiFi, great location near downtown, full kitchen, washer & dryer, 24/7 support, bowling alley, fitness center and more.",
        price: 145,
        image: image2,
      },
      {
        id: 6,
        name: "Regal Orb Residence Inn",
        description:
          "Your home away from home. Brand new fully equipped premium rooms, fast WiFi, full kitchen, washer & dryer, fitness center.",
        price: 390,
        image: image3,
      },
      {
        id: 7,
        name: "Winter Panorama Resort",
        description:
          "Plenty of great skiing, outdoor ice skating, sleigh rides, tubing and snow biking. Yoga, group exercise classes and outdoor hockey are available year-round, plus numerous options for shopping as well as great spa",
        price: 179,
        image: image4,
      },
      {
        id: 8,
        name: "Historic Lion Resort",
        description:
          "Unmatched Luxury. Visit our downtown hotel to indulge in luxury accommodations. Moments from the stadium, we feature the best in comfort",
        price: 199,
        image: image5,
      },
      {
        id: 9,
        name: "Twin Vertex Hotel",
        description:
          "New experience in the Making. Be the first to experience the luxury of the Twin Vertex. Reserve one of our newly-renovated guest rooms today.",
        price: 299,
        image: image6,
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
                <Link
                  to="/payment"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
