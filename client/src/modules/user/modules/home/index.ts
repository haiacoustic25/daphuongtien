import HomePage from './HomePage';

interface Modules {
  routeProps: {
    key: string;
    path: string;
  };
  component: () => JSX.Element;
}

const homeModules: Modules = {
  routeProps: {
    key: '/home',
    path: '/home',
  },
  component: HomePage,
};

export default homeModules;
