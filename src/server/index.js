import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from "react-router-config";
import Routes from '../Routes';
import { render } from './utils';
import { getServerStore } from '../store';


const app = express();
app.use(express.static('public'))

// 代理
app.use('/api', proxy('127.0.0.1:8083', {
    proxyReqPathResolver: function (req) {
      return `/api/${req.url}`;
    }
}));

app.get('*', (req, res) => {
    const store = getServerStore(req);
    const matchedRoutes = matchRoutes(Routes, req.path);
    const promises = [];
    matchedRoutes.forEach(item => {
        if(item.route.loadData) {
            const promise = new Promise((resolve, reject) => {
                item.route.loadData(store).then(resolve).catch(resolve);
            })
            promises.push(promise)
        }
    })
    Promise.all(promises).then(data => {
        const context = {css:[]};
        const html = render(store, Routes, req, context);
        if(context.action == 'REPLACE') {
            res.redirect(301, context.url)
        } else if(context.NotFound) {
            res.status(404);
            res.send(html);
        } else {
            res.send(html);
        }
    })
})

const server = app.listen(3000);