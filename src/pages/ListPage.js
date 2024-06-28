import React from "react"; // Mengimpor CSS dari komponen About
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const ListPage = () => {
  return (
    <div>
      <ProductList />
      <Footer />
    </div>
  );
};

export default ListPage; // Mengexport komponen AboutPages
