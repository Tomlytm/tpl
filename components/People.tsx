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
  
  
  
  export default function People() {
    return(
        <div className="flex">
                    <Image className="pictures" src="../images/profile1.svg"/>
                    <Image className="pictures" src="../images/profile2.svg"/>
                    <Image className="pictures" src="../images/profile3.svg"/>
                    <Image className="pictures" src="../images/profile4.svg"/>
                    <Image className="pictures" src="../images/profile5.svg"/>
                </div>

    )
  }