const App = () => {
  return (
    <div>
      <h1>CRUD App</h1>
      <div className="user-form">
        <h2>Add / Edit User</h2>
        <>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            required
          />

          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
          />

          <button type="submit">Save User</button>
        </>
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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td className='btns'>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
