import { Story, Meta } from '@storybook/react/types-6-0';
import Input from './Input';


export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<{
  title?: string,
  type: string,
  value?: string,
  name: string,
  label?: string,
  placeholder: string,
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}> = (args) => 
  <div style={{ display: 'flex', width: '432px', }}>
    <Input {...args} />
  </div>









export const Step1 = Template.bind({});
Step1.args = {
  title: 'Заголовок инпута',
  type: 'text',
  name: 'Email',
  label: 'Поле для email',
  placeholder: 'Введите сюда свою почту',
};