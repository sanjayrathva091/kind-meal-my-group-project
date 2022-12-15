import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getVegRes } from "../../Redux/AppReducer/actions";

const DirectoryPage = () => {
  const shopDir = useSelector((store) => store.AppReducer.vegRes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVegRes());
  }, []);

  return (
    <DirectoryPageWrapper>
      <Directory>
        <div className="searchVegRes">
          <div>
            <h1>Vegetarian Restaurants in Malaysia</h1>
            <p>
              Looking for even more delicious choices? Explore hundreds of
              vegetarian and vegan restaurants in Malaysia.
            </p>
            <p>
              Are you a restaurant or cafe owner? Boost your business with an
              attractive KindMeal profile and deals for FREE. Find out more or
              contact us now.{" "}
            </p>
            <div className="searchShop">
              <input type="text" placeholder="Search Shop Name" />
              <select name="">
                <option value="">All Shops in Malaysia</option>
              </select>
              <button>Search Shops</button>
              <button>Add A Shop</button>
            </div>
          </div>
        </div>
        {console.log("Loaded", shopDir)}
        <div className="main-container">
          <div className="filter-container">
            <button>Vegetarian Directory</button>
            <button>Featured Restaurents</button>
            <button>Food Menu</button>
            <button>Food Map</button>
          </div>
          <div></div>
          <div className="cards-container">{/* Add Cards here */}</div>
          <div></div>
        </div>
      </Directory>
    </DirectoryPageWrapper>
  );
};

export default DirectoryPage;

const DirectoryPageWrapper = styled.div`
  border: 0px solid black;
`;

const Directory = styled.div`
  border: 0px solid black;
  .searchVegRes {
    background-color: #f0f0f0;
  }

  .searchVegRes > div {
    margin: 0 8rem;
  }
  .searchVegRes > div > h1 {
    font-weight: 400;
    text-align: left;
    color: #444444;
    padding-left: 0.8rem;
    margin-top: 0;
    padding-top: 1.3rem;
  }
  .searchVegRes > div > p {
    text-align: left;
    padding-left: 0.8rem;
    font-size: 15px;
    color: #444444;
  }
  .searchShop {
    display: flex;
    justify-content: space-between;
    padding: 0.95rem;
  }
  .searchShop input {
    border: 1px solid #cecece;
    border-radius: 6px;
    font-size: 1rem;
    padding: 8px;
  }
  .searchShop select {
    font-size: 1rem;
    color: #666666;
    background-color: white;
    border: 1px solid #cecece;
    padding: 8px;
    border-radius: 6px;
  }
  .searchShop button {
    border: 0;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    padding: 6px 36px;
    color: white;
  }
  .searchShop button:first-of-type {
    background-color: #f53838;
  }
  .searchShop button:last-of-type {
    background-color: #04be5a;
  }
  .main-container {
    border: 0px solid black;
  }
  .filter-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
    margin: 0 8rem;
    padding: 1rem 0.9rem;
  }
  .filter-container button {
    width: 100%;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.6rem 2.5rem;
    border: 1px solid #cecece;
    border-radius: 6px;
    background-color: white;
    color: #666666;
  }
  .filter-container button:focus {
    background-color: #04be5a;
    color: white;
  }
`;
