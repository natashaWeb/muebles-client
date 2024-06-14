import React, { useState } from "react";

import { ImageContainer } from "./components/imageContainer";
import { InfoContainer } from "./components/infoContainer";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function Index() {
    const [actualIndex, setActualIndex] = useState(0);
    const [classType, setClassType] = useState("");

    const handleScroll = (event) => {
        if (actualIndex == 0) {
            event.deltaY > 0 && setClassType("up");
            event.deltaY > 0 && setActualIndex(actualIndex + 1);
        }
        if (actualIndex == 1) {
            event.deltaY > 0 &&
                setActualIndex(actualIndex + 1) &&
                setClassType("down");
            event.deltaY < 0 &&
                setActualIndex(actualIndex - 1) &&
                setClassType("up");
        }
        if (actualIndex == 2) {
            event.deltaY < 0 && setClassType("down");
            event.deltaY < 0 && setActualIndex(actualIndex - 1);
        }
    };

    return (
        <div className="app-container" onWheel={handleScroll}>
            <Header />
            <main className="main-container">
                <InfoContainer
                    actualIndex={actualIndex}
                    classType={classType}
                />
                <ImageContainer
                    actualIndex={actualIndex}
                    classType={classType}
                />
            </main>
            <Footer
                setIndex={setActualIndex}
                setClass={setClassType}
                actualIndex={actualIndex}
            />
        </div>
    );
}

export default Index;
