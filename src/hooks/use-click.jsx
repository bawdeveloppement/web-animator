import { useEffect } from "react";

const useClick = ( ref, handleClick ) => {
    useEffect(() => {
        const currentRef = ref.current;
        currentRef.addEventListener('click', handleClick);
        return () => {
            currentRef.removeEventListener('click', handleClick);
        };
    }, [ ref, handleClick ]);
};

export default useClick;