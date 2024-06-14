import React from "react";

export const Footer = ({ setIndex, setClass, actualIndex }) => {
    const handleClick = (index) => {
        if (index > actualIndex) {
            setClass("up");
        } else if (index < actualIndex) {
            setClass("down");
        }
        setIndex(index);
    };
    return (
        <footer className="footer-container">
            <div className="footer-main">
                <div className="item" onClick={() => handleClick(0)}>
                    <div
                        className={`${actualIndex == 0 ? "active" : ""}`}
                    ></div>
                    <span>01</span>
                    <span className={`${actualIndex == 0 ? "active" : ""}`}>
                        Title
                    </span>
                </div>
                <div className="item" onClick={() => handleClick(1)}>
                    <div
                        className={`${actualIndex == 1 ? "active" : ""}`}
                    ></div>
                    <span>02</span>
                    <span className={`${actualIndex == 1 ? "active" : ""}`}>
                        Title
                    </span>
                </div>
                <div className="item" onClick={() => handleClick(2)}>
                    <div
                        className={`${actualIndex == 2 ? "active" : ""}`}
                    ></div>
                    <span>03</span>
                    <span className={`${actualIndex == 2 ? "active" : ""}`}>
                        Title
                    </span>
                </div>
            </div>
        </footer>
    );
};
