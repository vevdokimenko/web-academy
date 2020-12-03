const userFirstName = prompt('What is your name?');
if  (userFirstName && userFirstName.length > 2) {
    alert('Hello, '+ userFirstName + '!\nWelcome!');
} else {
    alert('Please reload the page and enter your name!');
}
console.log (userFirstName.length);