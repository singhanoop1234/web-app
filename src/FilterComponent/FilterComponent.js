import React from 'react';
import styled from 'styled-components';
import { Typography, FormControlLabel, Checkbox, FormGroup } from '@material-ui/core';

const StyledContainer = styled(FormGroup)`
    border: 1px solid black;
    margin: 10px;
    min-width: 200px;
    max-width: 200px;
`;

const StyledHeader = styled(Typography)`
    padding: 15px;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
    padding-left: 15px;
`;

class FilterComponent extends React.PureComponent {

    render() {
        return (
            <div>
                <StyledHeader variant="h5">Filters</StyledHeader>
                <StyledContainer column>
                    <StyledHeader variant="h6">Spicies</StyledHeader>
                    <StyledFormControlLabel
                        control={
                            <Checkbox
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Human"
                    />
                    <StyledFormControlLabel
                        control={
                            <Checkbox
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Metholog"
                    />
                    <StyledFormControlLabel
                        control={
                            <Checkbox
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Other Spicies"
                    />
                </StyledContainer>
                <StyledContainer>
                    <StyledHeader variant="h6">Gender</StyledHeader>
                    <StyledFormControlLabel
                        control={
                            <Checkbox
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Male"
                    />
                     <StyledFormControlLabel
                        control={
                            <Checkbox
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Female"
                    />
                </StyledContainer>
                <StyledContainer>
                    <StyledHeader variant="h6">Origin</StyledHeader>
                    <StyledFormControlLabel
                        control={
                            <Checkbox
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Unkonwn"
                    />
                     <StyledFormControlLabel
                        control={
                            <Checkbox
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Other origins"
                    />
                </StyledContainer>
            </div>
        );
    }
}

export default FilterComponent;