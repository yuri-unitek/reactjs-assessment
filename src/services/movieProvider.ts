export interface IMovieResponse {
    total: string,
    movies: IMovie[]
}

interface IMovie {
    Title: string,
    Year: string,
    imdbID: string,
    type: string,
    poster: string
}

/**
 *  A provider for searching IMDB
 *
 * @export
 * @class MovieProvider
 */
export class MovieProvider {
    /**
     * seach for movies using promise
     * then parse the data
     * catch an error
     * 
     * @param {string} title
     * @param {string} page
     * @param {(input: RequestInfo, init?: RequestInit) => Promise<any>} fetch
     * @return {*}  {Promise<IMovieResponse>}
     * @memberof MovieProvider
     */
    public async searchMovies(title: string, page: string, fetch: (input: RequestInfo, init?: RequestInit) => Promise<any>): Promise<IMovieResponse> {
        
        return fetch(`https://www.omdbapi.com/?apikey=9baff2bc&s=${title}&page=${page}`, {
            mode: 'cors',
            headers: {
                accept: 'application/json'
            }
        }).then(async (response) => {
            const data = await response.json();
            console.log({ data });
            const result: IMovieResponse = { total: data.totalResults, movies: data.Search };
            return Promise.resolve(result);
        }).catch(() => {
            return Promise.reject('error searching movies');
        });
    };
}