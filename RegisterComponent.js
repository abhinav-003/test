import React from 'react';
 

const RegisterUrl = "http://localhost:3300/api/auth/register";

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:'',
            email:'',
            password:'',
            nameError: '',
            emailError: '',
            passwordError: ''
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
            
            
          

    }
     

    handleSubmit = () => {

        console.log(this.state)
        fetch(RegisterUrl,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then(this.props.history.push('/login'))
    }
         
           

    
    render(){
        return(
            <div className="container">
            <div className="panel panel-info">
                <div className="panel-heading">
                    Register
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <label>First Name</label>
                        <input name="name" value={this.state.name}
                        className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.nameError}</div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input name="name" value={this.state.name}
                        className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" value={this.state.email}
                        className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.emailError}
                     </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" value={this.state.password}
                        className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div style={{ fontSize: 12, color: "red" }}>
                     {this.state.passwordError}
                     </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input name="password" value={this.state.password}
                        className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="radio">
                       <label><input type="radio" name="optradio"/>Admin</label>
                    </div>
                    <div className="radio">
                    <label><input type="radio" name="optradio"/>User</label>
                    </div>

                    <button className="btn btn-success"
                    onClick={this.handleSubmit}>
                      Register
                    </button>
                </div>
            </div>
        </div>

        )
    }
}
export default Register;