import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infrasctructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrasctructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.model';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const pupular = await fetcher.get<MovieDBMoviesResponse>('/popular');

    return pupular.results.map(result =>
      MovieMapper.fromMovieDBResultToModel(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error Fetching Movies - Popular movies');
  }
};
