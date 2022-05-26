import { useState } from 'react';
import yelp from '../api/yelp';



export default () => {


    const [results, setResults] = useState({
        data: null,
        loading: false,
        error: null
    
    })

    const searchRestaurants = async (activeCategory) => {
        console.log(activeCategory)
        setResults({
            data: null,
            loading: true,
            error: null
        
        });
        console.log(results)

        
        try {
            const response = await yelp.get('/search',
            { params: {
                limit: 15,
                term: activeCategory,
                location: "Curitiba"

            }})
            setResults({
                data: response.data.businesses,
                loading: false,
                error: null
            
            });
            console.log(results)
    
        } catch (error) {
            setResults({
                data: null,
                loading: false,
                error: "Something went wrong"
            
            });
        }
        
    }
    console.log(results)
    return [results, searchRestaurants]
}