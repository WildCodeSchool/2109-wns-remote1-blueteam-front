import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import EnhancedTable from '../../components/table/Table';

type Task = {
  id: number;
  subject: string;
  project: string;
  status: string;
  assignee: string;
  'Due date': string;
};

const TaskList = (): ReactJSXElement => {
  const title = 'Task Details';
  const tasks: Task[] = [
    {
      id: 1,
      subject: 'Nain 1',
      project: 'Blanche Neige',
      status: 'Done',
      assignee: 'Simplet',
      'Due date': new Date().toLocaleString(),
    },
    {
      id: 2,
      subject: 'Nain 2',
      project: 'Blanche Neige',
      status: 'Doing',
      assignee: 'Prof',
      'Due date': new Date().toLocaleString(),
    },
    {
      id: 3,
      subject: 'Nain 3',
      project: 'Blanche Neige',
      status: 'To do',
      assignee: 'Joyeux',
      'Due date': new Date().toLocaleString(),
    },
    {
      id: 4,
      subject: 'Nain 4',
      project: 'Blanche Neige',
      status: 'To do',
      assignee: 'Dormeur',
      'Due date': new Date().toLocaleString(),
    },
    {
      id: 5,
      subject: 'Nain 5',
      project: 'Blanche Neige',
      status: 'To do',
      assignee: 'Grincheux',
      'Due date': new Date().toLocaleString(),
    },
    {
      id: 6,
      subject: 'Nain 6',
      project: 'Blanche Neige',
      status: 'To do',
      assignee: 'Timide',
      'Due date': new Date().toLocaleString(),
    },
    {
      id: 7,
      subject: 'Nain 7',
      project: 'Blanche Neige',
      status: 'To do',
      assignee: 'Atchoum',
      'Due date': new Date().toLocaleString(),
    }
  ];

  return EnhancedTable(title, tasks);
};

export default TaskList;
