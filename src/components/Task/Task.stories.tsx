import { Story, Meta } from '@storybook/react/types-6-0'


import Task, { ITaskProps } from './Task'

export default {
  title: 'Task',
  component: Task
} as Meta

const TemplateTask: Story<ITaskProps> = args => <Task {...args} />

export const Default = TemplateTask.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  }
}

export const Pinned = TemplateTask.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  }
}

export const Archived = TemplateTask.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED'
  }
}