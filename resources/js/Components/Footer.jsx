function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="">
            <div className="container  mx-auto p-4 flex flex-col justify-between items-start space-y-1 md:flex-row md:items-center align-baseline mb-2">
                <h1 className="text-2xl font-bold text-yellow-500 hover:text-yellow-500">
                    LutongBahay
                </h1>
                <div className="space-x-6">
                    <a href="" className="text-white hover:text-yellow-500">
                        About Us
                    </a>
                    <a href="" className="text-white hover:text-yellow-500">
                        Privacy Policy
                    </a>
                    <a href="" className="text-white hover:text-yellow-500">
                        Lincesing
                    </a>
                    <a href="" className="text-white hover:text-yellow-500">
                        Contact
                    </a>
                    <a href="" className="text-white hover:text-yellow-500">
                        FAQ's
                    </a>
                </div>
            </div>
            <hr className="container mx-auto px-6 border-none bg-stone-900 h-px" />
            <div className="container mx-auto px-4 text-white text-start md:text-center mt-1 py-2">
                <p>© {currentYear} LutongBahay. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
