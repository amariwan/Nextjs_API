import axios from 'axios';
import StarshipDetail from '@/components/StarshipDetail';
import { Box } from '@chakra-ui/react';


const StarshipDetails =({ starship }) =>{ 
    return (
      <Box>
       <StarshipDetail starship={starship}/>
      </Box>
    )
  }
  
  export async function getServerSideProps(context) {
    const { name } = context.query
    //console.log(context);
  
    const res = await axios.get(`https://swapi.dev/api/starships/?search=${name}`)
    const starship = res.data.results[0]
  
    return {
      props: {
        starship
      }
    }
  }
  
  export default StarshipDetails