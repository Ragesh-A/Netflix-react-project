import axios from "axios";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { useEffect, useRef, useState } from "react";
import Movie from "./Movie";

const Row = ({title, fetchUrl})=>{
  const [movies, setMovie] = useState([]);
  const slider = useRef();
  

  useEffect(()=>{
    axios.get(fetchUrl).then(res=>{
      setMovie(res.data.results);
    })
  },[fetchUrl])

  const slideLeft = () =>{
     slider.current.scrollLeft = slider.current.scrollLeft - 500;
  }
  const slideRight = () =>{
     slider.current.scrollLeft = slider.current.scrollLeft + 500;
  }


  return (
    <>
    <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
    <div className="relative flex items-center group">
      < MdChevronLeft size={40} className='bg-white left-0 rounded absolute  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={slideLeft}/>
      <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide" id={'slider'} ref={slider}>
        {movies.map((item, id)=>{
          return <Movie item={item} key={id} />
        })}
      </div>
      < MdChevronRight size={40} className='bg-white right-0 rounded absolute  opacity-50 hover:opacity-100 cursor-pointer z-10  hidden group-hover:block' onClick={slideRight}/>
    </div>

    </>
  )
}

export default Row;