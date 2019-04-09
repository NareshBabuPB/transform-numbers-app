import React from 'react';
import Form from './form';

class TransformNumbers extends React.Component {

    renderHeader = () => <h2>Tranform Number to Words</h2>;

    renderForm = () => <Form/>;

    render() {
        return (
            <div className='app-container'>
                {this.renderHeader()}
                {this.renderForm()}
            </div>
        );
    }
}

export default TransformNumbers;