import useFetchGif from '../hooks/useFetchGif';
import GifGridItem from './GifGridItem';


export default function GifGrid({categories}) {

    const {data, loading} = useFetchGif(categories);  

    return (
        <>
        <h1 className="animate__animated animate__zoomIn">{categories}</h1>

        {loading && <p className='loader' ></p>} 

       <ol className="card-grid">
           {
       
           data.map( img =>(
               <GifGridItem {...img} key={img.id}  /> 
           ))
       
        }
           </ol>


            
        </>
    )
}
