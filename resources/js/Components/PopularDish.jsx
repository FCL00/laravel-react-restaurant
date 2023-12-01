import react from "react";
import Card from "@/Components/partials/DishCard";
function PopularDish() {
    const sampleData = [
        {
            id: "1",
            img: "./food1.png",
            title: "Crispy pata",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "240.00",
            btnName: "Order Now!",
        },
        {
            id: "2",
            img: "./food2.png",
            title: "Chicharon",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            price: "240.00",
            btnName: "Order Now!",
        },
        {
            id: "3",
            img: "./food3.png",
            title: "kaldereta",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "240.00",
            btnName: "Order Now!",
        },
    ];

    const displayCards = (item) => {
        return (
            <Card
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.img}
                desc={item.desc}
                price={item.price}
                btnName={item.btnName}
            />
        );
    };

    return (
        // <!-- menu section -->
        <section id="menu">
            <div className="container mx-auto px-6 mt-10 space-y-1 md:space-y-2 mb-3">
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-center  md:text-left text-yellow-500 w-full">
                    Explore Our Popular Dishes
                </h1>
                <p className="text-center text-white md:text-left w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla euismod lorem sapien, eget imperdiet nisi fringilla a.
                    Maecenas ut rhoncus diam, id tristique odio.
                </p>
            </div>
            {/* <!-- container  --> */}
            <div className="container mx-auto px-6 mb-32">
                {/* <!-- grid container  --> */}
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 mx-auto mb-32">
                    {sampleData.map(displayCards)}
                </div>
            </div>
        </section>
    );
}

export default PopularDish;
