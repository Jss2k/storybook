import { Story, Meta } from '@storybook/react/types-6-0'

import TabHeaderItem, { ITabHeaderItem } from './../TabHeaderItem/TabHeaderItem'

export default {
  title: 'TabHeaderItem',
  component: TabHeaderItem,
  argTypes: {
    text: { control: 'text' },
    active: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: Story<ITabHeaderItem> = (args) => <TabHeaderItem {...args} />

export const Base = Template.bind({})
Base.args = {
  text: 'Profile',
}