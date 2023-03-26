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
  import Courses from './Courses'
  
  
  
  export default function BrowseCourses() {
    return(
        <div>
            <div>Browse Our Popular Courses</div>
            <div>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</div>
            <div className="flex"> 
                <div>All Categories</div>
                <div>Design</div>
                <div>Development</div>
                <div>Marketing</div>
            </div>
            <div>
                <Courses />
            </div>
        </div>)
  }