import MainForm from "../form/main_form";
import AppHeader from "../header/header";
import "./main_page.css";
function MainPage() {
    return (
        <>
            <div className="main_full_body">
                <AppHeader />
                <MainForm/>
            </div>
        </>
    )
}

export default MainPage