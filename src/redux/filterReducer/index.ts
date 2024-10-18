import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
    keyword: string;
    tier: string;
    sortByTime: string;
    sortByPrice: string;
}

const initialState: FilterState = {
    keyword: '',
    tier: '',
    sortByPrice: 'Latest',
    sortByTime: 'Highest',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setKeyword(state: any, action: PayloadAction<string>) {
            state.keyword = action.payload;
        },
        setTier(state: any, action: PayloadAction<string>) {
            state.tier = action.payload;
        },
        setSortByTime(state: any, action: PayloadAction<string>) {
            state.sortByTime = action.payload;
        },
        setSortByPrice(state: any, action: PayloadAction<string>) {
            state.sortByPrice = action.payload;
        },
        resetFilter(state: any) {
            state.keyword = '';
            state.tier = '';
            state.sortByPrice = 'Latest';
            state.sortByTime = 'Highest';
        }
    },
});

export const { setKeyword, setSortByPrice, setSortByTime, setTier, resetFilter } = filterSlice.actions;

export default filterSlice.reducer;
