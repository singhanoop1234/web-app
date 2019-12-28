import React from 'react';
import styled from 'styled-components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import DetailCard from '../DetailCardComponent/DetailCard';
import SearchComponent from '../SearchComponent/SearchComponent';
import FilterComponent from '../FilterComponent/FilterComponent';
const StyledGap = styled.div`
  margin-top: 20px;
`;

const theme = createMuiTheme({
  overrides: {
    MuiGrid: {
      container: {
        background: 'white',
        padding: '5px',
      },
      item: {
        margin: '10px',
      },
    },
    MuiTypography: {
      h2: {
        textAlign: 'center',
      },
    },
  }
});


export default class  App extends React.Component {

  constructor() {
    super();
    this.state = {
        data: [],
        executedData: [],
        isLodaing: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.sortData = this.sortData.bind(this);
  }

  handleChange = value => {
    let items = [];
    if (value.length > 0) {
        items = this.state.data;
        items = this.state.data.filter(item => {
            return item.name.toLowerCase().includes(value.toLowerCase());
        });
    } else {
        items = this.state.executedData;
    }
    this.setState({data: items})
  }

  sortData = sortType => {
    let items = [];
    if(sortType === 'asc') {
      items = this.state.data.sort((a,b) => a.id - b.id);
    } else {
      items = this.state.data.sort((a,b) => b.id - a.id);
    }

    this.setState({data: items});
  }

  componentDidMount() {
      this.setState({isLodaing: true});
      fetch('https://rickandmortyapi.com/api/character/ ').then(results => {
          return results.json();
      }).then(data =>
          this.setState({data: data.results, executedData: data.results, isLodaing: false}));
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Typography variant="h2">Ricky and Morty show</Typography>
        <Grid
          justify="flex-start"
          alignItems="flex-start"
          container
        >
          <Grid item xs={2}>
            <StyledGap />
            <FilterComponent />
          </Grid>
          <Grid item xs>
            <SearchComponent
              handleChange={this.handleChange}
              sortData={this.sortData}
            />
            <DetailCard data={this.state.data}/>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
