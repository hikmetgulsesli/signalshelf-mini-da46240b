(function (global) {
  'use strict';

  function createStore(initialState, options) {
    var state = Object.freeze(JSON.parse(JSON.stringify(initialState)));
    var listeners = [];
    var persist = options && typeof options.persist === 'function' ? options.persist : null;

    function getState() {
      return state;
    }

    function setState(updater) {
      var prev = state;
      var next = typeof updater === 'function' ? updater(prev) : updater;
      if (!next || typeof next !== 'object') {
        return prev;
      }
      state = Object.freeze(JSON.parse(JSON.stringify(next)));
      if (persist) {
        try {
          persist(state);
        } catch (err) {
          console.warn('[SignalShelf Mini] Persist hook failed:', err);
        }
      }
      listeners.slice().forEach(function (listener) {
        try {
          listener(state, prev);
        } catch (err) {
          console.warn('[SignalShelf Mini] State listener failed:', err);
        }
      });
      return state;
    }

    function subscribe(listener) {
      if (typeof listener !== 'function') {
        return function () {};
      }
      listeners.push(listener);
      return function unsubscribe() {
        var idx = listeners.indexOf(listener);
        if (idx >= 0) {
          listeners.splice(idx, 1);
        }
      };
    }

    function addRecord(record) {
      var rec = Object.assign({}, record, { id: record.id || generateId() });
      return setState(function (s) {
        return Object.assign({}, s, { records: s.records.concat(rec) });
      });
    }

    function updateRecord(id, patch) {
      return setState(function (s) {
        return Object.assign({}, s, {
          records: s.records.map(function (r) {
            return r.id === id ? Object.assign({}, r, patch) : r;
          })
        });
      });
    }

    function deleteRecord(id) {
      return setState(function (s) {
        return Object.assign({}, s, {
          records: s.records.filter(function (r) {
            return r.id !== id;
          })
        });
      });
    }

    function setFilter(filter) {
      return setState(function (s) {
        return Object.assign({}, s, { ui: Object.assign({}, s.ui, { filter: filter }) });
      });
    }

    function setView(view) {
      return setState(function (s) {
        return Object.assign({}, s, { ui: Object.assign({}, s.ui, { view: view }) });
      });
    }

    function selectRecord(id) {
      return setState(function (s) {
        return Object.assign({}, s, { ui: Object.assign({}, s.ui, { selectedRecordId: id }) });
      });
    }

    function setPreference(key, value) {
      return setState(function (s) {
        return Object.assign({}, s, {
          preferences: Object.assign({}, s.preferences, { [key]: value })
        });
      });
    }

    function reset() {
      return setState(function () {
        return JSON.parse(JSON.stringify(initialState));
      });
    }

    var actions = {
      addRecord: addRecord,
      updateRecord: updateRecord,
      deleteRecord: deleteRecord,
      setFilter: setFilter,
      setView: setView,
      selectRecord: selectRecord,
      setPreference: setPreference,
      reset: reset
    };

    return {
      getState: getState,
      setState: setState,
      subscribe: subscribe,
      actions: actions
    };
  }

  function generateId() {
    return 'rec-' + Math.random().toString(36).slice(2, 11) + '-' + Date.now().toString(36);
  }

  global.SignalShelfState = { createStore: createStore };
})(typeof globalThis !== 'undefined' ? globalThis : window);
