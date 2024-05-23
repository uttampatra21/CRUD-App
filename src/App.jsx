import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUsers, showUsers } from "./redux/userDetailsSlice";

const App = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.app.users);
  const loading = useSelector((state) => state.app.loading);
  const [users, setUsers] = useState({});
  const [getUpdatData, setgetUpdateData] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const getUpdateData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  // Create Action

  const handelSubmit = (e) => {
    console.log("...users", users);
    e.preventDefault();
    dispatch(createUser(users));
  };

  // READ Action
  useEffect(() => {
    dispatch(showUsers());
  }, []);

  // Update ACTION

  const handleEdit = () => {
    setShowPopup(true);
  };

  const handelUpdate = (e) => {
    console.log("...getUpdateData", getUpdatData);
    setgetUpdateData({ ...users, [e.target.name]: e.target.value });
    e.preventDefault();
  };

  if (loading) {
    return (
      <div>
        <img
          src="https://loading.io/assets/mod/spinner/spinner/lg.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <>
      <div className="x-app">
        <div className="user-form">
          <form onSubmit={handelSubmit} className="form">
            <div className="flex">
              <label>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                required
                onChange={getUserData}
              />
            </div>

            <div className="flex">
              <label>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                required
                onChange={getUserData}
              />
            </div>

            <button type="submit">Save User</button>
          </form>
        </div>
        <div className="user-list">
          <h2>User List</h2>
          <div className="search-bar">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search users"
            />
            <button type="button">Search</button>
          </div>

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td className="btns">
                        <button type="button" onClick={() => handleEdit(data)}>
                          Edit
                        </button>
                        <button
                          onClick={() => dispatch(deleteUsers(data.id))}
                          type="button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="edit-popup">
          <div className="edit-popup-inner">
            <form onSubmit={handelUpdate} className="form">
              <div className="flex">
                <label>Name:</label>
                <input
                  type="text"
                  id="edit-name"
                  name="name"
                  placeholder="Enter name"
                  required
                  onChange={getUserData}
                />
              </div>

              <div className="flex">
                <label>Email:</label>
                <input
                  type="email"
                  id="edit-email"
                  name="email"
                  placeholder="Enter email"
                  required
                  onChange={getUserData}
                />
              </div>

              <button type="submit">Update User</button>
              <button type="button" onClick={() => setShowPopup(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
