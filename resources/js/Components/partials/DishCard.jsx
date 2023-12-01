import react from "react";

function DishCard(props) {
    return (
        <div
            id="card-header"
            className="bg-stone-900 border border-stone-950 rounded-xl shadow-xl mt-5 space-y-2 py-3"
        >
            <a href="">
                <img className="round-t-lg" src={props.img} alt="" />
            </a>
            <div className="card-body p-5">
                <h1 className="text-start  text-white text-2xl font-bold md:text-4xl mb-1">
                    {props.title}
                </h1>
                <p className="text-start text-white">{props.desc}</p>
                <p className="text-yellow-500 mb-5">₱{props.price}</p>
                <a
                    href=""
                    className="py-3 px-6 text-white bg-yellow-500 rounded-md align-baseline hover:bg-yellow-400"
                >
                    {props.btnName}
                </a>
            </div>
        </div>
    );
}

export default DishCard;
