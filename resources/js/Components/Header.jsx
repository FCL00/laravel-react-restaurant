import react, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

function Header() {
    const { url } = usePage();
    const [isMenuOpen, setMenuOpen] = useState(false);

    function toggleCurrentPage() {
        setCurrentPage((prevState) => {
            return !prevState;
        });
    }

    function toggleMenu() {
        setMenuOpen((prevState) => {
            return !prevState;
        });
        console.log("click");
    }

    return (
        <nav className="navbar shadow-md bg-stone-900">
            {/* flex container */}
            <div className="container flex flex-wrap items-center justify-between mx-auto p-4 ">
                <div className="flex flex-row space-x-10 ">
                    {/* left item */}
                    <div>
                        <a href="">
                            <h1 className="text-2xl font-bold text-yellow-500">
                                LutongBahay
                            </h1>
                        </a>
                    </div>
                    {/* center items */}
                    <div className="hidden md:block  space-x-6 pt-1">
                        <Link
                            href="/"
                            className={
                                url === "/" ? "text-yellow-500" : "text-white"
                            }
                        >
                            Home
                        </Link>
                        <Link
                            href="/menu"
                            className={
                                url === "/menu"
                                    ? "text-yellow-500"
                                    : "text-white"
                            }
                        >
                            Menu
                        </Link>
                        <Link href="#" className="text-white">
                            Special Offers
                        </Link>
                        <Link href="#" className="text-white">
                            Contact Us
                        </Link>
                    </div>
                </div>
                {/* right items */}
                <div>
                    <div>
                        <Link
                            href="/login"
                            className="hidden md:block p-3 px-6 text-white bg-yellow-500 rounded-lg align-baseline hover:bg-yellow-400"
                        >
                            Login
                        </Link>
                    </div>
                </div>
                {/* menu button */}
                <button className="block md:hidden" onClick={toggleMenu}>
                    <i
                        className="fa-solid fa-bars"
                        style={{ color: "#FFFFFF" }}
                    ></i>
                </button>
            </div>
            {/* menu section */}
            <div
                id="menu-section"
                className={`
                container
                ${
                    isMenuOpen
                        ? "flex flex-col mx-auto px-4 pb-2 space-y-2 md:hidden"
                        : "hidden"
                }`}
            >
                <Link
                    href="#"
                    className="text-white hover:bg-yellow-500 hover:text-stone-900 p-2"
                >
                    Home
                </Link>
                <Link
                    href="#"
                    className="text-white hover:bg-yellow-500 hover:text-stone-900 p-2"
                >
                    Menu
                </Link>
                <Link
                    href="#"
                    className="text-white hover:bg-yellow-500 hover:text-stone-900 p-2"
                >
                    Special Offers
                </Link>
                <Link
                    href="#"
                    className="text-white hover:bg-yellow-500 hover:text-stone-900 p-2"
                >
                    Contact Us
                </Link>
                <Link
                    href="#"
                    className="text-white hover:bg-yellow-500 hover:text-stone-900 p-2"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
}

export default Header;
