import {
    Dropdown,
    Overlay,
    OverlayTrigger,
    Popover,
    Stack,
    NavDropdown,
    // Header,
    // Item,
    Tooltip,
    Image,
    Col,
    Row,
    Offcanvas,
    Button,
    ButtonGroup,
  } from "react-bootstrap";
  
  import People from '../components/People'
  
  export default function Navbar() {
    return(
        <div className="flex">
            <div>
            <div  className="main-section-text ">Grow your skills to advance your career path </div>
                <div className="main-sub-section-text">build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</div>
                <div>
                    <button className=" flex text-white border border-white px-[32px] py-[16px] rounded"> <span> Get Started Now </span> <svg className="mt-2 ml-2" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33341 11L0.166748 9.83329L8.16675 1.83329H1.00008V0.166626H11.0001V10.1666H9.33341V2.99996L1.33341 11Z" fill="white"/>
</svg></button>
                    <button className="bg-white  deep-blue-color px-[32px] py-[16px]">Enroll Now</button>
                </div>
                <People />
            </div>
            <div>
                <Image height={'886px'} src="../images/mainpicture.svg"/>
            </div>
        </div>
    )
  }