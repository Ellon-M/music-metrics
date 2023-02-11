import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import PlaylistInfo from '../components/PlaylistInfo';

describe('Playlists', () => {
  it('render onload', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <PlaylistInfo />
        </Router>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
