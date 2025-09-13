import { useRef, useEffect } from "react";

function AddFieldBox({
    showLabelInput,
    newLabel,
    setNewLabel,
    setShowLabelInput,
    labelOptions,
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
            className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white/70 p-4 rounded-lg shadow-md"
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
                    <button
                        type="button"
                        onClick={(e) =>
                            main_controller.handleLabelInputSubmit(
                                e,
                                newLabel,
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
                <button
                    type="button"
                    onClick={(e) =>
                        main_controller.handleAddFieldClick(e, setShowLabelInput)
                    }
                    className="px-3 py-1 bg-gray-700 text-white rounded-md"
                >
                    Add
                </button>
            )}
        </div>
    );
}

export default AddFieldBox;
