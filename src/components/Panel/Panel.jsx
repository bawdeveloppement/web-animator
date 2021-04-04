import { forwardRef, useMemo } from "react";

const PanelHeader = ({ title }) => {
    return <div>
        <span className="border-b-2 border-gray-600">{title}</span>
    </div>
}

const Panel = forwardRef(
    (
        { 
            children, 
            title, 
            width = 200, 
            height = 200, 
            borderLeft = false, 
            borderRight = false, 
            borderBottom = false, 
            borderTop = false 
        }, 
        ref
    ) => {
        const classNames = useMemo(
            () => "flex flex-col px-2 py-1 border-gray-300"
            .split(" ")
            .concat([ borderRight && "border-r",  borderLeft && "border-l-2", borderBottom && "border-b-2", borderTop && "border-t-2" ])
            .join(" "), [ 
                borderLeft, 
                borderRight, 
                borderBottom, 
                borderTop
            ])
        return (
            <div ref={ref} className={classNames} style={{ minWidth: width, minHeight: height }}>
                <PanelHeader title={title}/>
                <div className="flex-1">
                    {children}
                </div>
            </div>
        );
});

export default Panel;