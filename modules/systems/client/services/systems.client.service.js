(function () {
  'use strict';

  angular
    .module('systems.services')
    .factory('SystemsService', SystemsService);

  SystemsService.$inject = ['$resource', 'CacheFactory'];

  function SystemsService($resource, CacheFactory) {
    var systemsCache = CacheFactory.get('systemsCache') || CacheFactory.createCache('systemsCache');
    var removeCache = function (res) {
      systemsCache.removeAll();
      return res.resource;
    };

    return $resource('/api/systems/:systemId', {
      requestId: '@_id'
    }, {
      get: {
        method: 'GET',
        cache: systemsCache
      },
      query: {
        method: 'GET',
        isArray: true,
        cache: systemsCache
      },
      update: {
        method: 'PUT',
        interceptor: {response: removeCache}
      },
      getSystemEnvConfigFiles: {
        method: 'GET',
        url: '/api/systems/systemEnvConfigFiles',
        cache: systemsCache
      },
      getSystemAssetsConfigFiles: {
        method: 'GET',
        url: '/api/systems/systemAssetsConfigFiles',
        cache: systemsCache
      },
      getSystemTransConfigFiles: {
        method: 'GET',
        url: '/api/systems/systemTransConfigFiles',
        cache: systemsCache
      },
      getSystemTemplateFrontConfigFiles: {
        method: 'GET',
        url: '/api/systems/systemTemplateFrontConfigFiles',
        cache: systemsCache
      },
      getSystemTemplateBackConfigFiles: {
        method: 'GET',
        url: '/api/systems/systemTemplateBackConfigFiles',
        cache: systemsCache
      },
      getSystemConfigContent: {
        method: 'GET',
        url: '/api/systems/systemConfigContent'
      },
      setSystemConfigContent: {
        method: 'PUT',
        url: '/api/systems/systemConfigContent',
        interceptor: {response: removeCache}
      },
      shellCommand: {
        method: 'PUT',
        url: '/api/systems/shellCommand',
        interceptor: {response: removeCache}
      },
      initExaminationData: {
        method: 'PUT',
        url: '/api/systems/initExaminationData',
        interceptor: {response: removeCache}
      },
      getExaminationStatus: {
        method: 'GET',
        url: '/api/systems/getExaminationStatus',
        cache: systemsCache
      },
      listFinishedUsers: {
        method: 'GET',
        url: '/api/systems/listFinishedUsers',
        cache: systemsCache
      },
      listUnfinishedUsers: {
        method: 'GET',
        url: '/api/systems/listUnfinishedUsers',
        cache: systemsCache
      },
      banAllUnfinishedUser: {
        method: 'PUT',
        url: '/api/systems/banAllUnfinishedUser',
        interceptor: {response: removeCache}
      }
    });
  }
}());
