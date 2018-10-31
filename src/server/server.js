var app = require('express')();  //init express lib
var http = require('http'); 	// http module of node 
var server = http.Server(app); // making a server
var io = require("socket.io")(server); // passing the server to the instance of socket.io
var connUsers = [];
var connSockets = {}
app.get('/', function(req, res){  
});

io.on("connection",function(socket){

  socket.on("USER_CONNECTED", ({nickName})=>{
    let user = {nickName: nickName, id:socket.id};
    connSockets[nickName] = socket;
    connUsers.push(user);   
    io.sockets.emit("NEW_USER_ADDED",connUsers);
  });
 
  socket.on("NEW_MESSAGE",({sender,reciver,msg})=>{
      if(reciver){
        connSockets[reciver].emit("PRIVATE_MESSAGE",{sender,msg});
        console.log("Got a private Msg for "+ reciver);

      }else{
        console.log("community Message");
      }
  })


  socket.on('disconnect', function () {
    let newUsers = connUsers.filter(user=>{
      if(user.id!==socket.id){
        return user
      }else{
        delete connSockets[user.nickName]; //remove socket from the connSockets
        return false;
      }
    });
    connUsers = newUsers;
    io.sockets.emit("USER_DISCONNECTED",connUsers);
  });

  socket.on("LOGOUT",({id})=>{
    let newUsers = connUsers.filter(user=>{
      if(user.id!==id){
        return user
      }else{
        delete connSockets[user.nickName]; //remove socket from the connSockets
        return false;
      }
    })
    connUsers = newUsers;
    io.sockets.emit("USER_DISCONNECTED",connUsers);
  });

  socket.on("CREATE_ROOM",(data)=>{
    
  });

});


server.listen(8000, function(){
  console.log('listening on *:8000');
});

