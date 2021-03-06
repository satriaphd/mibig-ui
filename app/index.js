import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './css/style.css';

import routes from './routes.js';
import start from './start';
import stats from './stats';

angular.module('mibig', [uiRouter, start, stats]).config(routes);
