import React,{Component} from "react";

export class Login extends Component<{}, {username:string, password:string}>{

    public toast: any =<p></p>
    constructor(props:any){
        super(props)
       this.state = {username:'' , password:''}
    }
    render(): React.ReactNode {
        return(
            <div>
                Enter Username: <input type='text' placeholder="Enter username" onChange={(e)=>this.setUserName(e)}/>
                <br/>
                Enter Password: <input type='password' placeholder="Enter password" onChange={(e)=>this.setPassword(e)}/>
                <br/>
                <button onMouseEnter={(e)=>this.ChangeBackground(e)} onMouseOut={(e)=>this.ResetBackground(e)} onClick={()=>this.VerifyLogin()}>Login</button>
                {this.toast}

               

            </div>
        )
    }

    
    public VerifyLogin(){
        
        if (this.state.username== 'admin' && this.state.password == 'nimda'){
            this.toast = <OkToast/>
            // alert('Login successful!')

        }
        else{
            this.toast = <ErrorToast/>
            // alert('Login Failed')
        }
        this.forceUpdate()
       
    }
    public setUserName(e:any){
        console.log(e.target.value)
        this.setState({username:e.target.value})
    }

    public setPassword(e:any){
        this.setState({password:e.target.value})
    }
    public ChangeBackground(e:any){
        console.log(e.target.style.backgroundColor='green');
        // this.ChangeBackground({onmouseenter:e.target.value})
    }
    public ResetBackground(e:any){
        console.log(e.target.style.backgroundColor='red');
        // this.ResetBackground({onmouseout:e.target.value})
    }
}

export function OkToast(){
    return(
        <div className="success">Login Successful</div>
    )
}

export function ErrorToast(){
    return (
        <div className="error">Login Failed</div>
    )
    
}