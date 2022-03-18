import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styledComponents from 'styled-components';

const SearchResult = () => {
  const { term } = useParams();
  const [searched, setSearched] = useState([]);

  const fetchSearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  };

  useEffect(() => {
    fetchSearch(term);
  }, [term]);

  return (
    <Grid>
      {searched.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styledComponents.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default SearchResult;
