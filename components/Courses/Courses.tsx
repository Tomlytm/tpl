import {
    Dropdown,
    Overlay,
    Card,
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
  
  
  
  export default function Courses() {
    return(
        <div>
            <Image src="../images/course1.svg" />
            <div>
                <div className="btn">Design</div>
                <div className="flex justify-between">
                    <div>4.7</div>
                    <div>(32.7)</div>
                </div>
                <div>Introduction to user research in UX Design</div>
                <div className="flex justify-between">
                    <div>23hrs 50mins</div>
                    <div>15 Lessons</div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div className="flex">
                            <div></div>
                            <div>Leonard Victor</div>
                        </div>
                    </div>
                    <div>15.00</div>
                </div>
            </div>
        </div>)
  }