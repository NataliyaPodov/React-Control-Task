import { createSlice} from '@reduxjs/toolkit'

type Like = {
[id: number]: boolean
}

const initialState: Like = {

}

export const LikeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toogleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    },
})

export const { toogleLike } = LikeSlice.actions

export default LikeSlice.reducer