import React from "react";

import { Info } from "./info";
import { useProducts } from "../hooks/productContext";

export const InfoContainer = ({ actualIndex, classType }) => {
    const {productos} = useProducts()
    return (
        <section className="info-container">
            {productos.map((producto, index) => (
                <Info
                    actualIndex={actualIndex}
                    key={index}
                    index={index}
                    autor={producto.autor}
                    titulo={producto.titulo}
                    texto={producto.texto}
                    classType={classType}
                />
            ))}

            <button>Product Details</button>
        </section>
    );
};
