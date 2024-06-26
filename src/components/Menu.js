import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export function Menu(){
    const[dropdown, setDropdown] =useState(false);

    const openCloseMenu = ()=>{
        setDropdown(!dropdown);
    }

    return(
      <Dropdown isOpen={dropdown} toggle={openCloseMenu}>
          <DropdownToggle caret>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="menu-icon" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
						</svg>
          </DropdownToggle>
          <DropdownMenu>
              <DropdownItem>Inicio</DropdownItem>
							<DropdownItem>Contacto</DropdownItem>
							<DropdownItem>Sobre Nosotros</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    )
}

export default Menu;