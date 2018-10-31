import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from "@material-ui/core/styles";
// import { Icon } from "@material-ui/core";
const Styles = {
  toolBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between"
  },
  link:{
    textDecoration: "none",
    color: "#fff",
    fontWeight: "400",
    fontSize: "22px",
  }
};
const Header = (props)=>{
   const {classes} = props;
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar className={classes.toolBar}>
            <Typography variant="title" color="inherit">
              {"Defualt's chat"}
            </Typography>
            <Typography 
                className={classes.link} 
                variant="headline" 
                component="a" 
                href="#"
                > 
                Logout 
             
                <i className="logout"> </i>
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
export default withStyles(Styles)(Header);