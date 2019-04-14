import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../../App.css'
import { convertNumber } from '../../api';
import bigInt from 'big-integer';
import { isOnlyNumeric, isWithinRange } from '../../utils/validations';

const INPUT_MIN = bigInt('-9223372036854775808');
const INPUT_MAX = bigInt('9223372036854775807');

class Form extends React.Component {
    state = {
        inputNumber: '',
        error: '',
        output: '',
    };

    validateInput = (inputValue) => {
        let errorMessage = '';
        if (!isOnlyNumeric(inputValue)) {
            errorMessage = 'Input must be numeric.';
        } else if (!isWithinRange(inputValue, INPUT_MIN, INPUT_MAX)) {
            errorMessage = `Input must be within the range of ${INPUT_MIN} and ${INPUT_MAX}.`;
        }

        this.setState({
            output: '',
            error: errorMessage,
        });

        return !errorMessage;
    };

    processInput = (inputValue) => {
        if (this.validateInput(inputValue)) {
            convertNumber(inputValue)
                .then(json => {
                    this.setState({
                        output: json.numberInWords,
                    });
                }).catch(error => {
                    this.setState({
                        output: '',
                        error: 'Something went wrong while processing the input. Try again.',
                    });
                });
        }
    };

    handleInputChange = (event) => {
        let inputValue = event.target.value;

        this.setState({
            inputNumber: inputValue,
        });

        if (!inputValue) {
            this.setState({
                output: '',
                error: '',
            });
        } else {
            this.processInput(inputValue);
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
        <div className='output-container'>
            {this.state.output}
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