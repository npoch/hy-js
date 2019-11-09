// Use your dev tools to find the error in this code.
// Try setting breakpoints on different lines to view the values of the variables as the code runs

const checkIfUserIsTeenager = () => {
  const ageString = prompt("How old are you?");
	isATeenager(parseInt(age));
}

const isATeenager = (age) => {
	if (age < 13) {
		console.log("Not yet!");
	} else if (age > 19) {
		console.log("Not anymore!")
	} else {
		console.log("Yes, you're a teen!")
	}
}

checkIfUserIsTeenager();



// Fix the following code so that the console logs `Hello <YOUR NAME>`.
// Use your chrome dev tools to set breakpoints examine the call stack to find the error!

const sayHello = (name) => {
	const greeting = buildGreetingString(name);
	return greeting;
}

const buildGreetingString = (name) => {
	const formattedName = capitalizeString(name);
	return `Hello ${formattedName}`;
}

const capitalizeString = (name) => {
	const capitalizedString = name.toUpperCase();
	return capitalizedString;
}


const greeting = sayHello();

console.log(greeting);
