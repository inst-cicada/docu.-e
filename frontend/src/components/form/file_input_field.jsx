import FileUplAnim from "../lottie_file_upl";
import { useRef, useState } from "react";

export default function FileInputField() {
    const [isPicked, setIsPicked] = useState(false);
    const fileUploadRef = useRef(null);

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setIsPicked(false);
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            let base64Val=reader.result;
            setIsPicked(true);
            console.log("Base64:", base64Val);
        };
        reader.readAsDataURL(file);
        alert("You have selected the file: " + file.name);
    }


    return (
        <div onClick={() => fileUploadRef.current.click()}>
            <FileUplAnim isPicked={isPicked}>
                <input
                    type="file"
                    id="docpicker"
                    ref={fileUploadRef}
                    accept=".png,.jpeg,.svg"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </FileUplAnim>
        </div>
    );
}
