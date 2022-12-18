import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import MemberFunCard from "../../Components/AdminUserComponents/MemberFunCard";
import MerchantFunCard from "../../Components/AdminUserComponents/MerchantFunCard";
import { addShop } from "../../Redux/AppReducer/actions";

const initialState = {
  shopName: "",
  description: "",
  Address: {
    Street: "",
    Landmark: "",
    PostalCode: "",
    StateOrTerritory: "",
    Country: "",
    City: "",
  },
  Phone: "",
  OpeningHours: "",
};

const AdminPage = () => {
  const [shop, setShop] = useState(initialState);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (e.target?.id === "Address") {
      setShop((prev) => ({
        ...prev,
        [e.target.id]: { ...prev.Address, [name]: value },
      }));
    } else {
      setShop((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    dispatch(addShop(shop));
    setShop(initialState);
  };

  return (
    <AdminPageWrapper>
      <AdminsPage>
        <AdminSidebar>
          {/* Add Card */}
          <MerchantFunCard />
          <MemberFunCard />
        </AdminSidebar>
        <div>
          {/* Add Form */}
          <h1>Admin Dashboard</h1>
          <form onSubmit={handleAdminSubmit}>
            <div>
              <p>Shop Name</p>
              <div>
                <input
                  type="text"
                  value={shop.shopName}
                  name="shopName"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <p>Description</p>
              <div>
                <input
                  type="text"
                  value={shop.description}
                  name="description"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <p>Address</p>
              <div className="addressWrapper">
                <div className="addressBox">
                  <label htmlFor="">Street</label>
                  <input
                    type="text"
                    value={shop.Address.Street}
                    id="Address"
                    name="Street"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="addressBox">
                  <label htmlFor="">Landmark</label>
                  <input
                    type="text"
                    value={shop.Address.Landmark}
                    id="Address"
                    name="Landmark"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="addressBox">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    value={shop.Address.City}
                    id="Address"
                    name="City"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="addressBox">
                  <label htmlFor="">Postal Code</label>
                  <input
                    type="text"
                    value={shop.PostalCode}
                    id="Address"
                    name="Postal Code"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="addressBox">
                  <label htmlFor="">State</label>
                  <input
                    type="text"
                    value={shop.Address.StateOrTerritory}
                    id="Address"
                    name="StateOrTerritory"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <p>Phone</p>
              <div>
                <input
                  type="text"
                  value={shop.Phone}
                  name="Phone"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <p>Opening Hours</p>
              <div>
                <input
                  type="text"
                  value={shop.OpeningHours}
                  name="OpeningHours"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="addShopBtn">
              <button type="submit">Create Shop</button>
            </div>
          </form>
        </div>
      </AdminsPage>
    </AdminPageWrapper>
  );
};

export default AdminPage;

const AdminPageWrapper = styled.div`
  border: 0px solid black;
  margin: 1rem 8rem;
`;

const AdminsPage = styled.div`
  border: 0px solid black;
  display: grid;
  grid-template-columns: 300px 1fr;
  text-align: left;
  div > h1 {
    color: #2bb673;
    font-family: "Roboto", Arial;
    font-weight: 400;
  }
  form {
    border: 0px solid black;
  }
  form > div {
    border: 0px solid black;
    display: grid;
    grid-template-columns: 200px 400px;
    align-items: center;
  }
  form > div > div > input {
    width: 100%;
    font-size: 1rem;
    padding: 5px;
    border: 1px solid #cecece;
    border-radius: 3px;
  }
  .addressWrapper > div {
    margin: 0.3rem;
  }
  .addressBox {
    border: 0px solid red;
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
  }
  .addressBox input {
    width: 100%;
    font-size: 1rem;
    padding: 5px;
    border: 1px solid #cecece;
    border-radius: 3px;
  }
  .addShopBtn {
    padding: 1rem 0;
  }
  .addShopBtn button {
    background-color: #ff3a3a;
    color: white;
    font-family: "Roboto", Arial;
    padding: 0.5rem 2rem;
    border: 0;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 400;
  }
  .addShopBtn button:hover {
    background-color: #d41f1f;
  }
`;

const AdminSidebar = styled.div`
  margin: 1.2rem 0;
`;
