import React, { useState, useEffect } from 'react';
import styledComponents from 'styled-components';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async (id) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_APIKEY}`
    );

    const detailData = await data.json();
    console.log(detailData);
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails(id);
  }, [id]);

  if (!details) return <div>Loading your recipe...</div>;
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          onClick={() => {
            setActiveTab('instructions');
          }}
          className={activeTab === 'instructions' ? 'active' : ''}
        >
          Instructions
        </Button>
        <Button
          onClick={() => {
            setActiveTab('ingredients');
          }}
          className={activeTab === 'ingredients' ? 'active' : ''}
        >
          Ingredients
        </Button>

        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((item) => {
              return <li key={item.id}>{item.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styledComponents.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;

.active{
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
}

h2{
  margin-bottom: 2rem;
}

li{
  font-size: 1.2rem;
  line-height: 2.5rem;
}

ul{
  margin-top: 2rem;
}
`;

const Button = styledComponents.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`;

const Info = styledComponents.div`
margin-left: 10rem;
`;
export default Recipe;
