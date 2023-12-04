import { Router, Request, Response,  } from 'express';

const routes: Router = Router();

routes.get('/hello', (req: Request, res: Response) => {
    res.send('Hello World!');
});

routes.get('/hello/:name', (req: Request, res: Response) => {
    res.send(`Hello ${req.params.name}`);
})

routes.post('/user', (req: Request, res: Response) => {

})

export default routes;
