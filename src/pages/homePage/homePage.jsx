import SearchBar from '../../components/searchBar/searchBar';
import './homePage.scss'
const rate=[
    {
        id:1,
        count:'16+',
        title:'years of experience'
    },{
        id:2,
        count:'200',
        title:'properties sold'
    },
    {
        id:3,
        count:'12000+',
        title:'Property Ready'
    }
]
const HomePage=()=> {
    return ( 
        <div className='home'>
            <div className="textContainer">
                <div className="wrapper">
                <h1 className='hero-title'>Buy, Sell and Rent Properties</h1>
                <p className='hero-subtitle'>Find, Buy, Sell and Rent your dream properties.
                Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.
                </p>
                <SearchBar/>

                <div className="rate">
                    {
                        rate.map((item)=>(
                            <div className="rateItem" key={item.id}>
                                <span>{item.count}</span>
                                <p>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
            <div className="imageContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
     );
}

export default HomePage;