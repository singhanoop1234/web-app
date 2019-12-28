import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField, Button } from '@material-ui/core';

const StyledContainer = styled(Grid)`
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between
`;
const StyledLeftItem = styled(Grid)`
    float: left;
    flex-direction: row;
    display: flex;
`;
const StyledTextField = styled(TextField)`
    width: 200px;
`;

const StyledButton = styled(Button)`
    margin-top: 30px;
    height: 50px;
    align-self: center;
`;

const StyledSortTextField = styled(TextField)`
    float: right;
    width: 200px;
    padding-right: 15px;
`;

export default class SearchComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            textSearch: '',
            sortType: 'asc',
        }
    }

    onTextChange = value => {
        this.setState({textSearch: value});
    }

    onSortTypeChange = value => {
        this.setState({sortType: value});
        this.props.sortData(value);
    }

    render() {
        return (
            <StyledContainer container>
                <StyledLeftItem item xs>
                    <StyledTextField
                        ref="input"
                        margin="normal"
                        label="Search By Name"
                        onChange={event => this.onTextChange(event.target.value)}
                    />
                    <StyledButton
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => this.props.handleChange(this.state.textSearch)}
                    >
                        Search
                    </StyledButton>
                </StyledLeftItem>

                <StyledSortTextField
                    label="Sort By Id"
                    margin="normal"
                    select
                    onChange={event => this.onSortTypeChange(event.target.value)}
                >
                    <MenuItem value="asc">
                        Ascending
                    </MenuItem>
                    <MenuItem value="desc">
                        Descending
                    </MenuItem>
                </StyledSortTextField>
            </StyledContainer>
        );
    }
}

SearchComponent.propTypes = {
  sortData: PropTypes.func,
};