import { useCallback, useEffect } from "react";

export default function useClickOutside(ref, callback) {

    const handleClick = useCallback((e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    }, [ callback, ref ]);
    
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};