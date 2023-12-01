function ReviewCard(props) {
    return (
        <div className="max-w-md mx-auto bg-stone-900  rounded-xl overflow-hidden shadow-md">
            <div className="bg-stone-900 shadow-xl p-5">
                <div className="flex items-center">
                    <img
                        className="w-12 h-12 rounded-full mr-4"
                        src={props.img}
                        alt="Reviewer's Profile Picture"
                    />
                    <div>
                        <h3 className="text-yellow-500 text-lg font-semibold">
                            {props.name}
                        </h3>
                        <p className="text-white">Customer</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-white">{props.review}</p>
                </div>
            </div>
            <div className="bg-stone-900 p-4">
                <span className="text-white">{props.rating}</span>
            </div>
        </div>
    );
}

export default ReviewCard;
