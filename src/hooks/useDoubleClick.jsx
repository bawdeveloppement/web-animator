import { useCallback, useEffect, useState } from "react";

export default function useDoubleClick (ref, callback, msDetector = 300 ) {
    const [ clickTimes, setClickTimes ] = useState([]);
    const [ sinceLastClick, setSinceLastClick ] = useState(0);

    useEffect(() => {
        if (clickTimes.length > 1) setSinceLastClick(clickTimes[ clickTimes.length - 1] - clickTimes[clickTimes.length - 2])
    }, [clickTimes])

    const handleClick = useCallback((e) => {
        if (ref.current && ref.current.contains(e.target)) {
            setClickTimes([ ...clickTimes, Date.now() ])
        }
    }, [ clickTimes, ref ]);

    useEffect(() => {
        if (sinceLastClick !== 0 && sinceLastClick < msDetector) {
            callback();
            setSinceLastClick(0)
            setClickTimes([])
        }
    }, [ sinceLastClick, callback, msDetector ])

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
}

// export default function useDoubleClick (ref, callback, msDetector = 300 ) {
//     const [ clickTimes, setClickTimes ] = useState([]);
//     const [ sinceLastClick, setSinceLastClick ] = useState(0);

//     useEffect(() => {
//         if (clickTimes.length > 1) setSinceLastClick(clickTimes[ clickTimes.length - 1] - clickTimes[clickTimes.length - 2])
//     }, [clickTimes])

//     useEffect(() => {
//         if (sinceLastClick !== 0 && sinceLastClick < msDetector) {
//             callback && callback()
//             setSinceLastClick(0)
//         }
//     }, [ sinceLastClick, msDetector, callback ])

//     return [
//         () => setClickTimes([ ...clickTimes, Date.now() ])
//     ]
// }