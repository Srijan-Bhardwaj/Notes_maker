import React,{ useState } from "react";
import Style from "./ListItems.module.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";


const List = (props) => {

  return (
    <>
      <div className={Style.cross}>
        <span>
          <IconButton
            color="secondary"
            onClick={()=>{
                return props.onSingleClick(props.id);
            }}
            onDoubleClick={() => {
              return props.onSelect(props.id);
            }}
          >
            <DeleteIcon fontSize="small"/>
          </IconButton>
        </span>
        {/* {props.onSelect(props.id)} will no work u hve to pass a call back function */}
        <li style={{textDecoration: props.line?"line-through":"none"}}>{props.text}</li>
      </div>
    </>
  );
};

export default List;