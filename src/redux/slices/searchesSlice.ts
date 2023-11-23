import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

type HistorySearch = {
  id: number,
  title: string,
  createdAt: string,
  left: number,
  createdBy: string,
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
    createdBy: 'Ana Clara'
  },
  {
    id: 2,
    title: 'User Persona',
    createdAt: '2023-11-21',
    left: 1,
    createdBy: 'Ana Clara'
  },
  {
    id: 3,
    title: 'Nuevo chat',
    createdAt: '2023-11-21',
    left: 2,
    createdBy: 'Ana Clara'
  },
  {
    id: 4,
    title: 'Descripción',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'Ana Clara'
  },
  {
    id: 10,
    title: 'Referencias Visuales',
    createdAt: '2023-11-21',
    left: 5,
    createdBy: 'Ana Clara'
  },
  {
    id: 13,
    title: 'Diagrama de Flujo',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'Ana Clara'
  },
  {
    id: 17,
    title: 'User Flow 2',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'José'
  },
  {
    id: 23,
    title: 'Diagrama de Flujo',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'José'
  },
  {
    id: 33,
    title: 'Nuevo chat',
    createdAt: '2023-11-21',
    left: 2,
    createdBy: 'José'
  },
  {
    id: 18,
    title: 'User Flow 3',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'Ana Clara'
  },
  {
    id: 19,
    title: 'User Flow 4',
    createdAt: '2023-11-21',
    left: 6,
    createdBy: 'Ana Clara'
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
    updateSelectedHistory: (state, action: PayloadAction<HistorySearch | null>) => {
      state.selectedHistory = action.payload;
      state.currentHistory = 0;
    }, 

    decreasePromptLeft: (state, action: PayloadAction<HistorySearch>) => {
      state.historyList = state.historyList.map(history => {
        if (history.id === state.selectedHistory?.id) {
          return {...history, left: --history.left};
        }
        return history;
      })
    },

    createNewHistory: (state, action: PayloadAction<HistorySearch>) => {
      const newHistory = action.payload;
      state.historyList = [...state.historyList, newHistory];
    }, 

  },
  extraReducers: (builder) => {
  }
});


export const { updateSelectedHistory, decreasePromptLeft, createNewHistory } = searchesSlice.actions;

export default searchesSlice.reducer;
