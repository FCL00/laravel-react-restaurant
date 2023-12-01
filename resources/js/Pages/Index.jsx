import react from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import PopularDish from "@/Components/PopularDish";
import Hero from "@/Components/Hero";
import Contact from "@/Components/Contact";
import Review from "@/Components/Review";
function Index() {
    return (
        <GuestLayout>
            <Hero />
            <PopularDish />
            <Contact />
            <Review />
        </GuestLayout>
    );
}

export default Index;
