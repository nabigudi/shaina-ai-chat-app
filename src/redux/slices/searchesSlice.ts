import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import moment from 'moment';

type HistorySearch = {
  id: number,
  title: string,
  createdAt: string,
  left: number,
}
// Define a type for the slice state
interface SearchesState {
  historyList: HistorySearch[];
  selectedHistory: HistorySearch | null;
  currentHistory: number;
}

const initialHistoryList = [
  {
    id: 1,
    title: 'User Flow',
    createdAt: '2023-11-21',
    left: 20,
  },
  {
    id: 2,
    title: 'User Persona',
    createdAt: '2023-11-21',
    left: 20,
  },
  {
    id: 3,
    title: 'Nuevo chat',
    createdAt: '2023-11-21',
    left: 20,
  },
  {
    id: 4,
    title: 'Descripción',
    createdAt: '2023-11-21',
    left: 20,
  },
  {
    id: 10,
    title: 'Referencias Visuales',
    createdAt: '2023-11-21',
    left: 20,
  },
  {
    id: 13,
    title: 'Diagrama de Flujo',
    createdAt: '2023-11-21',
    left: 20,
  },
  {
    id: 17,
    title: 'User Flow 2',
    createdAt: '2023-11-21',
    left: 20,
  }
]
// Define the initial state using that type
const initialState: SearchesState = {
  historyList: initialHistoryList,
  selectedHistory: null,
  currentHistory: 0,
};

const searchesSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    updateSelectedHistory: (state, action: PayloadAction<HistorySearch>) => {
      state.selectedHistory = action.payload;
      state.currentHistory = action.payload.id;
    }, 

    decreasePromptLeft: (state, action: PayloadAction<HistorySearch>) => {
      state.historyList = state.historyList.map(history => {
        if (history.id === state.selectedHistory?.id) {
          return {...history, left: --history.left};
        }
        return history;
      })
    },

    createNewHistory: (state, action: PayloadAction<string>) => {
      const newHistory = {
        id: Math.random(),
        title: action.payload,
        createdAt: moment().format('YYYY-MM-DD'),
        left: 1000,
      }
      state.historyList = [...state.historyList, newHistory];
    }, 
  },
  extraReducers: (builder) => {
  }
});


export const { updateSelectedHistory, decreasePromptLeft, createNewHistory } = searchesSlice.actions;

export default searchesSlice.reducer;
