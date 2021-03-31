import { Story, Meta } from '@storybook/react/types-6-0';
import Stepper from './Stepper';

export default {
  title: 'Stepper',
  component: Stepper,
} as Meta;

const Template: Story<{
  steps: number,
  currentStep: number
}> = (args) => <div style={{
                display: 'flex',
                width: '314px',
                }}>
                    <Stepper {...args} />
                </div>

export const Step1 = Template.bind({});
Step1.args = {
  steps: 4,
  currentStep: 1
};

export const Step2 = Template.bind({});
Step2.args = {
  steps: 4,
  currentStep: 2
};

export const Step3 = Template.bind({});
Step3.args = {
  steps: 4,
  currentStep: 3
};

export const Step4 = Template.bind({});
Step4.args = {
  steps: 4,
  currentStep: 4
};
