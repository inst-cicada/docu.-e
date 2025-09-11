function InputBox({ label, name, value, onChange, aiGenerate = false }) {
    return (
        <div className="input_Box">
            <div className="input_box_label">{label}</div>
            <div className="input_box_content">
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="light_input"
                />
            </div>
            {aiGenerate && (
                <div className="ai_generate_button"><button type="button" onClick={()=>{}}>
                   Power up with AI
                </button></div>
            )}
        </div>
    );
}

export default InputBox;
