import React from "react";

import { Image } from "./image";
import { useProducts } from "../hooks/productContext";

export const ImageContainer = ({ actualIndex, classType }) => {
    const {productos} = useProducts()
    return (
        <section className="image-container">
            {productos.map((producto, index) => (
                <Image
                    img={producto.imagen}
                    actualIndex={actualIndex}
                    key={index}
                    index={index}
                    classType={classType}
                />
            ))}
        </section>
    );
};
