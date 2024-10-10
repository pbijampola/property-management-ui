import './searchBar.scss'
import { useState } from 'react'

const buttons=[
    {
        id:1,
        title:'Buy'
    },
    {
        id:2,
        title:'Sell'
    },
    {
        id:3,
        title:'Rent'
    }
]

export default function SearchBar() {
    const [query, setQuery] = useState({
        type:'Buy',
        location:'',
        minPrice:0,
        maxPrice:0
    })
    const switchType=()=>{
        setQuery({...query, type:item.title})
        console.log(query)
    }
  return (
    <div className='search'>
      <div className="type">
        {
            buttons.map((item)=>(
                <button key={item.id} onClick={()=>switchType}>{item.title}</button>
            ))
        }
      </div>
      <form action="" className="formControl">
        <input type="text" name='location' placeholder='Location' />
        <input type="number" name='minPrice' placeholder='Minimum Price' />
        <input type="number" name='maxPrice' placeholder='Maximum Price' />
        <button>
            <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}
