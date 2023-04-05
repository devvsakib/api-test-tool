const HttpMethod = ({ methods, options, onClick, activeMethod, activeOption }) => {
    return (
        <div className={`flex ${options ? "justify-start gap-5" : "justify-between"}`}>
            {methods ? (
                methods.map((method, idx) => (
                    <button
                        key={idx}
                        className={`httpMethodDark ${activeMethod === method ? "activeBG" : ""}`}
                        onClick={() => onClick(method)}
                    >
                        {method}
                    </button>
                ))
            ) : (
                options.map((option, idx) => (
                    <button
                        key={idx}
                        className={`httpMethodDark ${activeOption === option ? "activeBG" : ""}`}
                        onClick={() => onClick(option)}
                    >
                        {option}
                    </button>
                ))
            )}
        </div>
    )
}

export default HttpMethod;