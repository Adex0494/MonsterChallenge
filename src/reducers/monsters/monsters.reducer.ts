import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { fetchMonstersData, setSelectedMonster, setSelectedCpuMonster, postBattle } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  selectedCpuMonster: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  selectedCpuMonster: null
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));


  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setSelectedCpuMonster, (state, action) => ({
    ...state,
    selectedCpuMonster: action.payload,
  }));
});
