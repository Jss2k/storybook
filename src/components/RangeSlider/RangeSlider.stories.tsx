import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RangeSlider from './RangeSlider'

export default {
  title: 'RangeSlider',
  component: RangeSlider,
} as Meta;

const Template: Story<{
  min: number,
  max: number,
  step: number,
  value: number,

}> = (args) => 

  <RangeSlider 
    min={0}
    max={100}
    step={1}

    value={7}

  />





export const Step1 = Template.bind({});
Step1.args = {

};