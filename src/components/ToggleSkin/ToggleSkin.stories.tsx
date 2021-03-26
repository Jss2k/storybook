import { Story, Meta } from '@storybook/react/types-6-0';

import ToggleSkin from "./ToggleSkin"

export default {
  title: 'ToggleSkin',
  component: ToggleSkin,
} as Meta;

export const Toogle: Story = (args) => <ToggleSkin {...args} />;


