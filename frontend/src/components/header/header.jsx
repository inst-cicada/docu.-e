import "./header.css";
import logo from "../../assets/Logo.png";

function AppHeader() {

  return (
    <>
      <div className='docume_header_bar'>
        <img src={logo} alt="docu.me logo" className="docume_header_bar_logo "></img>
        <div className='docume_header_bar_content_1'>Docu.</div>
        <div className='docume_header_bar_content_2'>me</div>
      </div>
    </>
  )
}

export default AppHeader