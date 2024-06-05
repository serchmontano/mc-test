import {createSlice} from '@reduxjs/toolkit';

interface SettingsState {
  enableFaceID: boolean;
  enableWallet: boolean;
}

const initialState: SettingsState = {
  enableFaceID: true,
  enableWallet: true,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleFaceID(state) {
      state.enableFaceID = !state.enableFaceID;
    },
    toggleWallet(state) {
      state.enableWallet = !state.enableWallet;
    },
  },
});

export const {toggleFaceID, toggleWallet} = settingsSlice.actions;

export default settingsSlice.reducer;
