import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardProps } from '../../components/Card/Card';
import { FilterState } from '../filterReducer';

const { REACT_APP_BACKEND_ORIGIN, REACT_APP_FETCH_LIMIT, } = process.env;

const orderMap: any = {
    Lowest: 'asc',
    Highest: 'desc',
    Oldest: 'asc',
    Latest: 'desc',
};

interface FetchProps {
    filters: FilterState;
    nextPage: number;
    replace?: boolean;
}

export interface ResultState {
    data: CardProps[];
    loading: boolean;
    error: boolean;
    currentPage: number;
    hasNext: boolean;
}

export const fetchResults = createAsyncThunk(`fetchResults`, async (args: FetchProps) => {
    const {
        filters: { keyword, tier, sortByPrice, sortByTime },
        nextPage,
        replace = false,
    } = args;
    const queryParams = new URLSearchParams();
    if (keyword.trim()) {
        queryParams.append('q', keyword);
    }
    if (tier) {
        queryParams.append('tier', tier);
    }
    queryParams.append('_sort', 'price,createdAt');
    queryParams.append('_order', `${orderMap[sortByPrice]},${orderMap[sortByTime]}`);
    queryParams.append('_limit', replace ? String(nextPage * parseInt(REACT_APP_FETCH_LIMIT as string)) : REACT_APP_FETCH_LIMIT as string);
    queryParams.append('_page', replace ? '1' : String(nextPage));

    const response = await fetch(`${REACT_APP_BACKEND_ORIGIN}/products?${queryParams.toString()}`);
    return response?.json();
});

const initialState: ResultState = {
    data: [],
    loading: false,
    error: false,
    currentPage: 1,
    hasNext: true,
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
        resetResult(state: any) {
            state.data = [];
            state.currentPage = 0;
            state.hasNext = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchResults.pending, (state, action) => {
            const { replace } = action.meta.arg;
            if (!replace) {
                // don't let user know we're auto-reloading whole data
                state.loading = true;
            }
        });
        builder.addCase(fetchResults.fulfilled, (state, action) => {
            const { nextPage, replace } = action.meta.arg;
            state.loading = false;
            state.error = false;
            if (action.payload.length) {
                if (replace) {
                    // replace data with new data and leave everything else as they are
                    state.data = action.payload;
                } else {
                    // append new data to existing data
                    state.data.push(...action.payload);
                    state.currentPage = nextPage;
                    state.hasNext = true;
                }
            } else {
                // last time we got no data, so no need to fetch again
                state.hasNext = false;
            }
        });
        builder.addCase(fetchResults.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const { setLoading, setData, resetResult } = resultSlice.actions;

export default resultSlice.reducer;
