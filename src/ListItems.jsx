import React from "react";
import Style from "./ListItems.module.css";

const List=(props)=>{
    return(
        <>
            <div className={Style.cross}><span><i className="fa fa-times" aria-hidden="true" onClick={()=>{
                return props.onSelect(props.id)
            }}></i></span>
            {/* {props.onSelect(props.id)} will no work u hve to pass a call back function */}
            <li>{props.text}</li>
            </div>
        </>
    );
}

export default List;