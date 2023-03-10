function oddEven() {
  let number = parseInt(prompt("Enter an integer number:"));
  let result = number % 2 == 0;
  switch (result) {
    case true:
      document.write(`${number}  is even number`);
      break;
    case false:
      document.write(`${number}  is odd number`);
  }
}

oddEven();
