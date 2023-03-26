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
  
  
  
  export default function ClassesSection() {
    return(
        <div className="flex">
            <div>
                <div className="high-quality">high quality video, audio & live classes</div>
                <div className="high-quality-text">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</div>
                <div className="btn"> View Courses</div>
                    <div className="flex">
                        <div className="btn">Audio Classes</div>
                        <div className="btn">Live Classes</div>
                    </div>
                    <div className="flex"> 
                        <div className="btn">Recorded Classes</div>
                        <div className="btn">50+ Notes</div>
                    </div>
            </div>
            <div>
                <Image src="../images/high-quality.svg" />
            </div>
            
        </div>

    )
  }