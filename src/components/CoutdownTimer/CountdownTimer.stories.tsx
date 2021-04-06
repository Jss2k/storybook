
import { Story, Meta } from '@storybook/react/types-6-0';
import CountdownTimer from './CountdownTimer';

export default {
  title: 'CountdownTimer',
  component: CountdownTimer,
} as Meta;

const Template: Story<{
  label?: string,
  date: string,
}> = (args) => 
<div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
  <div style={{ display: 'flex', width: '320px', alignItems: 'center', justifyContent: 'center', margin: '0 auto'}}>
    <CountdownTimer {...args} />
  </div>
</div>

// export const TimerTime = Template.bind({});
// TimerTime.args = {
//   label: 'бронь',
//   minutes: 11,
// };

export const TimerDate = Template.bind({});
TimerDate.args = {
  label: 'бронь',
  date: 'April 8, 2021 01:50:00'
};