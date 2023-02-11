import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Playlists from '../components/Playlists';

describe('Playlists', () => {
  it('render onload', () => {
    const tree = render(
      <Provider store={store}>
        <Playlists />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
