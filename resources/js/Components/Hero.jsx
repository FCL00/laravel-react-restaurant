import react from "react";
function Hero() {
    return (
        <div id="hero" className="mb-32">
            {/* <!-- flex container --> */}
            <div className="container flex flex-col-reverse md:flex-row items-center px-5 mx-auto mt-10 space-y-0 md:space-y-0">
                {/* <!-- left item --> */}
                <div className="flex flex-col space-y-12 md:w-1/2 ">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-center font-bold  md:text-left text-yellow-500 w-full">
                        Satisfy your cravings for Filipino food
                    </h1>
                    <p className="text-center text-white md:text-left w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla euismod lorem sapien, eget imperdiet nisi
                        fringilla a. Maecenas ut rhoncus diam, id tristique
                        odio. Aenean sit amet quam semper, gravida erat
                        facilisis, faucibus nunc. Cras diam justo, consectetur
                        et justo vel, blandit dictum justo. In volutpat ac neque
                        cursus pellentesque.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <a
                            href=""
                            className=" px-6 py-3 text-white bg-yellow-500 rounded-lg align-baseline hover:bg-yellow-400"
                        >
                            Order Now!
                        </a>
                    </div>
                </div>
                {/* <!-- image item --> */}
                <div className="md:w-1/2">
                    <img src="./foodContent.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
