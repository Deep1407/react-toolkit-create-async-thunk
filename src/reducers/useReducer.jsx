//it is a function and it access state and action 
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    name: "pritam",
    age: "26",
    status: "Programmer",
    city: "kolkata",
    email:"raju@gmail.com"
}
//network call 
export const fetchUserName = createAsyncThunk(
    'fetchUser',
    async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data=await response.json()
      //return data
      return data[0].name
    }
  )
  export const fetchCity = createAsyncThunk(
    'fetchUser',
    async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data=await response.json()
      //return data
      return data[0].address.city
    }
  )
  // export const fetchUseremail = createAsyncThunk(
  //   'fetchUser',
  //   async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data=await response.json()
  //     //return data
  //     return data[0].email
  //   }
  // )

const userSlice = createSlice({
    name: "parson",
    initialState,
     reducers: {
    //     updateName(state, action) {
    //         state.name = action.payload;
    //     },
    //     updateAge(state, action) {
    //         state.age = action.payload
    //     },
    //     updateStatus(state, action) {
    //         state.status = action.payload
    //     },
    },
      extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserName.fulfilled, (state, action) => {
          // Add user to the state array
          //state.data=action.payload
          state.name=action.payload
        })
        builder.addCase(fetchUserName.pending, (state, action) => {
            // Add user to the state array
            state.name="Loding...."
          })
          builder.addCase(fetchUserName.rejected, (state, action) => {
            // Add user to the state array
            state.name="Try again"
          })
      },
      extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchCity.fulfilled, (state, action) => {
          // Add user to the state array
          //state.data=action.payload
          state.city=action.payload
        })
        builder.addCase(fetchCity.pending, (state, action) => {
            // Add user to the state array
            state.city="Loding...."
          })
          builder.addCase(fetchCity.rejected, (state, action) => {
            // Add user to the state array
            state.city="Try again"
          })
      },
      // extraReducers: (builder) => {
      //   // Add reducers for additional action types here, and handle loading state as needed
      //   builder.addCase(fetchUseremail.fulfilled, (state, action) => {
      //     // Add user to the state array
      //     //state.data=action.payload
      //     state.email=action.payload
      //   })
      //   builder.addCase(fetchUseremail.pending, (state, action) => {
      //       // Add user to the state array
      //       state.email="Loding...."
      //     })
      //     builder.addCase(fetchUseremail.rejected, (state, action) => {
      //       // Add user to the state array
      //       state.email="Try again"
      //     })
      // }
      
      

})

export const { updateStatus, updateAge, updateName, updateCity } = userSlice.actions
export default userSlice.reducer

