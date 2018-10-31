import React from 'react';
import MainChat from "./MainChat";
import Users from "./Users";
import Header from "./Header.js";
import {withStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import push from "@immutable-array/push";
const Styles = {
    container:{
        height:"99vh",
        alignContent:"flex-start",
    },
    ht1:{
        height:"10%",
        marginBottom: "1%"
    },
    ht9:{
        minHeight:"88%",
        
    }
}

export default withStyles(Styles)(
    class Main extends React.Component{

        constructor(){
            super();
            this.state = {
                currentChat:{
                    thread:[],
                    reciver:null,
                    sender:null,
                    name:null,
                }
            }
        }
        
        render(){
            const {classes} = this.props;
            // console.log(socket)
            return (

                <React.Fragment>
                    <Grid container className={classes.container}>
                        <Grid item className={classes.ht1} xs={12}>
                            <Header /> 
                        </Grid>
        
                        <Grid 
                            item
                            xs={8} 
                            md={9}
                            className={classes.ht9}
                        >
                            <MainChat/>
                        </Grid>
                        <Grid 
                            item 
                            xs={4} 
                            md={3} 
                            className={classes.ht9}>
                            <Users />
                        </Grid>
                    </Grid>  
                </React.Fragment>
            );
        }
    }
);