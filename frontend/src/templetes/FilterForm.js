import { useState } from "react";
import axios from 'axios';

function FilterForm(){
    const [filters,setfilters] = useState({
        city:'',
        sex:'',
        area:''
    });


    const handleChange = (e) =>{
        setfilters({...filters,[e.target.name]:e.target.value})
    };

    const handleSubmit =  async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8000/api/fetch-pg/', filters);
            console.log(response.data)
        }catch (error){
            console.error("Error fetching PG data",error)
        }
    }

    return(
        <>
           <form onSubmit={handleSubmit}>
            <h1>Filters</h1>

            {/* City Dropdown */}
            <label htmlFor="city">City:</label>
            <select name="city" value={filters.city} onChange={handleChange} required>
                <option value="">-- Select City --</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
            </select>

            <br />

            {/* Sex Dropdown */}
            <label htmlFor="sex">Gender:</label>
            <select name="sex" value={filters.sex} onChange={handleChange} required>
                <option value="">-- Select Gender --</option>
                <option value="Boys">Boys</option>
                <option value="Girls">Girls</option>
                <option value="Unisex">Unisex</option>
            </select>

            <br />

            {/* Area Dropdown */}
            <label htmlFor="area">Area:</label>
            <select name="area" value={filters.area} onChange={handleChange} required>
                <option value="">-- Select Area --</option>
                <option value="Vasna">Vasna</option>
                <option value="Satellite">Satellite</option>
                <option value="Naranpura">Naranpura</option>
                <option value="Maninagar">Maninagar</option>
                <option value="Navarangpura">Navarangpura</option>
            </select>

            <br /><br />

            <button type="submit">Search PGs</button>
        </form>
        </>
    );
}

export default FilterForm