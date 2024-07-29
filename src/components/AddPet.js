import React from 'react'

const AddPet=()=>{
    const [name,setName]=React.useState('');
    const [type,setType]=React.useState('');
    const [breed,setBreed]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [error,setError]=React.useState(false);
    const addPet=async ()=>{

        console.warn(!name);
        if(!name||!type||!breed||!price)
        {
            setError(true);
            return false;
        }
        console.warn(name,type,breed,price);
        const userId=JSON.parse(localStorage.getItem('user'));
        console.warn(userId);
       let result=await fetch('http://localhost:5000/add-pet',{
        method:'post',
        body:JSON.stringify({name,type,breed,price}),
        headers:{
            "Content-Type":"application/json"
        }
       });
       result=await result.json();
       console.warn(result);

    }




    return(
        <div className='pet'>
            <h1>Add Pet</h1>
            <input type="text" placeholder='Enter Pet name' className='inputBox' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            {error && !name &&<span className='invalid-input'>Enter valid name</span>}
            <input type="text" placeholder='Enter Pet type' className='inputBox' value={type} onChange={(e)=>{setType(e.target.value)}}/>
            {error && !type &&<span className='invalid-input'>Enter valid type</span>}
            <input type="text" placeholder='Enter Pet breed' className='inputBox' value={breed} onChange={(e)=>{setBreed(e.target.value)}}/>
            {error && !breed &&<span className='invalid-input'>Enter valid breed</span>}
            <input type="text" placeholder='Enter Pet price' className='inputBox' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            {error && !price &&<span className='invalid-input'>Enter valid price</span>}
            <button onClick={addPet} className='appButton'>Browse Pet</button>





        </div>
    )
}

export default AddPet;