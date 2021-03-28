// DEBOUNCING
const debounce = (func, delay=1000) => {
  let timeoutId;  // anchor


  return (...args) => {   // return (arg1, arg2, arg3, ...) => {
    if ( timeoutId ) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args); //same as func(arg1, arg2, arg3);    apply automatically keep track of how many argument we need to pass through
    }, delay);
  }
}