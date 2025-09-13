import { useRef, useEffect } from "react";
import { labelOptions } from "./main_form";
function AddFieldBox({
    showLabelInput,
    newLabel,
    setNewLabel,
    setShowLabelInput,
    currentFields,
    setFields,
    main_controller
}) {
    const dropDownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target)
            ) {
                setShowLabelInput(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setShowLabelInput]);

    return (
        <div
            ref={dropDownRef}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white/70 p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-black/30 transition duration-300"
        >
            {showLabelInput ? (
                <>
                    <select
                        value={newLabel}
                        onChange={(e) =>
                            main_controller.handleLabelInputChange(e, setNewLabel)
                        }
                        autoFocus
                    >
                        <option value="">Select label for new field</option>
                        {labelOptions.map((option) => (
                            <option key={option.name} value={option.name}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="h-5"></div>
                    <button
                        type="button"
                        onClick={(e) =>
                            main_controller.handleLabelInputSubmit(
                                e,
                                newLabel,
                                currentFields,
                                setFields,
                                setNewLabel,
                                setShowLabelInput
                            )
                        }
                        className="ml-2 px-3 py-1 bg-blue-400 text-white rounded-md">
                        Add Field
                    </button>
                </>
            ) : (
                <div className="flex flex-col items-center">
                    <button
                        type="button"
                        onClick={(e) => main_controller.handleAddFieldClick(e, setShowLabelInput)}
                        className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-full text-lg hover:bg-gray-800"
                    >
                        +
                    </button>
                    <div className="text-sm text-gray-600 mt-1 text-center">Add Field</div>
                </div>
            )}
        </div>
    );
}

export default AddFieldBox;
