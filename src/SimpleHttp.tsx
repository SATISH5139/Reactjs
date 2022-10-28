import React,{Component} from "react";


export class WithHttp extends Component <{}, {data:any}>{
    constructor(props:any){
        super(props)
        this.state = {data:{}}
    }

    public getData(){
        let url = 'https://jsonplaceholder.typicode.com/posts/1'
        fetch(url).then((data)=>{data.json()})
                  .then((subdata)=>{
                                        console.log(subdata)
                                        this.setState({data:subdata})
                                    })
    }

    render(): React.ReactNode {
        return(
            <>            
            <button onClick={()=>this.getData()}>See data in console</button>
            <table>
                <tr>
                    <td>UserId: {this.state.data.userId}</td>
                    <td>UserId: {this.state.data.title}</td>
                    <td>UserId: {this.state.data.body}</td>
                </tr>
            </table>
            </>

        )
    }
}