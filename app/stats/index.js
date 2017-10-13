import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './stats.routes';
import generalStats from './general/general-stats.component';
import recordStats from './record/record-stats.component';
import StatsService from './stats.service';

export default angular.module('mibig.stats', [uiRouter])
  .config(routes)
  .component('mibigGeneralStats', generalStats)
  .component('mibigRecordStats', recordStats)
  .service('StatsService', StatsService)
  .name;
