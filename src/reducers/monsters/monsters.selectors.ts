import { RootState } from '../../app/store';

export const selectMonsters = (state: RootState) => state.monsters.monsters;

export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;

export const selectSelectedCpuMonster = (state: RootState) =>
  state.monsters.selectedCpuMonster;
