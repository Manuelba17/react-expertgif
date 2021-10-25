import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";


export default function useFetchGif(categories) {
   
    const [state, setState] = useState({
        data: [],
        loading: true, 
    })

    useEffect(() =>{
        getGif(categories).then(imgs => {

            setState({
                data: imgs,
                loading: false
            })

        })
    }, [categories])

    return state;

}
