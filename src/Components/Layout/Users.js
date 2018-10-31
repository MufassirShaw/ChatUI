import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from "@material-ui/core/Avatar";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
const Styles = {
    userContainer:{
        height:"100%",
        overflow:"hidden",
    },
    usersList:{
        overflowY:"auto",
        minHeight:"80%",
        '&::-webkit-scrollbar-track':{
            boxShadow: "inset 0 0 6px  rgba(0,0,0,0.3)",
            borderRadius: "20px",
            backgroundColor: "#ccc",
        },
        '&::-webkit-scrollbar':{
            width: "12px",
            backgroundColor: "#ccc",
        },
        '&::-webkit-scrollbar-thumb':{
            borderRaduis: "20px",
            backgroundColor: "#f5f5f5",
            backgroundImage: `-webkit-gradient(linear,
                left bottom,
                left top,
                color-stop(0.44, rgb(122,153,217)),
                color-stop(0.72, rgb(73,125,189)),
                color-stop(0.86, rgb(28,58,148)));
            `,
            borderRadius:"20px"
        }

    }
}

export default withStyles(Styles)(
    class Users extends React.Component{
        constructor(){
            super();
            this.state = {
                users:[]
            }
        }
        
    componentDidMount() {
                
    }
    render(){
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Paper elevation={8}
                    classes={
                        {
                            root: classes.userContainer,
                        }
                    }
                >
                    <Typography variant="display1" align="center" style={{paddingTop:"10px"}} gutterBottom > Users </Typography>
                    <List  component="nav" className={classes.usersList} >
                        {   this.state.users.length>0
                            ?
                            this.state.users.map((user,i)=>{
                                return <User user={user} key={i}/>;
                            }) 
                            :
                            <Typography variant="subheading" color="textSecondary" gutterBottom align="center">
                                <strong>  No One Connected yet</strong>
                             </Typography>
                        }
                    </List>
                </Paper>
            </React.Fragment>
        );
    }
})




const User =(props)=>{
    const {user} = props;
    return(

        <React.Fragment>
            <ListItem 
                button 
                onClick={
                    (e)=>{
                    }
                }     
            >
                <ListItemAvatar >
                    <Avatar  src={`https://api.adorable.io/avatars/89/${user.nickName}@adorable.io.png`}/>
                </ListItemAvatar>
                <ListItemText
                    primary={user.nickName}
                />
            </ListItem>
            <Divider inset/>
        </React.Fragment>
    );

}