import * as express from 'express'
import routes from './routes/index'
import * as cors from "cors";

const corsOptions = {
    "origin": "*",
    "allowedHeaders": "*",
    "methods": "POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
};

export class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        /* create express js appplication */
        this.app = express();
        /* Configure application */
        this.config();
    }

    config():void {
        /* disable cors */
        this.app.use(cors(corsOptions));
        /* parse json in requests */
        this.app.use(express.json());
        /* routes, global input point */
        this.app.use(routes);
        /* 404 */
        this.app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
            res.status(404).end('<h1>Page not found</h1>');
        });

        /* server error */
        this.app.use(function (err: express.Errback, req: express.Request, res: express.Response, next: express.NextFunction) {
            res.status(500).end('Server error');
        });
    }
}