import React from 'react'
import './card.css'
import Card from './card.jsx'
import data from './menulist.json'
const Home = ({ search }) => {
    const filteredItems = data.filter(item => item.productname.toLowerCase().includes(search.toLowerCase()) || item.info.toLowerCase().includes(search.toLowerCase()));
        return (
            <div className='cards'>
                {filteredItems.map((item) => (
                    <Card key={item.id} image={item.image} name={item.productname} price={item.price} pack={item.pack} info={item.info} />
                ))}
            </div>
        )
}

export default Home
