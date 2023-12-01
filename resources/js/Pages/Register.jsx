import react from "react";
import FormInput from "@/Components/partials/FormInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm, Link, usePage } from "@inertiajs/react";

function Register() {
    return (
        <GuestLayout>
            <div className="container mx-auto  w-full md:w-1/3 m-5 p-10">
                <h1 className="text-3xl font-bold text-white">
                    Get's Started.
                </h1>
                <h5 className="text-white ">
                    Already have an account?
                    <Link href="/login" className="text-yellow-500 ml-1">
                        Sign in here!
                    </Link>
                </h5>

                <div className="container mt-10 flex flex-col space-y-2 md:flex-row  md:space-x-2 md:space-y-0 ">
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

                <form
                    className="bg-stone-900 border border-stone-900 rounded-xl shadow-xl p-5 mt-10"
                    action=""
                >
                    <FormInput
                        key={Math.random()}
                        id="firstname"
                        label="Firstname"
                        name="firstname"
                        type="text"
                        placeholder="Enter your Firstname"
                        autoComplete="false"
                    />

                    <FormInput
                        key={Math.random()}
                        id="lastname"
                        label="Lastname"
                        name="lastname"
                        type="text"
                        placeholder="Enter your Lastname"
                        autoComplete="false"
                    />

                    <FormInput
                        key={Math.random()}
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
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
                    <FormInput
                        key={Math.random()}
                        id="confirm_password"
                        label="Confirm Password"
                        name="confirm_password"
                        type="password"
                        placeholder="Retype password"
                        autoComplete="false"
                    />
                    <button
                        type="submit"
                        className="w-full p-3 bg-yellow-500 rounded-md hover:bg-yellow-400"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </GuestLayout>
    );
}

export default Register;
