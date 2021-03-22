const express=require('express');
app=express();
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>
{
  res.sendFile(__dirname+'/public/index.html');
})
const port=process.env.port||3010;
const http=app.listen(3010,(err)=>
{
   console.log(`Server is running at port ${port}`)
})
const io=require('socket.io')(http);
io.on('connection',(socket)=>
{
    socket.on('message',(msg)=>
    {
     socket.broadcast.emit('message',msg);
    })
})