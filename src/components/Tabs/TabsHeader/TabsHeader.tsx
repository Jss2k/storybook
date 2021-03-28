import TabHeaderItem from './../TabHeaderItem/TabHeaderItem'

import './TabsHeader.scss'

interface Tab  {
  text: string;
  onClick: () => void
}

export interface ITabsHeader {
  tabs: Tab[],
  activeIndex: number;
  onTabClick: (index: number) => void;
}

const TabsHeader: React.FC<ITabsHeader> = ({ tabs, activeIndex, onTabClick }) => {
  function handleClick(index: number) {
    onTabClick(index)
  }

  return (
    <div className="tabs-header__container">
      {tabs.map((tab, index) => (
        <div className="tabs-header__header-item-container" key={index}>
          <TabHeaderItem
            text={tab.text}
            onClick={() => handleClick(index)}
            active={index === activeIndex}
          />
        </div>
      ))}
    </div>
  )
}

export default TabsHeader