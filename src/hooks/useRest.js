import { useState } from 'react';
import yelp from '../api/yelp';



export default () => {


    const [result, setResult] = useState({
        data: null,
        loading: false,
        error: null
    
    })

    const searchRestaurant = async (id) => {
        console.log(id)
        setResult({
            data: null,
            loading: true,
            error: null
        
        });
        console.log(result)

        
        try {
            const response = await yelp.get(`${id}`)
            setResult({
                data: response.data,
                loading: false,
                error: null
            
            });
            console.log(result)
    
        } catch (error) {
            setResult({
                data: null,
                loading: false,
                error: "Something went wrong"
            
            });
        }
        
    }
    console.log(result)
    return [result, searchRestaurant]
}