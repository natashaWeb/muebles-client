import React, { useState } from "react";

export const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleCollection, setToggleCollection] = useState(false);
    const [toggleImg, setToggleImg] = useState(false);
    return (
        <header className="header-container">
            <div className="header-main">
                <h1 className={`${toggleMenu ? "active" : ""}`}>mater</h1>

                <div
                    className="header-button"
                    onClick={() => {
                        setToggleMenu(!toggleMenu);
                        !toggleMenu && setToggleImg(false)
                        !toggleMenu && setToggleCollection(false)
                    }}
                >
                    <div
                        className={`button-firstLine ${
                            toggleMenu ? "active" : ""
                        }`}
                    ></div>
                    <div
                        className={`button-secondLine ${
                            toggleMenu ? "active" : ""
                        }`}
                    ></div>
                    <div
                        className={`button-thirdLine ${
                            toggleMenu ? "active" : ""
                        }`}
                    ></div>
                </div>
            </div>
            <nav className={`nav-container ${toggleMenu ? "active" : ""}`}>
                <div className="nav-main">
                    <div className="menu-principal">
                        <ul className={`menu ${toggleMenu ? "upMenu" : ""}`}>
                            <li
                                onClick={() =>
                                    setToggleCollection(!toggleCollection)
                                }
                            >
                                Collection
                            </li>
                            <ul
                                className={`collection ${
                                    toggleCollection ? "active" : ""
                                }`}
                            >
                                <li onMouseEnter={() => setToggleImg(true)}>
                                    Furniture
                                </li>
                                <li>Lighting</li>
                                <li>Accessories</li>
                            </ul>
                            <li className="design">Design</li>
                            <li className="craftmanship">Craftmanship</li>
                            <li>Ethics</li>
                        </ul>
                        <div className={`menu-img ${toggleImg ? "up" : ""}`}>
                            <img src="/imagen3.png" alt="" />
                        </div>
                    </div>
                    <div className={`submenu ${toggleMenu ? "upSubMenu" : ""}`}>
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Dealers</li>
                        </ul>
                        <ul>
                            <li>News</li>
                            <li>Care</li>
                            <li>Press</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
