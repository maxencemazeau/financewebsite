import react, { useEffect, useState } from 'react';

type StorageKey = string;


const useLocalStorage = (key: StorageKey, defaultValue: any) =>{

    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        } catch(error){
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key])

    function clearUserData(){
        localStorage.removeItem(key);
        setValue(defaultValue);
    }
    
    return[value, setValue, clearUserData];
}

export default useLocalStorage;