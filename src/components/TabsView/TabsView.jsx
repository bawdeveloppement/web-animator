import { useMemo } from "react"

const Tab = ({ name }) => (
    <div className="p-1 cursor-pointer border-r-2 border-l-2 rounded-t-sm border-t-2 border-gray-200 mr-1 bg-gray">{name}</div>
)
  
export default function TabsView ({ views = [] }) {
    // Memoised tabs for ergonomie
    const tabs = useMemo(() => {
      return views.map((view, index) => <Tab key={index} {...view}/>)
    }, [views])
  
    return <div className="bg-white flex flex-row pt-1 px-1 border-b border-gray-200">
      { tabs }
    </div>
}