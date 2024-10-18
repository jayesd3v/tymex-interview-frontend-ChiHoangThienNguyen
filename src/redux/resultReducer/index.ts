import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardProps } from '../../components/Card/Card';
import { FilterState } from '../filterReducer';

const { REACT_APP_BACKEND_ORIGIN } = process.env;

const orderMap: any = {
    Lowest: 'asc',
    Highest: 'desc',
    Oldest: 'asc',
    Latest: 'desc',
};

interface FetchProps {
    filters: FilterState;
    nextPage: number;
}

export interface ResultState {
    data: CardProps[];
    loading: boolean;
    error: boolean;
    nextPage: number;
    hasNext: boolean;
}

export const fetchResults = createAsyncThunk(`fetchResults`, async (args: FetchProps) => {
    const {
        filters: { keyword, tier, sortByPrice, sortByTime },
        nextPage,
    } = args;
    const queryParams = new URLSearchParams();
    if (keyword.trim()) {
        queryParams.append('q', keyword);
    }
    if (tier) {
        queryParams.append('tier', tier);
    }
    queryParams.append('_sort', 'createdDate,price');
    queryParams.append('_order', `${orderMap[sortByTime]},${orderMap[sortByPrice]}`);
    queryParams.append('_limit', '20');
    queryParams.append('_page', String(nextPage));

    const response = await fetch(`${REACT_APP_BACKEND_ORIGIN}/products?${queryParams.toString()}`);
    return response?.json();
});

const initialState: ResultState = {
    data: [],
    loading: false,
    error: false,
    nextPage: 1,
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
            state = { ...initialState };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchResults.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchResults.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            if (action.payload.length) {
                state.data.push(...action.payload);
                state.nextPage++;
                state.hasNext = true;
            } else {
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
