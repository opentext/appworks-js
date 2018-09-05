/**
 * Collection of utility functions
 */
import {AWProxy} from './proxy';

export function noop() {
}

export function isFunction(functionToCheck) {
  const getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

export function isDesktopEnv() {
  return AWProxy.isDesktopEnv();
}

export function isMobileEnv() {
  return AWProxy.isMobileEnv();
}
