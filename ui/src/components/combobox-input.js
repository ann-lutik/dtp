import React, { Component } from 'react';
import { FormGroup, MenuItem, ControlLabel, SplitButton } from "react-bootstrap";

export default class ComboboxInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItemName : ''
        };
    }

    componentDidMount() {
        const {initSelectedItemId, itemToString, items} = this.props;

   /*     if (items) {
            let name;
            let selectedCandidate = items.find(i => i.id === initSelectedItemId);
            if (selectedCandidate !== undefined && selectedCandidate !== null) {
                name = itemToString(selectedCandidate);
            }
            else
            {
                name = items[0];
            }
            this.setState({selectedItemName : name});
        } */
      //  const {itemToString, initSelectedItem} = this.props;
      //  this.setState({selectedItemName : itemToString(initSelectedItem)})
    }

    render() {
        const { items, title, itemToString, onSelectionChanged } = this.props;
        const { selectedItemName } = this.state;
        let splitButtonItems;
        if (items) {
            splitButtonItems = items.map(item => {
                return (
                    <MenuItem eventKey={item.id} onSelect={itemEventKey => {
                        let selectedItem = this.props.items.find(i => i.id === itemEventKey);
                        this.setState({selectedItemName : itemToString(selectedItem)});
                        onSelectionChanged(selectedItem);
                    }}>
                        {itemToString(item)}
                    </MenuItem>
                );
            });
        }
        return (
            <FormGroup>
                <ControlLabel>{title}</ControlLabel>
                <SplitButton title={selectedItemName} id="split-button-basic-default" defaultValue={'Выберите'}>
                    {splitButtonItems}
                </SplitButton>
            </FormGroup>
        );
    }
}
