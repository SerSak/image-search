import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [] }


        // WE NEED TO BIND OUR EVENT HANDLERS IN REACT CLASS COMPONENTS!!!
        //WE CAN DO IT INSIDE THE CONSTRUCTOR FUNCTION OR SIMPLY WRITING A HANDLER METHOD AS AN ARROW FUNCTION
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    };


    // ASYNC INFRONT OF A FUNCTION SPECIFS THAT WE ARE WORKING WITH AN API REQUESTS 
    async onSearchSubmit(term) {

        //AWAIT WILL WAIT FOR RESPONSE FROM API CALL CODE
        // ONCE WE GET THE DATA WE CAN PASS IT INTO A response VARIABLE AND DO THINGS
        const response = await unsplash.get(`https://api.unsplash.com/search/photos/`, {
            params: { query: term }
        })


        this.setState({ images: response.data.results })
    };


    render() {
        return (

            <div className="ui container" style={{ marginTop: '10px' }}>

                {/*PASSING A FUNCTION TO BE CALLED INSIDE A CHILD TO RETRIEVE INPUT DATA AS ARGUMENTS*/}
                <SearchBar onSubmit={this.onSearchSubmit} />


                {/*PASSING AN ARRAY OF IMAGES FROM API AS A PROP*/}
                <ImageList images={this.state.images} />
            </div>

        );
    };
};



export default App;