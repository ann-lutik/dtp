import React from 'react';
import {Form, Col, FormControl} from 'react-bootstrap';

class ReactInput extends React.Component {

    handleChange = (event) => {
        this.props.onChange(event.target.value);
    };

    render() {

        const {
            label,
            placeholder,
            defaultValue,
            asCol,
            type,
            required,
            min,
            max,
            pattern,
            validationErrorText
        } = this.props;

        return (
            <Form.Group as={asCol ? Col : Form.Group}>
                <Form.Label>{label}</Form.Label>
                <FormControl
                    required={required}
                    type={type || "text"}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    min={min}
                    max={max}
                    pattern={pattern}
                    onChange={this.handleChange}
                />
                <FormControl.Feedback type="invalid">
                    {validationErrorText || 'Обязательное поле'}
                </FormControl.Feedback>
            </Form.Group>
        );
    }
}

export default ReactInput;