# React Redux ♥️ Redux-Toolkit

## Notes:

1.  Run Command `npm install redux react-redux @reduxjs/toolkit`
2.  Create A Basic Setup Of The React Web App.
3.  `import { configureStore } from "@reduxjs/toolkit";`
4.  `import { Provider } from "react-redux";`
5.  Create Store
    ```
    const store = configureStore({
    reducer: {},
    });
    ```
6.  Wrap App.js with Provider inside index.js
    ```
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App />
            </Provider>
        </React.StrictMode>
    );
    ```
7.  Create the first Slice

    ```
    import { createSlice } from "@reduxjs/toolkit";

    export const userSlice = createSlice({
    name: "user",
    initialState: { value: { username: "Not Logged In", password: "" } },
    reducers: {
    login: (state, action) => {
    state.value = action.payload;
    },
    },
    });

    export default userSlice.reducer;
    ```

8.  Add user reducer to index.js -> store

    ```
    import userReducer from "./features/user";

    const store = configureStore({
    reducer: {
    user: userReducer,
    },
    });

    ```

9.  For accessing values from the store, use the useSelector hook from react-redux. For example, refer Profile.js

    ```
       import React from "react";

       import { useSelector } from "react-redux";

       const Profile = () => {
       const user = useSelector((state) => state.user.value);
       return (
       <div>
       <h4>username: {user.username}</h4>
       <h4>password: {user.password}</h4>
       </div>
       );
       };

       export default Profile;
    ```

10. For updating data, export the actions in store.

```
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { username: "Not Logged In", password: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
```

11. For updating the value in the slice, use useDispatch Hook. For example, refer Login.js.