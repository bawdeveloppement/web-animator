import { useEffect } from "react";

export default function useDidMount ( onMount, onUnMount ) {
    useEffect(() => {
        onMount && onMount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}