import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';



const ImageList = props => {

    const images = props.images.map((image) => {


        //WE HAVE TO ASSIGN THE KEY/ID PROPERTY TO LISTS elements root element in div
        // WE DO IT FOR THE PERFOMANCE ENHANCMENT
        // EACH TIME WE ADD ANOTHER LIST ITEM TO AN EXISTING ONES AND DISPLAY IT IN DOM, REACT WILL RE-CHECK THE PREVIOUSLY RENDERED LIST ITEMS WITH THE NEW ONES BY COMPARING THEIR ID's - IN ORDER TO RENDER ONLY THE NEW ITEMS THAT HAVE AN UNMATCHED ID
        return <ImageCard key={image.id} image={image} />

    })



    return (
        <div className='image-list'>{images}</div>
    )

};


export default ImageList;