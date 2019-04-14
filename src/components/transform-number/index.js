import React from 'react';
import Form from './form';

class TransformNumbers extends React.Component {

    renderHeader = () => <div className='app-header'><h1>Tranform Number to Words</h1></div>;

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