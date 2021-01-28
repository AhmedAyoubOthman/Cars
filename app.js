console.log('hello my name is ahmed and this is my firt work on js');

/* var message="";
var favoriteKind = prompt('what is your favorite type of cars?');
console.log(favorietKind);

 if (favoriteKind ==  'electric'){
    message = 'You are smart';

}else if (favoriteKind == 'Hybrid'){
    message = 'You are opin minded';
}else if (favoriteKind == 'Petrol'){
    message = 'You neen to learn more about technology';

    
}else{
    message = 'welcome'
}

document.write('<h3>' + message + '</h3>'); */

var order = prompt('What is your favorite type of vehicles electric or hybrid?')

while (order !== 'hybrid' && order !== 'electric') {
    order = prompt('Please write only electric or hybrid')
console.log(order)
}
console.log(order)

var vehicle = '';

if (order === 'hybrid') {
    vehicle = '<img src= "pic/hybrid-car.jpg"/> ';

} else if (order === 'electric') {

    vehicle = '<img src="pic/electric-car.jpg"/>' ;


}

console.log (result)

var result ="";


var numBrands =prompt('How many Brands do you want to see?');

for(var i = 0 ; i<numBrands ; i++){
    console.log(i);
    result = result + vehicle;
    console.log (result)
}

console.log (result)
document.write(result);