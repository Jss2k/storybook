import { Story, Meta } from '@storybook/react/types-6-0'

import Tabs, { ITabs } from './Tabs'

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    tabs: { control: 'object' },
  },
} as Meta

const Template: Story<ITabs> = (args) => <Tabs {...args} />

export const Base = Template.bind({})
Base.args = {
  tabs: [
    {
      text: 'Profile',
      onClick: () => <div>Profile Tab</div>,
    },
    {
      text: 'Contact',
      onClick: () => <div>Contact Tab</div>,
    },
    {
      text: 'Settings',
      onClick: () => <div>Settings Tab</div>,
    },
  ],
}