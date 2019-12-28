/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = {
    grid: {
      backgroundColor: '#8E8D8A',
    },
  };

const theme = createMuiTheme({
  overrides: {
    MuiGrid: {
      container: {
        background: '#1F232A',
        padding: '5px',
      },
    },
    MuiTypography: {
        color: "#FFFFFFF",
        h6: {
            color: "#000000",
            position: "absolute",
            bottom: "20px",
            marginLeft: "20px",
        },

        body1: {
            position: "absolute",
            bottom: "2px",
            marginTop: "5px",
            marginLeft: "20px",
        },
        body2: {
            color: "#FFFFFF",
            textAlign: "center",
        }
    }
  },
});

const StyledGridList = styled(Grid)`
  width: 100%;
  height: 100%;
`;

const StyledCard = styled(Grid)`
    background-color: '#8E8D8A' !important;
`;

const StyledTitle = styled(Typography)`
    color: white;
    text-align: left;
    position: absoulte;
`;

const StyledImageContainer = styled.div`
    position: relative;
`;

const StyledTitleContainer = styled.div`
    width: 100%;
    background: "#0000FF";
    position: absoulte;
    text-align: center;
    padding: 5px,
`;

const StyledWrapedDiv = styled.div`
  && {
    background: #333333;
    position: relative;
    margin-bottom: 5px;
    max-width: 300px;
  }
`;

const StyledFormDiv = styled.div`
  && {
    position: relative;
    padding-bottom: 10px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Title = styled(Typography)`
  && {
    color: #FFFFFF;
    font-size: 12px;
    text-align: left;
    flex: 1;
    margin-left: 10px;
  }
`;

const Value = styled(Typography)`
  && {
    float: right;
    color: #B66F11;
    font-size: 12px;
    text-align: right;
    flex: 1;
    margin-right: 10px;
  }
`;

export default class DetailCard extends React.Component {

    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <StyledGridList
                        className={styles.grid}
                        justify="flex-start"
                        alignItems="center"
                        container
                        >
                            {this.props.data && (
                                this.props.data.map(r => (
                                    <StyledCard
                                        item
                                        justify="space-around"
                                        alignItems="center"
                                        xs
                                    >
                                        <StyledImageContainer>
                                            <img src={r.image}></img>
                                            <StyledTitleContainer>
                                                <StyledTitle variant="h6">{r.name}</StyledTitle>
                                                <Typography variant="body1">
                                                    {this.getIdAndCreatedDate(r)}
                                                </Typography>
                                            </StyledTitleContainer>
                                        </StyledImageContainer>
                                        <StyledWrapedDiv>
                                            <StyledFormDiv>
                                                <Title variant="body2">Status</Title>
                                                <Value variant="body2">{r.status}</Value>
                                            </StyledFormDiv>
                                            <StyledFormDiv>
                                                <Title variant="body2">Species</Title>
                                                <Value variant="body2">{r.species}</Value>
                                            </StyledFormDiv>
                                            <StyledFormDiv>
                                                <Title variant="body2">Gender</Title>
                                                <Value variant="body2">{r.gender}</Value>
                                            </StyledFormDiv>
                                            <StyledFormDiv>
                                                <Title variant="body2">Origin</Title>
                                                <Value variant="body2">{r.origin.name}</Value>
                                            </StyledFormDiv>
                                            <StyledFormDiv>
                                                <Title variant="body2">Location</Title>
                                                <Value variant="body2">{r.location.name}</Value>
                                            </StyledFormDiv>
                                        </StyledWrapedDiv>
                                    </StyledCard>
                                )
                            ))}
                            {this.props.data.length === 0 && (
                                <Typography variant="body2">Sorry there is no data related to your search</Typography>
                            )}
                    </StyledGridList>
                </ThemeProvider>
            </div>
        );
    }

    getIdAndCreatedDate = row => {
        return `id: ${row.id} created: ${moment(row.created).fromNow()}`
    }
}

DetailCard.propTypes = {
    data: PropTypes.array,
};
