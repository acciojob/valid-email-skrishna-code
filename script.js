function validEmail(str) {
  //your JS code here.
	let check="/^[\w.-]+@[\w-]+(?:\.[\w-]+)+$/";
	 return check.test(str);
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
