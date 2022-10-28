import React from "react";
import './App.css';

let cssAlignleft = {marginLeft:'5px'}
export function User(props:any){
    return(
        <div className="user">
            <img src={props.dp} style={cssAlignleft}/>
            <hr/>
            <strong>UserName:{props.userName}</strong>
            <br/>
            <strong>pwd:{props.pwd}</strong>
        </div>
    )
}