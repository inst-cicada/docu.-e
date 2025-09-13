function InputBox({ label, name, value, onChange, aiGenerate = false }) {
    return (
        <div className="input_Box mx-auto max-w-sm rounded-xl p-7 outline outline-black/5 bg-white/30 backdrop-blur-3xl">
            <div className="input_box_label font-mono font-bold text-white text-xl">{label}</div>
            <div className="input_box_content">
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="light_input h-[150px] w-full mt-5 mb-5 p-3 overflow-y-auto resize-none text-start align-top bg-white/80 backdrop-blur-3xl rounded-lg outline outline-black/5"
                />
            </div>
            {aiGenerate && (
                <div className="ai_generate_button">
                    <button type="button" onClick={() => { }} className="text-yellow-300 rounded-lg px-3 py-1 bg-black/30 backdrop-blur-3xl outline outline-black/5 shadow-md hover:bg-black/50 hover:shadow-lg transition duration-300">
                        Power up with AI
                    </button>
                </div>
            )}
        </div>
    );
}

export default InputBox;
