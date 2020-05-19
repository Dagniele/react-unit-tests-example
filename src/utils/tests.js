import React from 'react';
import 'jest-styled-components';
import Enzyme, { mount as enzymeMount, shallow as enzymeShallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../theme';

Enzyme.configure({ adapter: new Adapter() });

/**
 * This function uses react-test-renderer which is less powerful of enzyme but way easier and
 * generates smaller snapshots. Most of the times it will be enough to use this one for testing
 */
export function rendererWithTheme(children, options = {}) {
  const tree = renderer.create(<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>);

  if (!options.pure) return tree.toJSON();

  return tree;
}

/**
 * Why use enzyme utils from this file instead of importing straight from enzyme library?
 * Because enzyme needs the react adapter, so instead of including it in every test we
 * include it in this file
 */

/**
 * The next functions uses enzyme which gives you access to every mounted sub component,
 * useful in case you need to test something specific or you need to change the state
 * from outside, without simulating clicks or anything else. Mainly this should be
 * used when you don't want to just use the snapshot for testing, check "Button"
 * tests for few examples
 */
export function mountWithTheme(children) {
  const tree = enzymeMount(<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>);
  return tree.childAt(0).childAt(0);
}

/**
 * This is like the previous one but it has no theme, usefult if we have to test user
 * interactions behaviors
 */
export function mount(children) {
  return enzymeMount(children);
}

/**
 * This is like the previous one but it has no theme, usefult if we have to test user
 * interactions behaviors
 */
export function shallow(children) {
  return enzymeShallow(children);
}
