import react from "react";
import ReviewCard from "@/Components/partials/ReviewCard";

function Review() {
    const sampleReviews = [
        {
            id: "1",
            img: "./profile1.png",
            name: "John Doe",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "Rating: 4.5/5",
        },
        {
            id: "2",
            img: "./profile1.png",
            name: "Sam Wong",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "Rating: 4.5/5",
        },
        {
            id: "3",
            img: "./profile1.png",
            name: "Angela Yu",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "Rating: 4.5/5",
        },
    ];

    const displayReviews = (item) => {
        return (
            <ReviewCard
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                review={item.review}
                rating={item.rating}
            />
        );
    };

    return (
        // <!-- review section -->
        <section id="review-section" className="mb-32">
            <div className="container mx-auto p-4 mb-5">
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-yellow-500  mb-3">
                    Hear from our customers
                </h1>
            </div>
            <div className="container flex flex-col md:flex md:flex-row gap-2 mx-auto px-4">
                {sampleReviews.map(displayReviews)}
            </div>
        </section>
    );
}

export default Review;
