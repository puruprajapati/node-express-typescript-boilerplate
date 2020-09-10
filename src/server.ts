import 'dotenv/config';
import App from './app';
import AuthRoute from './api/routes/auth.route';
import IndexRoute from './api/routes/index.route';
import UsersRoute from './api/routes/users.route';
import validateEnv from './api/utils/validateEnv';

validateEnv();

console.log(`hello word nepal`);

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
]);

app.listen();
