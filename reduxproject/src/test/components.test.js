import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('components', function() {
  describe('<App />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
// npm run test --  --verbose
