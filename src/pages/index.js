import Loadable from 'react-loadable';
import PageLoader from '../components/page-loader';

export const Home = Loadable({
  loader: () => import('./home'), loading: PageLoader
});

export const RemindersCalendar = Loadable({
  loader: () => import('./reminders-calendar'), loading: PageLoader
});

export const About = Loadable({
  loader: () => import('./about'), loading: PageLoader
});
