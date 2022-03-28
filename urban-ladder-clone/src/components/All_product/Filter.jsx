import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/themes/light.css';
import { Brand } from './Brand';
import { Size } from './Size';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const Filter = () => {
   
  return (
    
         <div style={{display:"flex",justifyContent:"center",border:"1px solid black"}}>
            
            <div className="tooltip_city_name">
            <Tippy offset={[10,1]}  placement= "bottom" theme="light"  content={<Brand></Brand>} interactive={true} >
                    <p>Brand</p>
                    </Tippy>
                    <ExpandMoreIcon/>
                    </div>
               <div>
                    {/* <Tippy offset={[150,17]} theme="light"  content={<Size></Size>}  interactive={true}>
                    <p>Size</p>
                    </Tippy>
                    */}
                   </div>   
           
                    </div>
                  
          
            
          
   
  )
}
