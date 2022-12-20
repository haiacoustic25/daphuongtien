import NewPage from './NewPage';

interface Modules {
  routeProps: {
    key: string;
    path: string;
  };
  component: () => JSX.Element;
}

const newsModule: Modules = {
  routeProps: {
    key: '/',
    path: '/',
  },
  component: NewPage,
};

export default newsModule;
