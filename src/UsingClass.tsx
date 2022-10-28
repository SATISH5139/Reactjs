import React, {Component} from "react";
import myStyles from './Sample.module.css';

export class Toast extends Component{

    //Is a virtual function in Component class of React Framework
    render(): React.ReactNode {
        return(
            <div className={myStyles.boxStyle}>
                This is a toast message
            </div>
        )
    }
}