import * as React from 'react'
import { FaReact, FaRegAddressBook } from "react-icons/fa";
import {Link} from '@reach/router';

const SideNav = (props:any)=>{
    
return (
   <div className="nav-container">
   <ul>
   <li >
      <Link to="/"><FaReact/>
      </Link>
      </li>
   <li >
      <Link to="/developer"><FaRegAddressBook/>
      </Link>
      </li>
      
      <li>
         <Link  to="/project">
            Project
         </Link>
      </li>
   </ul>
 </div>
 );
};
export default SideNav;