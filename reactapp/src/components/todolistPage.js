
import React from "react";
import "./todolistPage.css";
import Todo from "./todo";

function ToDoList(){
    return (
        <div className="container border border-primary rounded mt-5"
          style={{
              background:`url("../images/wallpaper.jpg")`,
              backgroundSize:`cover`
          }}
        >
           <Todo/>
        </div>
    )
}

export default ToDoList;
