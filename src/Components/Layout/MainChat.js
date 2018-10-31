import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import Store from "./../../store/Store";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
const Styles = {
    chatContainer:{
        height:"100%",
        width:"94%",
        display:"flex",
        flexDirection:"column",
        justifyContent: "center",
        marginLeft:"1%",    
        overflow:"hidden", 
   },
   currentChatContainer:{
        height: "80%",
        backgroundColor:" rgba(255, 255, 255, .2)",
        borderRadius:"5px",
        overflowY:"auto",
        overflowX:"hidden",    
        '&::-webkit-scrollbar':{
            boxShadow:" inset 0 0 6px rgba(0,0,0,0.3)",
            backgroundColor: "#ccc",
            borderRadius:" 10px"
        },
        '&::-webkit-scrollbar-thumb':{
            borderRadius:" 10px",
            backgroundImage: `-webkit-gradient(linear,
                                               left bottom,
                                               left top,
                                               color-stop(0.44, rgb(122,153,217)),
                                               color-stop(0.72, rgb(73,125,189)),
                                               color-stop(0.86, rgb(28,58,148)))`
        }
        

   },

    formGridContainer:{
        height:"10%",

        // overflow:"hidden",

    },
    inputRoot:{
        height:"100%",
        width:"100%",
        borderRaduis: "5px"


    },
    input: {
        backgroundColor:"rgba(63, 81, 181,.4)",
        color:"#fff",
       paddingLeft:"2%",
       transition:"all .2s ease-out",
       "&:focus":{
        backgroundColor:"#fbfbfb",
        color:"#737373",
           
       },
       width:"100%",
       height:"100%"

    },
    buttonRoot:{
        borderRaduis: "5px",
        height:"100%",
        width:"100%",

    },
    heading:{
        height:"10%"
    }


}

export default withStyles(Styles)(
    class MainChat extends React.Component{
        constructor(){
            super();
        }

                 
        render(){
            const {classes}= this.props;
            return (
                <React.Fragment>
                    <div className={classes.chatContainer}>
                        <Paper component="div" elevation={2} className={classes.heading} > 
                            <Typography 
                                variant="display1" 
                                align="center" 
                                style={{padding:"10px"}}
                            >
                                SomeOne
                            </Typography>
                        </Paper> 


                        <div className={classes.currentChatContainer}> 
                           

                        </div> 
                       {/* End of the currentChat*/}
                        
                       {/* Start of chat form*/}
                       <Grid container
                            component="form" 
                            onSubmit={(e)=>{
                                e.preventDefault(); 
                            }} 
                            classes={
                                { 
                                container:classes.formGridContainer,
                                }
                            }

                            >
                            <Grid item md={10} xs={9}> 
                                <Input 
                                    type="text" 
                                    name="messageInput"
                                    disableUnderline 
                                    placeholder="Type your message here"
                                   classes={
                                        {   root:classes.inputRoot,
                                            input:classes.input,
                                            focused: classes.focused
                                        }
                                    }
                                />     

                            </Grid>    

                            <Grid item md={2} xs={3} style={{height:"100%"}}> 
                                <Button color="primary" variant="contained" className="sendIcon"
                                        classes={{
                                            root:classes.buttonRoot
                                        }}
                                        type="submit"
       
                                >
                                    <div style={{ display:"none",}}> </div> {/* just so the engine don't compline 
                                                                                about a required children prop*/}
                                </Button>
                            </Grid>
                                                        
                        </Grid>
                    </div>
        
                </React.Fragment>
            );
        }
})


