
import React from 'react';
import Alert from 'react-bootStrap/Alert';

export interface IAlert { 
    headerText:string,
    type:string,
    text:string
}

/**
 * React Functional Component - AlertComponent
 *
 * @param {*} {headerText, text, type}
 * @return {*} a reusable alert
 */
const AlertComponent: React.FC<IAlert> = ({headerText, text, type}) => {

    return <Alert variant={type} className='result_alert'>
        <Alert.Heading>{headerText}</Alert.Heading>
        {type === 'warning' ? <Alert.Link href="/results/1?q=hero"> An example Seach: Hero.</Alert.Link> : null}
        {text}
    </Alert>;
}

export default AlertComponent;