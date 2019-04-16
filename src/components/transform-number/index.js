import React from 'react';
import Form from './form';

class TransformNumbers extends React.Component {

    renderForm = () => <Form/>;

    render() {
        return (
            <div className='app-container'>
                {this.renderForm()}
            </div>
        );
    }
}

export default TransformNumbers;