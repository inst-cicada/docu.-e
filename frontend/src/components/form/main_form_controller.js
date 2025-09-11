import { extractCurl } from "../document_generator/curl_extracter";



const labelOptions = [
    { label: "API Description", name: "apiDescription", aiGenerate: true },
    { label: "Additional notes", name: "additionalNotes", aiGenerate: false },
    { label: "Error Response", name: "errorResponse", aiGenerate: false },
    { label: "Usage", name: "usage", aiGenerate: false }
];
export const handleChange = (e, idx, setFields) => {
    const { value } = e.target;
    setFields((prev) =>
        prev.map((field, i) =>
            i === idx ? { ...field, value } : field
        )
    );
};
export const handleLabelInputSubmit = (e, newLabel, setFields, setNewLabel, setShowLabelInput) => {
    e.preventDefault();
    if (newLabel.trim() === "") return;
    const selectedOption = labelOptions.find(opt => opt.name === newLabel);
    if (!selectedOption) return;
    setFields((prev) => [
        ...prev,
        {
            label: selectedOption.label,
            name: selectedOption.name,
            value: "",
            aiGenerate: selectedOption.aiGenerate
        }
    ]);
    setNewLabel("");
    setShowLabelInput(false);
};

export const handleAddFieldClick = (e, setShowLabelInput) => {
    setShowLabelInput(true);
};

export const handleLabelInputChange = (e, setNewLabel) => {
    setNewLabel(e.target.value);
};

export const handleSubmit = (e, fields) => {
    e.preventDefault();
    const formData = fields.reduce((acc, field) => {
        acc[field.name] = field.value;
        return acc;
    }, {});
    console.log("Final Data:", formData);
    console.log("curl data is :: ", formData.curl);
    let curlData = extractCurl(formData.curl);
    console.log("Extracted curl data:", curlData);
};