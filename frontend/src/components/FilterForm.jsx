import { useState } from "react";
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './FilterForm.css';

function FilterForm() {
  const [filters, setFilters] = useState({
    city: '',
    sex: '',
    area: ''
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Redirect to home if not already there
    if (location.pathname !== "/") {
      navigate("/");
    }

    try {
      const response = await axios.post('http://localhost:8000/api/fetch-pg/', filters);
      console.log("PG Data Received:", response.data);
    } catch (error) {
      console.error("Error fetching PG data:", error);
    }
  };

  return (
    <div className="filter-form-wrapper">
      <form className="filter-form" onSubmit={handleSubmit}>
        <h2>Search PGs</h2>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select name="city" value={filters.city} onChange={handleChange} required>
            <option value="">-- Select City --</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="sex">Gender</label>
          <select name="sex" value={filters.sex} onChange={handleChange} required>
            <option value="">-- Select Gender --</option>
            <option value="Boys">Boys</option>
            <option value="Girls">Girls</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="area">Area</label>
          <select name="area" value={filters.area} onChange={handleChange} required>
            <option value="">-- Select Area --</option>
            <option value="Vasna">Vasna</option>
            <option value="Satellite">Satellite</option>
            <option value="Naranpura">Naranpura</option>
            <option value="Maninagar">Maninagar</option>
            <option value="Navarangpura">Navarangpura</option>
          </select>
        </div>

        <button type="submit">Search PGs</button>
      </form>
    </div>
  );
}

export default FilterForm;
