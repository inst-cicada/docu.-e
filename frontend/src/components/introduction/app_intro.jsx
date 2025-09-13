export default function AppIntroduction() {
    return (
        <>
            <div className="app_intro_box p-6 m-4 bg-black/50 backdrop-blur-sm rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-white">
                    Welcome to <span className="text-[#007bff]">Docu.</span><span className="text-white">me</span>
                </h1>
                <ul className="list-disc list-inside text-sm space-y-2 text-[#c6cbcf]">
                    <li>
                        Docu.me is your personal document assistant. It helps you manage, organize, and retrieve your documents with ease.
                    </li>
                    <li>
                        To get started, simply fill out the form with your document details. You can add multiple fields and even use AI to help generate content!
                    </li>
                    <li>
                        Once you&apos;ve filled out the form, click <span className="font-semibold">"Submit"</span> to process your documents. Docu.me will take care of the rest!
                    </li>
                </ul>
            </div>
        </>
    );
}