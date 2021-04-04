import { useEffect } from "react";

export default function useUnMount ( onUnMount ) {
    useEffect(() => {
        return () => onUnMount && onUnMount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
