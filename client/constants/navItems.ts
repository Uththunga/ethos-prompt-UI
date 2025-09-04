import { NavItem } from '../types/navigation';

export const NAV_ITEMS: NavItem[] = [
  { 
    path: '/', 
    label: 'Home', 
    exact: true,
    ariaLabel: 'Go to Home page'
  },
  { 
    path: '/solutions', 
    label: 'Solutions',
    ariaLabel: 'View Solutions'
  },
  { 
    path: '/prompt-library', 
    label: 'Prompt Library',
    ariaLabel: 'Browse Prompt Library'
  },
  { 
    path: '/prompting-guide', 
    label: 'Prompting Guide',
    ariaLabel: 'Learn about Prompting'
  },
  { 
    path: '/contact', 
    label: 'Contact Us',
    ariaLabel: 'Contact Us'
  },
];
