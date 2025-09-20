import FileInputField from "./file_input_field";

function InputBox({ label, name, value, onChange, aiGenerate = false, inputType }) {
    console.log("Rendering InputBox with inputType:", inputType);
    let inputField;
    switch (inputType) {
        case 'image':
            inputField = (<FileInputField></FileInputField>);
            break;
        default:
            inputField = (<textarea
            name={name}
            value={value}
            onChange={onChange}
            className="
                        h-[150px] w-[350px] mt-5 mb-5 p-3
                        overflow-y-auto resize-none
                        font-mono text-sm text-green-300
                        bg-black/90 backdrop-blur-sm
                        rounded-md outline outline-gray-700/50
                        focus:outline-green-400 focus:ring-2 focus:ring-green-500
                        tracking-tight leading-relaxed
                    "
            placeholder={`> Type your ${label} here...`}
        />);
        break;
    }

return (
    <div className="input_Box w-[400px] rounded-xl p-7 outline outline-black/5 bg-white/30 backdrop-blur-3xl hover:shadow-lg hover:shadow-black/30 transition duration-300">
        <div className="input_box_label font-mono font-bold text-white text-2xl">{label}</div>
        {inputField}
        {
            aiGenerate && (
                <div className="ai_generate_button">
                    <button type="button" onClick={() => { }} className="text-yellow-300 rounded-lg px-3 py-1 bg-black/30 backdrop-blur-3xl outline outline-black/5 shadow-md hover:bg-black/10 hover:shadow-lg transition duration-300">
                        Power up with AI
                    </button>
                </div>
            )
        }
    </div >
);
}

export default InputBox;
