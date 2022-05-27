import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import EnhancedTable from '../../components/table/Table';

type Task = {
  id: number;
  subject: string;
  project: string;
  status: number;
  assignee: string
  "Due date": string;
}

const TaskList = ():ReactJSXElement => {
  const title = "Task Details";
  const tasks: Task[] = [
    {
      id: 1,
      subject: "something",
      project:"xfiles",
      status: 125,
      assignee: "Bones",
      "Due date": new Date().toLocaleString()
    },
    {
      id: 5,
      subject: "something",
      project:"xfiles",
      status: 159,
      assignee: "Bones",
      "Due date": new Date().toLocaleString()
    },
    {
      id: 2,
      subject: "something",
      project:"xfiles",
      status: 23,
      assignee: "Bones",
      "Due date": new Date().toLocaleString()
    },
    {
      id: 3,
      subject: "something",
      project:"xfiles",
      status: 18,
      assignee: "Bones",
      "Due date": new Date().toLocaleString()
    },
    {
      id: 4,
      subject: "something",
      project:"xfiles",
      status: 7,
      assignee: "Bones",
      "Due date": new Date().toLocaleString()
    }
  ];

  return EnhancedTable(title, tasks );
}

export default TaskList;
