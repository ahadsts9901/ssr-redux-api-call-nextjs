import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    globalState: {}
}

export const stateSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        setGlobalState: (state, action) => {
            state.globalState = { ...state?.globalState, ...action?.payload }
        },
    }
})

export const { setGlobalState } = stateSlice.actions

export default stateSlice.reducer