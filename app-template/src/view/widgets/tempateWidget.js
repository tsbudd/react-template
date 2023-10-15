import React from 'react';
import { Button } from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {incrementCount} from "../../store/slices/templateSlice";

export default function TemplateWidget() {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCount());
    };

    return (
        <div>
            <Button variant="outline-primary" onClick={handleIncrement}>
                Increment Count
            </Button>
        </div>
    );
}
