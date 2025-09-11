import { useState } from "react";
import InputBox from "./input_box";
import * as main_controller from "./main_form_controller";

function MainForm() {
    const [fields, setFields] = useState([
        { label: "API's Name", name: "apiName", value: "", aiGenerate: false },
        { label: "CURL Command", name: "curl", value: "", aiGenerate: false },
        { label: "Success Response", name: "successResponse", value: "", aiGenerate: false }
    ]);
    const [showLabelInput, setShowLabelInput] = useState(false);
    const [newLabel, setNewLabel] = useState("");

    const labelOptions = [
        { label: "API Description", name: "apiDescription", aiGenerate: true },
        { label: "Additional notes", name: "additionalNotes", aiGenerate: false },
        { label: "Error Response", name: "errorResponse", aiGenerate: false },
        { label: "Usage", name: "usage", aiGenerate: false }
    ];



    return (
        <form className="main_form" onSubmit={e=>main_controller.handleSubmit(e, fields)}>
            {fields.map((field, idx) => (
                <InputBox
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    value={field.value}
                    aiGenerate={field.aiGenerate}
                    onChange={(e) => main_controller.handleChange(e, idx, setFields)}
                />
            ))}
            {showLabelInput ? (
                <div>
                    <select
                        value={newLabel}
                        onChange={e=>main_controller.handleLabelInputChange(e, setNewLabel)}
                        autoFocus
                    >
                        <option value="">Select label for new field</option>
                        {labelOptions.map((option) => (
                            <option key={option.name} value={option.name}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <button type="button" onClick={e=>main_controller.handleLabelInputSubmit(e, newLabel, setFields, setNewLabel, setShowLabelInput)}>
                        Add Field
                    </button>
                </div>
            ) : (
                <button type="button" onClick={e=>main_controller.handleAddFieldClick(e, setShowLabelInput)}>
                    Add
                </button>
            )}
            <button type="submit">Submit</button>
        </form>
    );
}

export default MainForm;
