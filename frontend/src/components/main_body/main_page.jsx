import MainForm from "../form/main_form";
import AppHeader from "../header/header";
import AppIntroduction from "../introduction/app_intro";
import "./main_page.css";
function MainPage() {
    return (
        <>
            <div className="main_full_body">
                <AppHeader />
                <AppIntroduction />
                <MainForm/>
            </div>
        </>
    )
}

export default MainPage