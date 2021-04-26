import React, { useState } from "react";
import {useEffect} from 'react';
import Style from "./App.module.css";
import Dev from "./Formal_photo.jpg";
import List from "./ListItems";
import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from '@material-ui/icons/AddBox';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  icon:{
    fontSize:'2em',
    '&:hover':{
      color:'green'
    }
  }
})

const getItemsfromLocalStorage=()=>{
  let list = JSON.parse(localStorage.getItem('todolist'));
  if(list.length>0){
    return list;
  }
  else{
    console.log("hello");
    return ['Welcome, create your today\'s to do list.'];
  }
}
const App = () => {
  const [Item, setItem] = useState("");   //if u don't give "" intitiall then it is not a controlled element and throws an error
  const [Items, setItems] = useState(getItemsfromLocalStorage());

  useEffect(()=>{
    localStorage.setItem('todolist',JSON.stringify(Items));
  },[Items]);
  const inputEvent = (e) => {
    setItem(e.target.value);
  };

  const add = (event) => {
      event.preventDefault();
    setItems((e) => {
      return [...e, Item];
    });
    setItem("");
    // console.log(Items);
  };

  const deleteItem = (id)=>{
    //   console.log("deleted");
        setItems((prev)=>{
            return  prev.filter((ele,index)=>{
                return index!==id;
            });
        });
    }

  const classes = useStyles();

  return (
    <>
      <div className={Style.container}>
        <div className={Style.innerContainer}>
          <div className={Style.card}>
            <div className={Style.header}>
              <div className={Style.heading}>ToDo List</div>
            </div>
            <div className={Style.input}>
                <form onSubmit={add}> 
              <input
                type="text"
                value={Item}
                name="Item"
                onChange={inputEvent}
                placeholder="Add an item"
                controlled="true"
                required
              ></input>
              <button type="submit">
              <AddBoxIcon color="primary" className={classes.icon}/>
              </button>
              </form>
            </div>
            <div className={Style.lists}>
              <ul>
                {Items.map((value,index)=>{
                    return (
                        <>
                            <List text={value} id={index} key={index} onSelect={deleteItem}/>
                        </>
                    )
                })}
              </ul>
            </div>
          </div>
          <div className={Style.demo}>
            <div className={Style.image}>
              <img src={Dev} alt="photo" />
            </div>
            <div className={Style.developer}>Srijan Bhardwaj</div>
            <ol className={Style.use}>
              <li>Click one time delete icon to enable/disable strike through on content.</li><br/>
            <li>Double click delete icon to remove the content.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

