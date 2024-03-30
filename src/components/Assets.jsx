// import React and useState and useEffect hooks
import React, { useState, useEffect } from 'react';
import AssetStrings from '../assets/strings/original/en-US/resources.json'

// define a custom hook named useStrings
function useStrings() {
  // declare a state variable called strings and initialize it with an empty array
  const [strings, setStrings] = useState({});

  // use the useEffect hook to fetch data from the json file
  useEffect(() => {
    setStrings(AssetStrings);
  }, []); // pass an empty array as the second argument to run the effect only once

  // return the strings state variable from the custom hook
  return strings;
}

//write an image hook

// export the custom hook
export { useStrings };
