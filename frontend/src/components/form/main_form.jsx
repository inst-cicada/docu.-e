import { useState } from "react";
import InputBox from "./input_box";
import AddFieldBox from "./add_field_box";
import * as main_controller from "./main_form_controller";
export const labelOptions = [
        { label: "API Description", name: "apiDescription", aiGenerate: true, inpType: "text" },
        { label: "Additional notes", name: "additionalNotes", aiGenerate: false, inpType: "text" },
        { label: "Error Response", name: "errorResponse", aiGenerate: false, inpType: "text" },
        { label: "Usage", name: "usage", aiGenerate: false, inpType: "text" },
        { label: "Place Holder Logo", name: "placeHolderLogo", aiGenerate: false, inpType: "image" },
    ];
function MainForm() {
    const [fields, setFields] = useState([
        { label: "API's Name", name: "apiName", value: "", aiGenerate: false, inpType: "text" },
        { label: "CURL Command", name: "curl", value: "", aiGenerate: false, inpType: "text" },
        { label: "Success Response", name: "successResponse", value: "", aiGenerate: false, inpType: "text" },
    ]);
    const [showLabelInput, setShowLabelInput] = useState(false);
    const [newLabel, setNewLabel] = useState("");

    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < fields.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    return (
        <>
            <div className="h-[20px]"></div>
            <div className="w-full flex justify-center items-center p-10px ">
                <form
                    className="main_form relative w-[450px] h-[500px] overflow-hidden flex justify-center items-center"
                    onSubmit={(e) => main_controller.handleSubmit(e, fields)}>
                    <div className="relative w-full max-w-sm h-full">
                        {fields.map((field, idx) => (
                            <div
                                key={field.name}
                                className={`absolute top-0 left-0 w-full transition-all duration-700
                        ${idx === currentStep
                                        ? "opacity-100 translate-x-0 z-10"
                                        : formFieldElementIdxCSS(idx)
                                    }`}
                            >
                                <InputBox
                                    label={field.label}
                                    name={field.name}
                                    value={field.value}
                                    aiGenerate={field.aiGenerate}
                                    onChange={(e) => main_controller.handleChange(e, idx, setFields)}
                                    inputType={field.inpType}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6">
                        {currentStep > 0 && (
                            <button
                                type="button"
                                onClick={handlePrev}
                                className="px-4 py-2 rounded-lg bg-white/40 backdrop-blur-md text-black font-bold shadow-md"
                            >
                                Previous
                            </button>
                        )}
                        {currentStep < fields.length - 1 ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="ml-auto px-4 py-2 rounded-lg bg-blue-500 text-white font-bold shadow-md"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="ml-auto px-4 py-2 rounded-lg bg-green-500 text-white font-bold shadow-md"
                            >
                                Submit
                            </button>
                        )}
                    </div>

                    {currentStep === fields.length - 1 && (
                        <AddFieldBox
                            showLabelInput={showLabelInput}
                            newLabel={newLabel}
                            setNewLabel={setNewLabel}
                            setShowLabelInput={setShowLabelInput}
                            currentFields={fields}
                            setFields={setFields}
                            main_controller={main_controller}
                        />
                    )}
                </form>
            </div>
        </>
    );

    function formFieldElementIdxCSS(idx) {
        return idx < currentStep
            ? "opacity-0 -translate-x-full z-0"
            : "opacity-0 translate-x-full z-0";
    }
}

export default MainForm;
