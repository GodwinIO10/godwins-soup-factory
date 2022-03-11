import { createSlice } from "@reduxjs/toolkit"


const userSlice =  createSlice ({
    name: "user",
    initialState: {                 // name and email can be left empty when app is run at start
        name: "john",
        email: "john@gmail.com"
    },
    reducers: {
        update: (state, action) => {
            
        }
    }
})

export default userSlice