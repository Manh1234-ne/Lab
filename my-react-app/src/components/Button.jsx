export default function Button(props) {
    return (
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 mr-2">
            {props.label}
        </button>
    );
}

