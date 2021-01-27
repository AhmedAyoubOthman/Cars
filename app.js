console.log(`hello my name is ahmed and this is my firt work on js`);

var message="";
var favoretKind = prompt(`what is your favoret kind?`);
console.log(favoretKind);

if (favoretKind ==  `electric`){
    message = `You are smart`;

}else if (favoretKind == `Hybrid`){
    message = `You are opin minded`;

}else if (favoretKind == `Petrol`){
    message = `You neen to learn more about technology`;

    
}else{
    message = `welcome`
}

document.write(`<h3>` + message + `</h3>`);

