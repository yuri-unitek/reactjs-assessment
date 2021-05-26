import * as React from "react";
import {shallow} from 'enzyme';
import AlertComponent, {IAlert} from '../../src/components/alert';

describe('Alert component Tests',()=>{
    it('should render info', () => {
        const props: IAlert ={
            headerText:'test header',text:'testtype',type:'info'
        }
        const alert = shallow(<AlertComponent {...props}/>);
        expect(alert.exists()).toBe(true);
        expect(true).toBe(true);
    });

    it('should render warning', () => {
        const props: IAlert ={
            headerText:'test header',text:'testtype',type:'warning'
        }
        const alert = shallow(<AlertComponent {...props}/>);
        expect(alert.exists()).toBe(true);
        expect(true).toBe(true);
    });
});