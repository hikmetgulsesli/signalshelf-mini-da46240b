(function (global) {
  'use strict';

  function fetchDefaultState() {
    try {
      var request = new XMLHttpRequest();
      request.open('GET', 'assets/data/signalshelf-mini.json', false);
      request.send(null);
      if (request.status >= 200 && request.status < 300) {
        return JSON.parse(request.responseText);
      }
    } catch (err) {
      console.warn('[SignalShelf Mini] Failed to fetch default state:', err);
    }
    return {
      version: '1.0.0',
      preferences: {
        theme: 'system',
        density: 'comfortable',
        notificationsEnabled: true,
        autoSave: true
      },
      records: [],
      ui: { view: 'operations', filter: '', selectedRecordId: null, error: null }
    };
  }

  var defaultState = fetchDefaultState();
  var storage = global.signalShelfStorage || new global.SignalShelfStorage();
  var persisted = storage.load(defaultState);

  var store = global.SignalShelfState.createStore(persisted, {
    persist: function (state) {
      storage.save(state);
    }
  });

  window.app = {
    state: store.getState(),
    actions: store.actions
  };

  store.subscribe(function (state) {
    window.app.state = state;
  });

  global.__SETFARM_TEST_BRIDGE__ = {
    stack: 'static-html',
    ready: true,
    store: store,
    stateApi: {
      getState: store.getState,
      setState: store.setState,
      subscribe: store.subscribe,
      actions: store.actions
    },
    storageApi: {
      load: storage.load.bind(storage),
      save: storage.save.bind(storage),
      clear: storage.clear.bind(storage)
    }
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);
