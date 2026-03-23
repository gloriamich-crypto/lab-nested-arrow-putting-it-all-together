function createLoginTracker(userInfo) {
  let attemptCount = 0; 
  const maxAttempts = 3;
   return (inputPassword) =>{
    if (attemptCount >= 3)
      return "Account locked, too many attempts.";
  
  if (inputPassword === userInfo.password) {
    attemptCount = 0; 
    return "Successful Login";
  } else {
    attemptCount++;
    if (attemptCount >= 3) {
      return "Account locked. Too manny failed attempts.";
    }
  
  
    return `Incorrect  password. Attempts remaining: ${maxAttempts - attemptCount}`;
  }
  };
   }
  const account = createLoginTracker({ username: "Glo", password: "123"});

  console.log(account("wrong"));
  console.log(account("wrong"));
  console.log(account("wrong"));
  console.log(account("123"));



module.exports = createLoginTracker