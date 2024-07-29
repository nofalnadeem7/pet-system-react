import React, { useEffect, useState } from 'react';

const PetList = () => {
    const [pets, setPets] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        getPets();

    }, []);

    const getPets = async () => {   //api calling
        let result = await fetch('http://localhost:5000/pets',{
            headers:{
                authorization:`bearer${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setPets(result);
    }
    console.warn("pets", pets);






    return (
        <div className="pet-list">
            <h3>Pet Lists</h3>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Type</li>
                <li>Breed</li>
                <li>Price</li>
            </ul>
            {
                    pets.map((item, index) => (
                        <ul key={index}>
                            <li>{index + 1}</li>
                            <li>{item.name}</li>
                            <li>{item.type}</li>
                            <li>{item.breed}</li>
                            <li>{item.price}</li>
                        </ul>
                    ))
                
            }
        </div>
    );
}

export default PetList;