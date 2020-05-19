import React from 'react';
import {mount, rendererWithTheme} from "../../utils/tests";
import Button from './Button';

describe('button', () => {

    it('should match the snapshot - default', () => {
       const tree = rendererWithTheme(<Button onClick={() => {}}>my content</Button>);
       expect(tree).toMatchSnapshot();
    });

    it('Should call the click function', () => {
        const fn = jest.fn();
        const tree = mount(<Button onClick={fn}>my content</Button>);
        tree.simulate('click');
        expect(fn).toBeCalled();
    });
});
