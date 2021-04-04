import { cloneElement, useEffect, createRef, useState } from 'react'

export const Animator = ({ keyframes, timing, handleClick, children }) => {
    const childrenRef = createRef();
    const element = cloneElement(children, { props: children.props, ref: childrenRef })

    useEffect(() => {
        if (childrenRef && childrenRef.current) {
            childrenRef.current.animate(keyframes, timing);
        }
    }, [ keyframes, timing, childrenRef ])

    return element
}

export const useAnimator = (ref, { keyframes, timing }) => {
    const [ animation, setAnimation ] = useState()

    useEffect(() => {
        if (ref && ref.current) {
            let animation = ref.current.animate(keyframes, timing )
            animation.pause();
            setAnimation(animation)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log(animation);
    })


    return animation
}