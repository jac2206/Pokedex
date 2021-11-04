import React, {useState, Component} from 'react';

class RadioButton extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        // this.state = {'plataform': 'L'};
    }

    handleChange = e=> {
        console.log(e)
        const {name, value} = e.target;
        console.log(name + '   ' + value)
        console.log(this.state)
        this.setState({
            [name]: value
        });
    };


    render() {
        return(
           <div className="radio-buttons">
               Windows
               <input 
                    id="windows" 
                    value="windows"
                    name="platform"
                    type="radio"
                    onChange={this.handleChange}
               />
               Mac
               <input 
                    id="mac" 
                    value="mac"
                    name="platform"
                    type="radio"
                    onChange={this.handleChange}
               />
               Linux
               <input 
                    id="linux" 
                    value="linux"
                    name="platform"
                    type="radio"
                    onChange={this.handleChange}
               />
           </div>
        );
    }
}

export default RadioButton;