import React from 'react';
import renderer from 'react-test-renderer';

describe('', ()=>{
    it('Should run this test',()=>{
        expect(true).toBe(true);
    });

    it('Should test react',()=>{
        var doc = React.createElement('div', {}, React.createElement("Testing this out"));
        const component = renderer.create(doc);
        const tree = component.toJSON();
        expect(tree).not.toBe(null);
        expect(tree).not.toBe(undefined);
    });
});