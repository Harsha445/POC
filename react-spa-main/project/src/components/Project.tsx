import * as React from 'react'
import {Link} from '@reach/router';

//import {appData} from "@api/api";

const Project = (props:any)=>{

    const {projectList =[]} = props;
    
return (
   <div className="project-container">
       <h1>Projects</h1>
       {
       projectList.map((item,idx) => {
           return (
               <div key={idx} className="project">
                   {item.name}
               </div>
           )
       })
    }
    <Link to="/">Back to Home</Link>
 </div>
 );
};
export default Project;