import react from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

function GuestLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default GuestLayout;
