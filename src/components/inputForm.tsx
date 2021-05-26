import React from 'react';
import InputGroup from 'react-bootStrap/InputGroup';
import FormControl from 'react-bootStrap/FormControl';
import Button from 'react-bootStrap/Button';
import Form from 'react-bootStrap/Form';

export interface IInputFormProps {
    confirmClick:  (e: any) => void;
    movieRef: React.MutableRefObject<undefined>;
    className: string;
}
/**
 * React Functional Component - InputForm
 *
 * @param {*} { confirmClick, movieRef, className }
 * @return {*} returns a input form - inputfield, confirm button
 */
const InputForm: React.FC<IInputFormProps> = ({ confirmClick, movieRef, className }) => {
  
    return <div className={`${className}_container`}>
        <Form onSubmit={confirmClick} className={`${className}_form`}>
            <InputGroup size='sm' className={`${className}_input`}>
                <FormControl
                    placeholder="Search For Movie's"
                    aria-label="Search For Movie's"
                    aria-describedby="basic-addon2"
                    ref={movieRef}
                />
            </InputGroup>
            <Button onClick={confirmClick} variant="outline-secondary" className={`${className}_button`}>confirm</Button>
        </Form>
    </div>;
}

export default InputForm;