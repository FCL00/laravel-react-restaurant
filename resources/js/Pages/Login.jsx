import react from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm, Link, usePage } from "@inertiajs/react";
import FormInput from "@/Components/partials/FormInput";

function LoginPage() {
    return (
        <GuestLayout>
            <div className="container mx-auto  w-full md:w-1/3 m-5 p-10">
                <h1 className="text-3xl font-bold text-white">
                    Get's Started.
                </h1>
                <h5 className="text-white ">
                    Don't have an account?
                    <Link href="/register" className="text-yellow-500 ml-1">
                        Sign up
                    </Link>
                </h5>

                <div className="container mt-10 flex flex-col space-y-2 md:flex-row  md:space-x-2 md:space-y-0">
                    <button className="w-full md:1/2 text-white p-3 border-2 border-red-700 rounded-md hover:bg-red-700">
                        <i
                            className="fa-brands fa-google mr-2 "
                            style={{ color: "#f87171" }}
                        >
                            {" "}
                        </i>
                        Sign in with Google
                    </button>
                    <button className="w-full md:1/2 text-white p-3 border-2 border-blue-700 rounded-md hover:bg-blue-700">
                        <i
                            className="fa-brands fa-facebook mr-2"
                            style={{ color: "#3B82F6" }}
                        >
                            {""}
                        </i>
                        Sign in with Facebook
                    </button>
                </div>

                <div className="flex flex-row mt-5 justify-center items-center space-x-2">
                    <hr className="container mx-auto px-6 border-none bg-white h-px" />
                    <p className="text-white">or</p>
                    <hr className="container mx-auto px-6 border-none bg-white h-px" />
                </div>

                <form className="mt-10 bg-stone-900 p-7 rounded " action="">
                    <FormInput
                        key={Math.random()}
                        id="username"
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter your Username"
                        autoComplete="false"
                    />

                    <FormInput
                        key={Math.random()}
                        id="password"
                        label="password"
                        name="password"
                        type="password"
                        placeholder="Enter your Password"
                        autoComplete="false"
                    />
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div className="flex space-x-1 items-center">
                            <input id="rememberme" type="checkbox" />{" "}
                            <label className="text-white" htmlFor="rememberme">
                                Remember me
                            </label>
                        </div>
                        <div className="">
                            <a
                                className="text-yellow-500 hover:text-yellow-400"
                                href=""
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <button className="w-full p-3 bg-yellow-500 rounded-md hover:bg-yellow-400">
                        Sign in
                    </button>
                </form>
            </div>
        </GuestLayout>
    );
}

export default LoginPage;
