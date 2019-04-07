import React from 'react';
import TextField from '@material-ui/core/TextField';

class Form extends React.Component {
    state = {
        inputNumber: '',
        output: '',
    };

    handleChange = (event) => {
        this.setState({
            inputNumber: event.target.value,
        });

        fetch("https://j6x960lxyb.execute-api.us-east-2.amazonaws.com/live/convert/number-to-words?inputNumber="+ event.target.value)
        .then(res => res.json())
        .then(json => {
            this.setState({
                output: json.numberInWords,
            });
        }).catch(error => console.log(error));
        
    };

    render() {
        return (
            <div>
                <div>
                    <TextField
                        id="transform-number"
                        placeholder="Enter a number to transform..."
                        margin="normal"
                        value={this.state.inputNumber}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <TextField
                        id="output-field"
                        multiline={true}
                        margin="normal"
                        value={this.state.output}
                        rows={5}
                    />
                </div>
            </div>
        );
    }
}

export default Form;