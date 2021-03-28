import { Story, Meta } from '@storybook/react/types-6-0'

import  TabsHeader, {ITabsHeader} from './TabsHeader'

export default {
  title: 'TabsHeader',
  component: TabsHeader,
  argTypes: {
    tabs: { control: 'object' },
    activeIndex: { control: 'number' },
    onTabClick: { action: 'clicked' },
  },
} as Meta

const Template: Story<ITabsHeader> = (args) => <TabsHeader {...args} />

export const Base = Template.bind({})
Base.args = {
  tabs: [
    {
      text: 'Profile',
      onClick: () => console.log('Profile clicked'),
    },
    {
      text: 'Contact',
      onClick: () => console.log('Contact clicked'),
    },
    {
      text: 'Settings',
      onClick: () => console.log('Settings clicked'),
    },
  ],
  activeIndex: 0,
}