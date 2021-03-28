import { ReactNode, useState } from 'react'

import TabsHeader from '../TabsHeader/TabsHeader'

import './Tabs.scss'

interface Tabs {
  text: string;
  onClick: () => void;
  // renderContent?: () => ReactNode
}

// interface Tabs extend Tab {

// }

export interface ITabs {
  tabs: Tabs[];
}

const Tabs: React.FC<ITabs> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  function handleTabClick(index: number) {
    setActiveIndex(index)
  }

  return (
    <div className="tabs__container">
      <div className="tabs__header-container">
        <TabsHeader
          activeIndex={activeIndex}
          tabs={tabs}
          onTabClick={handleTabClick}
        />
      </div>
      <div className="tabs__content-container">
        {/* {tabs[activeIndex].renderContent()} */}
      </div>
    </div>
  )
}

export default Tabs