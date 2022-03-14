import React, { useState } from "react";
import Modal from "react-modal";
import MovieList from "./MovieList";
import Stars from "./Stars";



const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AddMovie = ({add}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
 
 
  
 

   
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleRating =(x) =>setRating(x) 
  
  
  
  return (
    <div>
      <button className="btn add-movie-btn" onClick={openModal}>
        Add movie
      </button>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let newMovie = {
              
              id: Math.random(),
              image ,
              name ,
              date ,
              rating
            };
            add(newMovie)
            closeModal();
          }}
        >
          <label>Name</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e)=>setName(e.target.value)}
          
          />
          <label> Date of release </label>
          <input
            type="date"
            value={date}
            name="date"
            onChange={(e)=>setDate(e.target.value)}
           
          />
          <label> Rating </label>
          <Stars rating={rating} handleRating={handleRating}   />

          <label>Image</label>
          <input
            type="url"
            value={image}
            name="image"
            onChange={(e)=>setImage(e.target.value)}
            
          />
          <div>
            <button className="btn btn-primary" type="submit">
              Add
            </button>
            <button className="btn btn-danger" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;