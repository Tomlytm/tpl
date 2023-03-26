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
import WhyBestContent from "./WhyBestContent";
  
  
  
  export default function WhyBestSection() {
    return(
        <div className="flex justify-between">
            <div>
                <div>This is why we are best from others</div>
                <div>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</div>
                <Image width={'712px'} height={'475px'} src="../images/whybestimage.svg" />
            </div>
            <div>
                <WhyBestContent />
            </div>
        </div>
    )
  }