import React, { useState } from 'react';
import { useFirebase } from '../context/firebase';

const ListingPage = () => {
  const firebase = useFirebase();

  const [name, setName] = useState('');
  const [isbnNumber, setIsbnNumber] = useState('');
  const [price, setPrice] = useState('');
  const [coverPic, setCoverPic] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreateNewListing(name, isbnNumber, price, coverPic);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Enter book name</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Enter isbnNumber</label>
          <input 
            type="number" 
            className="form-control" 
            id="exampleInputPassword1" 
            onChange={(e) => setIsbnNumber(e.target.value)}
            value={isbnNumber}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Enter Price</label>
          <input 
            type="number" 
            className="form-control" 
            id="exampleInputPassword1" 
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Select your book cover pic</label>
          <input 
            type="file" 
            className="form-control" 
            id="exampleInputPassword1" 
            onChange={(e) => setCoverPic(e.target.files[0])}
          />
        </div>
        <button className='btn btn-success'>create</button>
      </form>
    </div>
  );
};

export default ListingPage;