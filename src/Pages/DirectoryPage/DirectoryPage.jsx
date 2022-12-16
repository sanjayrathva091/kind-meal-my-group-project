import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import DirectoryCard from "../../Components/DirectoryPageComponents/DirectoryCard";
import { getVegRes } from "../../Redux/AppReducer/actions";

const DirectoryPage = () => {
  const shopDir = useSelector((store) => store.AppReducer.vegRes);
  const totalData = useSelector((store) => store.AppReducer.totalData);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [city, setCity] = useState(searchParams.get("Address.City") || "");
  const [pageNo, setPageNo] = useState(searchParams.get("_page") || 1);
  const [btnArr] = useState(Array(Math.ceil(41 / 4)).fill(1));

  const FilterByCityHandler = (e) => {
    setCity(e.target.value);
  };

  const PageNoHandler = (e) => {
    setPageNo(e.target.value);
  };

  useEffect(() => {
    console.log("Page No:", pageNo, searchParams.get("_page"));
    const queryParams = {
      _page: pageNo,
      _limit: 4,
    };
    if (city !== "") {
      queryParams["Address.City"] = city;
    }
    setSearchParams(queryParams);
  }, [city, pageNo, searchParams, setSearchParams]);

  useEffect(() => {
    const city = searchParams.get("Address.City");
    const page = searchParams.get("_page");
    const limit = searchParams.get("_limit");
    console.log("hello", city, page, limit);
    const queryParams = {
      params: {
        _page: page,
        _limit: limit,
      },
    };
    if (city !== null) {
      queryParams.params["Address.City"] = city;
    }
    dispatch(getVegRes(queryParams));
  }, [city, searchParams, dispatch]);

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
              <select name="" onChange={FilterByCityHandler}>
                <option value="">All Shops in Malaysia</option>
                <option value="Kuala+Lumpur">Kuala Lumpur</option>
                <option value="Selangor">Selangor</option>
                <option value="Johor">Johor</option>
                <option value="Ampang">Ampang</option>
                <option value="Kepong">Kepong</option>
              </select>
              <button>Search Shops</button>
              <button>Add A Shop</button>
            </div>
          </div>
        </div>
        {console.log("data size", btnArr, totalData)}

        <div className="main-container">
          <div className="filter-container">
            <button>Vegetarian Directory</button>
            <button>Featured Restaurents</button>
            <button>Food Menu</button>
            <button>Food Map</button>
          </div>
          <div className="pageBtn">
            {/* Page button */}
            <span>Page: </span>
            {btnArr?.map((_, i) => (
              <button key={i} value={i + 1} onClick={PageNoHandler}>
                {i + 1}
              </button>
            ))}
          </div>
          <div className="cards-container">
            {shopDir?.map((item) => {
              return (
                <DirectoryCard
                  key={item.id}
                  shopName={item.shopName}
                  description={item.description}
                  Address={`${item.Address.Street} ${item.Address.Landmark} ${item.Address.City} ${item.Address.StateOrTerritory}`}
                  Phone={item.Phone}
                  OpeningHours={item.OpeningHours}
                />
              );
            })}
            {shopDir.length === 0 && <h1>No Items Found</h1>}
          </div>
          <div className="pageBtn">
            <span>Page: </span>
            {btnArr?.map((_, i) => (
              <button key={i} value={i + 1} onClick={PageNoHandler}>
                {i + 1}
              </button>
            ))}
          </div>
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
  .cards-container {
    margin: 0 8.8rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, max-content));
    grid-gap: 3rem;
  }
  .pageBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .pageBtn button {
    font-size: 1rem;
    border: 0;
    background-color: white;
    color: #04be5a;
  }
  .pageBtn button:hover {
    cursor: pointer;
  }
  .pageBtn button:focus {
    color: #f53838;
  }
`;
