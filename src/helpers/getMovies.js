import Data from '../mock-data/movieList.json'


export const getMovies =  () => {
   console.log(Object.values(Data.data))
}