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
  
  
  
  export default function Navbar() {
    return(
        <div className="flex mx-auto light-blue-color font-semibold justify-between">
            <Image src="../images/techtime.svg" />
            <div className="flex">
                <div className="leading-6 flex">
                  <div className=" mr-3">Home</div>
                <div className="mr-3">About Us</div>
                <div className="mr-3">Courses</div>
                <div className="mr-3">Testimonial</div>
                <div className="">Community</div>  
                </div>
                
                <div>
                                    <button className="bg-white  deep-blue-color px-[32px] py-[16px]">Enroll Now</button>

                </div>
            </div>
        </div>
    )
  }