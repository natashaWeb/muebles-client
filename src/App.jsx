import React from "react";
import "./App.css";

import { ProductProvider } from "./hooks/productContext";
import Index from "./index";

function App() {
    return (
        <ProductProvider>
            <Index />
        </ProductProvider>
    );
}

export default App;
