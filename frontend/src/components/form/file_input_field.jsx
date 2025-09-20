import FileUplAnim from "../lottie_file_upl";

export default function FileInputField() {
    return (
        <FileUplAnim isPicked={false}>
            <input
                type="file"
                id="docpicker"
                accept=".png,.jpeg,.svg" />
        </FileUplAnim>
    );
}


/*
 
*/