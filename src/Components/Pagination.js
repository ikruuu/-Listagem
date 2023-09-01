import React, { useState } from "react";
import styles from './Table/Table.module.css';


const Pagination = ({ pages, setCurrentPage }) => {
    
    return(
        <div>
            {Array.from(Array(pages), (item, index) => {
                return(
                <button className="button" value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
                )
            })}        
        </div>        
   )
    
}

export default Pagination;