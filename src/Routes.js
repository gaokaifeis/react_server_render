import Home from './containers/Home';
import Translation from './containers/Translation';
import App from './App';
import NotFound from './containers/NotFound';


export default [
    {
        path: '/',
        component: App,
        key: 'app',
        loadData: App.loadData,
        routes:[
            {
                path: "/",
                component: Home,
                exact: true,
                key: 'home',
                loadData: Home.loadData,
                
            },
            {
                path: "/translation",
                component: Translation,
                key: 'translation',
                loadData: Translation.loadData
            },
            {
                component: NotFound
            }
        ]
    }
];