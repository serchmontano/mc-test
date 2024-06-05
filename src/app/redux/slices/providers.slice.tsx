import {createSlice} from '@reduxjs/toolkit';

interface ProviderState {
  providers: string[];
}

const initialState: ProviderState = {
  providers: [],
};

export const providersSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    addProvider(state, action) {
      state.providers.push(action.payload);
    },
    removeProvider(state, action) {
      state.providers = state.providers.filter(
        provider => provider !== action.payload,
      );
    },
  },
});

export const {addProvider, removeProvider} = providersSlice.actions;
export default providersSlice.reducer;
