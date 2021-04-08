import { forwardRef, useMemo } from "react";

const PanelHeader = ({ title, children }) => {
    return <div className="px-2">
        <span className="border-b-2 border-gray-600">{title}</span>
        {children}
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
            borderTop = false,
            titleChidren,
            childrenClass = "flex-1 overflow-auto px-2"
        }, 
        ref
    ) => {
        const classNames = useMemo(
            () => "flex flex-col border-gray-300 overflow-auto"
            .split(" ")
            .concat([ borderRight === true ? "border-r" : "",  borderLeft === true ? "border-l-2" : "", borderBottom === true ? "border-b-2" : "", borderTop === true ? "border-t-2" : "" ])
            .join(" "), [ 
                borderLeft, 
                borderRight, 
                borderBottom, 
                borderTop
            ])
        return (
            <div ref={ref} className={classNames} style={{ minWidth: width, minHeight: height }}>
                { title && typeof(title) === "string" ? <PanelHeader title={title} /> : <>{title}</> }
                <div className={childrenClass}>
                    {children}
                </div>
            </div>
        );
});

export default Panel;