import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardProps } from '../../components/Card/Card';

interface ResultState {
    data: CardProps[];
    loading: boolean;
}

const initialState: ResultState = {
    data: [],
    loading: false,
};

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        setLoading(state: any, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setData(state: any, action: PayloadAction<CardProps[]>) {
            state.data = action.payload;
        },
    },
});

export const { setLoading, setData } = resultSlice.actions;

export default resultSlice.reducer;
