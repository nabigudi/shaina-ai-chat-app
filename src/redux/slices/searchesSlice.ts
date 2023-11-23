import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

type HistoryChat = {
  id: number,
  user: string,
  typeUser: "user" | "ai",
  message: string,
  typeMessage: string,
  date: string
}

type HistorySearch = {
  id: number,
  title: string,
  createdAt: string,
  left: number,
  createdBy: string,
  history: HistoryChat[]
}

interface SearchesState {
  historyList: HistorySearch[];
  selectedHistory: HistorySearch | undefined;
  selectedHistoryChat: HistoryChat[] | undefined;
  currentHistory: number;
}

const initialHistoryList = [
  {
    id: 1,
    title: 'User Flow',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        typeUser: "user" as const,
        message: 'Necesito los archivos que te pedí ayer. 1',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        typeUser: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 2,
    title: 'User Persona',
    createdAt: '2023-11-21',
    left: 1,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        typeUser: "user" as const,
        message: 'Necesito los archivos que te pedí ayer. 2',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        typeUser: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 3,
    title: 'Nuevo chat',
    createdAt: '2023-11-21',
    left: 2,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        typeUser: "user" as const,
        message: 'Necesito los archivos que te pedí ayer.3',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        typeUser: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 4,
    title: 'Descripción',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        typeUser: "user" as const,
        message: 'Necesito los archivos que te pedí ayer.4',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        typeUser: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 10,
    title: 'Referencias Visuales',
    createdAt: '2023-11-21',
    left: 5,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        typeUser: "user" as const,
        message: 'Necesito los archivos que te pedí ayer.5',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        typeUser: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 13,
    title: 'Diagrama de Flujo',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        typeUser: "user" as const,
        message: 'Necesito los archivos que te pedí ayer.6',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        typeUser: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 17,
    title: 'User Flow 2',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'José',
    history: [
      {
        id: 1,
        user: 'José',
        typeUser: "user" as const,
        message: 'Necesito los archivos que te pedí ayer.7',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        typeUser: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 23,
    title: 'Diagrama de Flujo',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'José',
    history: [
      {
        id: 1,
        user: 'José',
        typeUser: "user" as const,
        message: 'Necesito los archivos que te pedí ayer.8',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        typeUser: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 33,
    title: 'Nuevo chat',
    createdAt: '2023-11-21',
    left: 2,
    createdBy: 'José',
    history: [
      {
        id: 1,
        user: 'José',
        typeUser: "user" as const,
        message: 'Necesito los archivos que te pedí ayer.9',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        typeUser: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 18,
    title: 'User Flow 3',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        typeUser: "user" as const,
        message: 'Necesito los archivos que te pedí ayer.10',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        typeUser: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 19,
    title: 'User Flow 4',
    createdAt: '2023-11-21',
    left: 6,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        typeUser: "user" as const,
        message: 'Necesito los archivos que te pedí ayer.11',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        typeUser: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  }
]

// Define the initial state using that type
const initialState: SearchesState = {
  historyList: initialHistoryList,
  selectedHistory: undefined,
  selectedHistoryChat: undefined,
  currentHistory: 0,
};

const searchesSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    updateSelectedHistory: (state, action: PayloadAction<HistorySearch | undefined>) => {
      state.selectedHistory = action.payload;
      state.currentHistory = 0;
    }, 

    decreasePromptLeft: (state, action: PayloadAction<HistorySearch>) => {
      state.historyList = state.historyList.map(item => {
        if (item.id === state.selectedHistory?.id) {
          return {...item, left: --item.left};
        }
        return item;
      })
    },

    createNewHistory: (state, action: PayloadAction<HistorySearch>) => {
      const newHistory = action.payload;
      state.historyList = [...state.historyList, newHistory];
    }, 

    getHistoryChat: (state) => {
      state.selectedHistoryChat = state.selectedHistory?.history;
    }, 

  },
  extraReducers: (builder) => {
  }
});


export const { updateSelectedHistory, decreasePromptLeft, createNewHistory, getHistoryChat } = searchesSlice.actions;

export default searchesSlice.reducer;
