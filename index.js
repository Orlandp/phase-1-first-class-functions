function receivesAFunction(callback) {
    callback(); // Invoke the callback function passed as an argument
  }
  receivesAFunction(() => console.log("Callback function called!"));
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function!");
    }
    return namedFunction; // Return the named function
  }
  const fn = returnsANamedFunction();
  fn(); // Executes namedFunction and logs "I am a named function!"
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am an anonymous function!");
    };
  }
  const anonFn = returnsAnAnonymousFunction();
  anonFn(); // Executes the anonymous function and logs "I am an anonymous function!"
          