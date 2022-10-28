
import React, {Component} from "react";
import notify from './notify.svg';
import styles from './Sample.module.css';


export let count:number=0;
export class Notifications extends Component{
 
    public mystyle:any = {height:'50px'}
    render(): React.ReactNode {
        return(
            <button>
                <img src={notify} style={this.mystyle}/>
                <span className={styles.badge}>{count++}</span>
             </button>
        )
    }
}