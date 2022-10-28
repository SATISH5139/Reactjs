import React from "react";
import './App.css';
import {LikeButton} from './LikeButton';

let cssAlignleft = {marginLeft:'5px'}
export function Movie(props:any){
    return(
        <div className="movie">
            <img src={props.dp} style={cssAlignleft}/>
            <hr/>
            <strong>{props.movieName}</strong><LikeButton/>
            <br/>
            <strong>{props.rating}✪</strong>
        </div>
    )
}