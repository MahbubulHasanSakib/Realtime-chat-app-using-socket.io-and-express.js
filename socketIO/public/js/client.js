const socket=io();
let username;
while (!username) {
    username=prompt("Enter name:").trim();
}
const button=document.querySelector("button");
const textarea=document.querySelector("textarea");
button.addEventListener('click',()=>
{
  let message=textarea.value.trim();
  if(message.length>0)
  {
      const obj={
          name:username,
          mess:message
      }
      call(obj,'outgoing')
      socket.emit('message',obj);
  }
})
function call(obj,msgtype)
{
    const newdiv=document.createElement('div');
      const msg=`<h5>${obj.name}</h5><p>${obj.mess}</p>`
      newdiv.innerHTML=msg;
      newdiv.classList.add(msgtype);
      const chatBottom=document.querySelector(".chat_bottom");
      chatBottom.appendChild(newdiv);
      textarea.value="";
      chatBottom.scrollTop=chatBottom.scrollHeight;
   
}
socket.on('message',(msg)=>
{
    call(msg,"incoming")
})