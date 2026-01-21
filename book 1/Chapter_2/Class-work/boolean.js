let isVerified = true;
let isAdmin = false;
let isModerator = true;

// Check if the user is (verified AND admin) OR is a moderator
let hasSpecialAccess = (isVerified && isAdmin) || isModerator;

console.log(hasSpecialAccess);
VM903:8 true
undefined