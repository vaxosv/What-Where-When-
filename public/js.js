socket = io.connect();


let name = prompt("enter the name")

socket.emit('name', name);
console.log(name);


socket.on("qestions", (data) => {
    console.log(data);
})