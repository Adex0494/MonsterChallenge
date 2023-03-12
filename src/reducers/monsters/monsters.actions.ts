import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);


// export const postBattle = (monster1Id: string, monster2Id: string)  => createAsyncThunk<any>(
//   'monsters/postBattle',
//    () => MonsterService.postBattle(monster1Id, monster2Id)
// )

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setSelectedCpuMonster = createAction<Monster | null>(
  'monsters/setSelectedCpuMonster',
);
