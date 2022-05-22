import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PlayerUnit {
    type: number,
    starLevel: number,
    level: number
}

export interface PlayerRosterState {
  playerRoster: Record<string, PlayerUnit>
}

const initialState: PlayerRosterState = {
  playerRoster: {}
};

export const playerRosterSlice = createSlice({
  name: 'playerRoster',
  initialState,
  reducers: {
    hydratePlayerRoster: (state, action: PayloadAction<Record<string, PlayerUnit>>) => {
      state.playerRoster = action.payload;
    }
  }
});

export const { 
  hydratePlayerRoster
} = playerRosterSlice.actions;

export default playerRosterSlice.reducer;