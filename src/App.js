import React, { useState } from "react";
import Style from "./App.module.css";
import Dev from "./Formal_photo.jpg";
import List from "./ListItems";

const App = () => {
  const [Item, setItem] = useState("");   //if u don't give "" intitiall then it is not a controlled element and throws an error
  const [Items, setItems] = useState([]);

  const inputEvent = (e) => {
    setItem(e.target.value);
  };

  const add = (event) => {
      event.preventDefault();
      setItem("");
    setItems((e) => {
      return [...e, Item];
    });
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
                placeholder="Add a item"
                controlled="true"
                required
              ></input>
              <button type="submit"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
