import { useState, useEffect } from "react";

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsNavVisible(false);
            } else {
                setIsNavVisible(true);
            }
        };

        handleResize(); 
        window.addEventListener("resize", handleResize); 

       
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); 

    const changeNavBarState = () => {
        setIsNavVisible((prevIsNavVisible) => !prevIsNavVisible);
    };

    return (
        <>
            <nav>
                <div className="lg:flex lg:px-28 w-full pt-10 pb-5 gap-10 mx-2 md:flex justify-center sm:px-4">
                    <div className=" flex lg:flex items-center sm:flex gap-3">
                        <img
                            onClick={changeNavBarState}
                            id="burger"
                            className="md:hidden"
                            src="src/assets/icon-menu.svg"
                            alt=""
                        />
                        <h1 className="font-bold text-2xl">Sneakers</h1>
                    </div>

                    <div className="flex justify-between items-center">
                        <div id="list" className="links">
                            {isNavVisible ? (
                                <ul className="lg:flex md:flex gap-5">
                                    <li className="lg:px-8  hover:border-b-4  border-red-400 sm:py-3">
                                        <a href="">Collections</a>
                                    </li>
                                    <li className="lg:px-8  hover:border-b-4  border-red-400 sm:py-3">
                                        <a href="">Men</a>
                                    </li>
                                    <li className="lg:px-8  hover:border-b-4  border-red-400 sm:py-3">
                                        <a href="">Women</a>
                                    </li>
                                    <li className="lg:px-8  hover:border-b-4  border-red-400 sm:py-3">
                                        <a href="">About</a>
                                    </li>
                                    <li className="lg:px-8  hover:border-b-4  border-red-400 sm:py-3">
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            ) : (
                                ""
                            )}
                        </div>

                        <div className="icons lg:flex ml-64 gap-12 cursor-pointer md:ml-32 hidden max-sm:hidden">
                            <img className="h-8" src="src/assets/icon-cart.svg" alt="" />
                            <img className="h-10" src="src/assets/image-avatar.png" alt="" />
                        </div>
                    </div>
                </div>
            </nav>

            <hr className="mx-28" />
        </>
    );
};

export default Navbar;
