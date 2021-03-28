import Task from './../Task/Task'

export interface ITaskListProps {
  loading: boolean,
  tasks: {}[],
  onArchiveTask?: (id?: string) => void,
  onPinTask?: (id?: string) => void,
}

const TaskList: React.FC<ITaskListProps> = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask
  }

  if (loading) {
    return <div className='list-items'>loading</div>
  }

  if (tasks.length === 0) {
    return <div className='list-items'>empty</div>
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task task={task} {...events} />
      ))}
  </div>
  )
}

export default TaskList