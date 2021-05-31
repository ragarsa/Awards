import Data from '../mock-data/ratingMovies.js';
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

const updateMovieById = (idMovie, votes) => {
   let indexFound = -1
   const movieMatch = Data.data.map((values, index) => {
     if (values.id === idMovie){
        indexFound = index
     };

  
});
  if(indexFound > -1) { 
     Data.data[indexFound].votes = votes
   }else {
      return 'None'
   };
  
//   console.log(Data.data[indexFound]);

}



export {getMovies, updateMovieById};