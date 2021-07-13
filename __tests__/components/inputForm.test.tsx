import * as React from "react";
import {shallow} from 'enzyme';
import InputForm, { IInputFormProps } from "../../src/components/inputForm";

describe('InputForm component Tests',()=>{
    it('should render info', () => {
        const props: IInputFormProps = {
            className:'index',
            confirmClick:()=>{console.log('test');},
            movieRef: undefined
        };
        const form = shallow(<InputForm {...props}/>);
        expect(form.exists()).toBe(true);
    });
});