import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.onFormsubmit = this.onFormsubmit.bind(this);
    };


    onFormsubmit(e) {
        e.preventDefault();

        //DONT FORGET WHEN WE ARE REFERNCING PROPS OBJECTS INSIDE A CLASS COMPONENT WE HAVE TO SPECIFY THIS KEYWORD!!
        this.props.onSubmit(this.state.term)
    };


    render() {
        return (
            <div className="ui segment">

                <form onSubmit={this.onFormsubmit} className="ui form">

                    <div className="field">
                        <label>Image Search</label>

                        {/* THIS IS A CONTROLLED ELEMENT AND MAINLY USED FOR FORM ELEMENTS OF ALL SORTS RADIO, CHECKBOX, INPUTS ETC. 
                        USED TO EASILY ADD DYNAMIC FUNCTIONALITY TO USER EVENTS */}
                        <input type="search" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>

                </form>

            </div>
        );
    };

};

export default SearchBar;