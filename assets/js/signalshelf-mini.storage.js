(function (global) {
  'use strict';

  const STORAGE_KEY = 'signalshelf-mini:state';

  function Storage() {}

  Storage.prototype.load = function load(fallback) {
    try {
      const raw = global.localStorage.getItem(STORAGE_KEY);
      if (raw === null) {
        return fallback;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') {
        return fallback;
      }
      return parsed;
    } catch (err) {
      console.warn('[SignalShelf Mini] Failed to load persisted state:', err);
      return fallback;
    }
  };

  Storage.prototype.save = function save(state) {
    try {
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (err) {
      console.warn('[SignalShelf Mini] Failed to persist state:', err);
      return false;
    }
  };

  Storage.prototype.clear = function clear() {
    try {
      global.localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (err) {
      console.warn('[SignalShelf Mini] Failed to clear persisted state:', err);
      return false;
    }
  };

  global.SignalShelfStorage = Storage;
  global.signalShelfStorage = new Storage();
})(typeof globalThis !== 'undefined' ? globalThis : window);
