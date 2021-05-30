import Data from '../mock-data/ratingMovies.json'
//Receiving data from database

const getData = () => {
   return new Promise((resolve, reject) => setTimeout(() =>  resolve(Object.values(Data.data)), 10) 

   )
}

const getMovies = async () => {
   // console.log(movieData)
   try {
      const data = await getData().then(data=>data).catch(err=>err)
      return data
      
   } catch(err) {
      return err
   }
  
} 








export default getMovies;