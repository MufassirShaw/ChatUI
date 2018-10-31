import React, { Component, Fragment} from "react";
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
const styles = {
   form:{
     margin: "50px auto",
     width: "50%",
     padding: "20px",
     paddingTop: "0",
     
   },
    progress:{
       width: "100%",
       marginBottom: "20px",
       padding: "0 20px",
       borderRadius: "5px"
   },
   err:{
        display: "block",
        padding:"10px",
        color: "#b71c1c",
        fontSize:"14px",
   },
};

class Form extends Component{
    constructor(){
        super();
        this.state = {
            isReg: false,
            loaderState : false,
            loginError: false,
            userError: ""
        }


    }
    
    loginError=()=>{
        this.setState({
            loaderState: false,
            loginError: true
        })

    }
    showLoader = () =>{
        this.setState({
            loaderState: true
        })
    }
    verify = (e)=>{
        let name = e.target.name.value.toUpperCase(),
        nickName = e.target.nickName.value,
        password = e.target.password.value;
    }

        
    render(){
        const {classes} = this.props;
        return(
            <Fragment>
                <Modal 
                    open= {true}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >                     
                    <Slide in direction="down" mountOnEnter unmountOnExit>
                        
                        <Paper className={classes.form} elevation={10}>
                        <LinearProgress variant="query" hidden={!this.state.loaderState} className={classes.progress}/>       
                        {   
                            this.state.isReg  
                            ? 
                            <LoginForm showLoader={this.showLoader} />
                            :
                            <SignUpForm/>
                        }    
                        {
                            this.state.loginError
                            ?
                            <Typography className={classes.err} variant="title">
                                <strong> Oops! </strong> You aren't Registered with us :( 
                            </Typography> 
                            :""
                        }
                        {
                            this.state.userError !==""
                            ?
                            <Typography className={classes.err} variant="title">
                                <p>{ this.state.userError} </p>  
                            </Typography> 
                            :""
                        }

                            <Typography 
                                variant="subheading"
                                color="primary" 
                                onClick= {()=>{this.setState({isReg: !this.state.isReg, loginError: false})}}
                                href="#" 
                                component="a" 
                                gutterBottom>
                                {this.state.isReg?" Signup" : " Sign In"} 
                            </Typography>           
                        </Paper>
                    </Slide>
                </Modal>
            </Fragment>
        );
    }
};


export default withStyles(styles)(Form);
 

 const SignUpForm = (props)=>{
   return (
        <Fragment> 
                <div>
                    <Grid container component='form'  style={{paddingTop:"20px",}}
                        onSubmit={(e)=>{ 
                            e.preventDefault();
                        }} 
                        spacing={16} 
                    >
                    <Grid item md={3} sm={1}> </Grid>
                        <Grid item component='div' className='avatarContainer' md={6} xs={10} >
                            <Typography 
                                variant="display1"
                                align="center" 
                                color="primary"
                                gutterBottom
                                >SignUp Here
                            </Typography>
                            <div className="avatar"></div>
                        </Grid>

                        <Grid item md={3} sm={1}> </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth
                                required
                                placeholder="User name.."
                                label="Name"
                                id="name"
                                name="name"
                            /> 
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth
                                required
                                placeholder="What Should We Call You..."
                                label="Nick Name"
                                id="nick name"
                                name="nickName"
                            /> 
                        </Grid>
                        <Grid xs={12} item>
                            <TextField 
                                fullWidth
                                required
                                placeholder="Password.."
                                label="Password"
                                id="password"
                                type="password"
                                name="password"
                            /> 
                        </Grid>
                        <Grid item xs={12}>
                            <Button  
                                name="btn"
                                type="submit" 
                                variant="contained" 
                                color="primary"
                                fullWidth
                                style = {{marginBottom:"10px"}}
                                >
                                Submit 
                            </Button> 
                        </Grid>
                        
                    </Grid>                    
                
                </div>

        </Fragment>
    );

}


const LoginForm = (props)=>{
    return (
        <Fragment> 
                <div className="loginForm">
                    <Grid 
                        container 
                        component='form'  
                        style={{paddingTop:"20px",}}
                        onSubmit={(e)=>{ 
                            e.preventDefault(); 
                            let name = e.target.name.value.toUpperCase(),
                                password = e.target.password.value;
                            // e.target.name.value="";
                            // e.target.password.value=""
                        }} 
                        justify="center" 
                        spacing={16} 
                    >
                        <Grid item md={3} sm={1}> </Grid>
                        <Grid item component='div' className='avatarContainer' md={6} xs={10} >
                            <Typography 
                                variant="display1"
                                align="center" 
                                color="primary"
                                gutterBottom
                                >Login Here</Typography>
                            <div
                                className="avatar"  
                            ></div>


                        </Grid>
                        <Grid item md={3} sm={1}> </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth
                                required
                                placeholder="User name.."
                                label="Name"
                                id="name"
                                name="name"
                            /> 
                        </Grid>
                        <Grid xs={12} item>
                            <TextField 
                                fullWidth
                                required
                                placeholder="Password.."
                                label="Password"
                                id="password"
                                type="password"
                                name="password"
                            /> 
                        </Grid>
                        <Grid item xs={12} >
                            <Button 
                                name="btn"
                                type="submit" 
                                fullWidth 
                                variant="contained" 
                                color="primary"
                                style = {{marginBottom:"10px"}}
                                >
                                Submit 
                            </Button> 
                        </Grid>
                    </Grid>                   
                
                </div>

        </Fragment>
    );

}

