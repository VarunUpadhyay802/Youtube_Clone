
import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: "app",
    initialState: {
        //so we have to think right... we are making this because we want that our ham should open and close right
        //so initialy we will keep it closed and on onclick it open right
        isMenuOpen: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false
        }

    }

})

export const { toggleMenu, closeMenu } = appSlice.actions
export default appSlice.reducer