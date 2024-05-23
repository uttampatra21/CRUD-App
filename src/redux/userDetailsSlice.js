import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Create Method

export const createUser = createAsyncThunk(
  "userDetails/createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://664b669735bbda10987cd002.mockapi.io/crud",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        return rejectWithValue(response.statusText);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Read method

export const showUsers = createAsyncThunk(
  "userDetails/showUsers",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://664b669735bbda10987cd002.mockapi.io/crud"
      );

      if (!response.ok) {
        return rejectWithValue(response.statusText);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete Method

export const deleteUsers = createAsyncThunk(
  "userDetails/deleteUsers",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://664b669735bbda10987cd002.mockapi.io/crud/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        return rejectWithValue(response.statusText);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const userDetails = createSlice({
  name: "userDetails",

  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.meta.arg);
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetails.reducer;
