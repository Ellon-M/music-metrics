import { describe, expect, it } from 'vitest';
import detailsData from '../utils/detailsData';
import { filterPlaylists, filterTracks } from '../utils/filter';
import playlistData from '../utils/playlistData';

describe('utility filter functions', () => {
  it('filters playlist data from API', () => {
    const filtered = filterPlaylists(playlistData.playlists);
    expect(filtered).toBeInstanceOf(Array);
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered[0]).toEqual({
      id: expect.any(String),
      image: expect.stringContaining('https://'),
      name: expect.any(String),
      tracks: expect.any(Number),
    });
  });

  it('filters playlist details from API', () => {
    const filtered = filterTracks(detailsData);
    expect(filtered).toBeInstanceOf(Array);
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered[0]).toEqual({
      id: expect.any(String),
      image: expect.stringContaining('https://'),
      artists: expect.arrayContaining([expect.any(String)]),
      name: expect.any(String),
      popularity: expect.any(Number),
    });
  });
});
