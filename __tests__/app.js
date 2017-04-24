import React from 'react';
import App from '../App/components/App';
import { shallow } from 'enzyme';

describe('App', () => {
  test('Should render', () => {
    const component = shallow(<App />);
    expect(component.contains(<h1>I'm App!</h1>)).toBe(true);
  });
});