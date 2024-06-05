import {createSlice} from '@reduxjs/toolkit';

interface CardState {
  showDetails: boolean;
  blockCard: boolean;
}

const initialState: CardState = {
  showDetails: false,
  blockCard: false,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    toggleShowDetails(state) {
      state.showDetails = !state.showDetails;
    },
    toggleBlockCard(state) {
      state.blockCard = !state.blockCard;
    },
  },
});

export const {toggleShowDetails, toggleBlockCard} = cardSlice.actions;

export default cardSlice.reducer;
