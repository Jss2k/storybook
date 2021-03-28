import { Story, Meta } from '@storybook/react/types-6-0'

import * as TaskStories from '../Task/Task.stories'
import TaskList, { ITaskListProps } from './TaskList'

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>]
} as Meta

const TemplateTaskList: Story<ITaskListProps> = args => <TaskList {...args} />

export const Default = TemplateTaskList.bind({})
Default.args = {
  tasks: [
    { ...TaskStories.Default.args, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args, id: '6', title: 'Task 6' },
  ],
}

export const WithPinnedTasks = TemplateTaskList.bind({});
WithPinnedTasks.args = {
  tasks: [
    // ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = TemplateTaskList.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = TemplateTaskList.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};