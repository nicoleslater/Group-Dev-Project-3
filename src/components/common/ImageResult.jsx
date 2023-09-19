import React, {useState, useEffect, useReducer} from 'react';
import './ImageResult.css'


const URL = import.meta.env.VITE_API_URL;

// ObjectIds is a prop for this component 
// Request made per object 
const ImageResult = ({objectID,URL}) => {
    // //*const [images, setImages] = useState([]);
    // const [loading, setLoading] = useState(true);

    // // console.log(data.objectIDs)
    // console.log(URL)
    // useEffect(() => {
    //     fetch(URL)
    //         .then(response => response.json())
    //         .then(data => {
    //     const firstTen = data.objectIDs.splice(0,10)
    //             setImages(firstTen);
    //             setLoading(false);
    //     })
    //         .catch(error => console.error('Error:',error ));
    // }, []);

    return (
<<<<<<< HEAD
        <div className='ImageResult'>
             {loading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  <h1>Image Result</h1>
                  <ul className='ImageResult--ul'>
                    {images.map(objectID => (
                      <li key={objectID}>
                        <p> Image </p>
                        <img
                        // src = URL
                          src={`https://images.metmuseum.org/CRDImages/as/original/DP251139.jpg`}
=======
        // <div className='ImageResult'>
        //      //{loading ? (
        //         <div>Loading...</div>
        //       ) : (
        //         <div>
        //           <h1>Image Result</h1>
        //           <ul className='ImageResult--ul'>
        //             {images.map(objectID => (
                     <li key={objectID}>
                         <p> Image </p>
                         <img
                         src={URL}
>>>>>>> main
                          alt={`Object ${objectID}`}
                        />
                      </li>
                  //   ))}
                  // </ul>
        //         </div>
        //       )}
        // </div>
    );
};

export default ImageResult;
