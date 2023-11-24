import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getOpenAI } from '@/api/openAi';
import moment from 'moment';
import { selectLastSearch } from '../selectors/searchesSelectors';
import { initialHistoryList } from '@/redux/helpers';

type HistoryChat = {
  id: number,
  user: string,
  role: "system" | "user" | "ai",
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

type prompt = {
  role: string,
  content: string | undefined,
}

type lastSearchIA = {
  model: string,
  messages: prompt[],
}

interface SearchesState {
  historyList: HistorySearch[];
  selectedHistory: HistorySearch | undefined;
  selectedHistoryChat: HistoryChat[] | undefined;
  currentHistory: number;
  IASearchingState: 'succeded' | 'pending' | 'failed';
  lastSearch: lastSearchIA;
}

interface CommonState {
  showSidebar: boolean;
  currentUser: string
}

// Define the initial state using that type
const initialState: SearchesState = {
  historyList: initialHistoryList,
  selectedHistory: undefined,
  selectedHistoryChat: undefined,
  currentHistory: 0,
  IASearchingState: 'succeded', 
  lastSearch: { 
    model: "gpt-3.5-turbo",
    messages: [{
        role: "system",
        content: ""
      },
      {
        role: "user",
        content: "lastUserContent?.message"
      }
    ]
  }
};

export const doCreateNewQuestionAnswer = createAsyncThunk('searches/doCreateNewQuestionAnswer', async(newData:HistoryChat, thunkAPI) => {
  try{
    thunkAPI.dispatch(createNewQuestionAnswer(newData));
  } catch (err: any) {
    return rejectWithValue(err.response)
  }
})

export const doSearchOnIA = createAsyncThunk('searches/doSearch', async(newData:HistoryChat, thunkAPI) => {
  const state = thunkAPI.getState() as { common: CommonState; searches: SearchesState; }
  try{
      let prompt = selectLastSearch(state);
      getOpenAI(prompt).then(response => {
          //write the IA response on the chat
          const IAResponse = {
            id: Math.floor(Math.random() * 100),
            role: 'ai' as const,
            user: 'OdamaChat',
            message: response.choices[0].message.content,
            typeMessage: 'string', //chat.completion --> object?
            date: moment().format('YYYY-MM-DD'),
          }
          return thunkAPI.dispatch(createNewQuestionAnswer(IAResponse));
      }).catch(err => console.log(err));
    
  } catch (err: any) {
    return rejectWithValue(err.response)
  }
})



const searchesSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    updateSelectedHistory: (state, action: PayloadAction<HistorySearch | undefined>) => {
      state.selectedHistory = action.payload;
      state.currentHistory = 0;
    }, 

    decreasePromptLeft: (state) => {
      state.historyList = state.historyList.map(item => {
        if (item.id === state.selectedHistory?.id) {
          return {...item, left: --item.left};
        }
        return item;
      })
    },

    createNewHistory: (state, action: PayloadAction<HistorySearch>) => {
      const newHistory = action.payload;
      state.historyList = [newHistory, ...state.historyList];
      state.selectedHistory = action.payload;
    }, 

    createNewQuestionAnswer: (state, action: PayloadAction<HistoryChat>) => {
      const newQuestionAnswer = state.selectedHistory && state.selectedHistory.history && state.selectedHistoryChat && {...state.selectedHistory, history: [...state.selectedHistoryChat, action.payload]} as HistorySearch;
      const filteredHistoryList = state.historyList.filter(item => item.id !== state.selectedHistory?.id);
      state.historyList = newQuestionAnswer ? [...filteredHistoryList, newQuestionAnswer] : state.historyList;
      state.selectedHistory = newQuestionAnswer;
      state.selectedHistoryChat = state.selectedHistory ? state.selectedHistory.history : [];

      const systemContent = state.selectedHistory?.history.find(item => item.role === 'system');
      const lastUserContent = state.selectedHistory?.history.findLast(item => item.role === 'user');
      const params = {
        model: "gpt-3.5-turbo",
        messages: [{
            role: "system",
            content: systemContent?.message
          },
          {
            role: "user",
            content: lastUserContent?.message
          }
        ]
      };
      state.lastSearch = params;
      state.IASearchingState = 'pending';
      //discount a token on a AI response
      if(action.payload.role==='ai'){
        state.historyList = state.historyList.map(item => {
          if (item.id === state.selectedHistory?.id) {
            return {...item, left: --item.left};
          }
          return item;
        })
      }
    }, 

    getHistoryChat: (state) => {
      state.selectedHistoryChat = state.selectedHistory ? state.selectedHistory.history : [];
    }, 
  },
  extraReducers: (builder) => {
    builder.addCase(doSearchOnIA.pending, (state) => {
      state.IASearchingState = 'pending';
    });
    builder.addCase(doSearchOnIA.fulfilled, (state) => {
      state.IASearchingState = 'succeded';
    });
    builder.addCase(doSearchOnIA.rejected, (state,action) => {
      state.IASearchingState = 'failed';
      console.log('error doSearchOnIA', action.error);
    });

    builder.addCase(doCreateNewQuestionAnswer.rejected, (state,action) => {
      console.log('error doCreateNewQuestionAnswer', action.error)
    });
  }
});

export const { updateSelectedHistory, decreasePromptLeft, createNewHistory, createNewQuestionAnswer, getHistoryChat } = searchesSlice.actions;

export default searchesSlice.reducer;
function rejectWithValue(data: any): any {
  throw new Error('Function not implemented.');
}

