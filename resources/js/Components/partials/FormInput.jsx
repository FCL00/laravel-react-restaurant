function FormInput(props) {
    return (
        <div className="mb-4">
            <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor={props.id}
            >
                {props.label}
            </label>
            <input
                className="appearance-none border rounded w-full py-3 px-3 text-stone-900 leading-tight focus:outline-none focus:shadow-outline"
                id={props.id}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete}
            />
        </div>
    );
}

export default FormInput;
