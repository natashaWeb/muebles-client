import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    const { VITE_API } = import.meta.env;

    async function fetchProducts() {
        try {
            const respuesta = await axios.get(`${VITE_API}/products/get`);
            setProductos(respuesta.data);
        } catch (error) {
            console.error("Error al hacer la petición:", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ productos, fetchProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);
