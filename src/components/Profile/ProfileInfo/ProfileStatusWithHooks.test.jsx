import React from 'react';
import styles from './ProfileInfo.module.css';
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('Profile status component', function () {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'RADIANCE'}/>);
        const instance = component.getInstance();
        expect (instance.state.status).toBe("RADIANCE")
    })
    test('Span should be displayed.', () => {
        const component = create(<ProfileStatus status={'RADIANCE'}/>);
        const root = component.root;
        const span = root.findByType('span');
        expect (span).not.toBeNull()
    })
    test('Span should contain the status', () => {
        const component = create(<ProfileStatus status={'RADIANCE'}/>);
        const root = component.root;
        const span = root.findByType('span');
        expect (span.children[0]).toBe('RADIANCE')
    })
    test('Input shouldn\'t be displayed', () => {
        const component = create(<ProfileStatus status={'RADIANCE'}/>);
        const root = component.root;
        expect (() => {
            const input = root.findByType('input');
        }).toThrow()
    })
    test('Input should be displayed in edit mode instead of span', () => {
        const component = create(<ProfileStatus status={'RADIANCE'}/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect (input.props.value).toBe('RADIANCE')
    })
    test('Callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'RADIANCE'} updateStatus={mockCallback} />);
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect (mockCallback.mock.calls.length).toBe(1);
    })
    
});
