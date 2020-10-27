import {useEffect, useState} from "react";

const useDebounce = (value, delay) => {
const [debounceValue, setDebouncedValue] = useState(value);

useEffect(
    () => {
    const debounceTimeout = setTimeout(() =>{

    setDebouncedValue(value)}, delay)
 
    
    return () => {
    clearTimeout(debounceTimeout);
    }
},
[value, delay]
)
return debounceValue;
}
export default useDebounce;