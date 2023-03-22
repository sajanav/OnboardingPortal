import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Overview',
    icon: 'home',
    link: '/overview'
  },
  {
    label: 'Manage',
    isTitle: true
  },
  {
    label: 'Teams',
    icon: 'users',
    link: '/manage-teams'
  },
  {
    label: 'Users',
    icon: 'user',
    link: '/manage-users'
  },
  {
    label: 'Curriculums',
    icon: 'book',
    link: '/manage-curriculums'
  },
  {
    label: 'Tasks',
    icon: 'table',
    link: '/manage-tasks'
  },
  {
    label: 'Reports',
    isTitle: true
  },
  {
    label: 'Course Completion',
    icon: 'map',
    link: '/course-completion' 
  },
  {
    label: 'Task Completion',
    icon: 'check-square',
    link: '/task-completion' 
  },]
