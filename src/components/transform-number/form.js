import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../../App.css'

class Form extends React.Component {
    state = {
        inputNumber: '',
        error: '',
        output: '',
    };

    isOnlyNumeric = (value) => {
        const numRegex = /^[-]?[\d]+$/;
        return numRegex.test(value);
    };

    isWithinRange = (value, min, max) => 
        (value >= min && value < max);

    validateInput = (inputValue) => {
        let errorMessage = '';
        if(!this.isOnlyNumeric(inputValue)){
            errorMessage = 'Only numeric value is allowed as input.';
        } else if(!this.isWithinRange(inputValue, -15, 150)){
            errorMessage = 'Only numbers within this range is accepted as input.';
        }

        this.setState({
            error: errorMessage,
        });

        return !errorMessage;
    };

    handleInputChange = (event) => {
        let inputValue = event.target.value;

        this.setState({
            inputNumber: inputValue,
        });

        if(inputValue && this.validateInput(inputValue)) {
            fetch("https://j6x960lxyb.execute-api.us-east-2.amazonaws.com/live/convert/number-to-words?inputNumber="+ inputValue)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    output: json.numberInWords,
                });
            }).catch(error => console.log(error)); // TODO display gracefull error message in UI
        }
    };

    renderInputField = () => (
        <div>
            <TextField 
            id="input-number" 
            placeholder="Enter a number to transform..." 
            autoFocus 
            fullWidth 
            margin="normal" 
            value={this.state.inputNumber} 
            error={!!this.state.error}
            helperText={this.state.error}
            onChange={this.handleInputChange} />
        </div>
    );

    renderOutputField = () => (
        <div>
            <TextField id="output-field" multiline fullWidth margin="normal" value={this.state.output} rows={5} />
        </div>
    );

    render() {
        return (
            <div className='form-container'>
                {this.renderInputField()}
                {this.renderOutputField()}
            </div>
        );
    }
    
}

export default Form;