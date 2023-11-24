import type { RootState } from '../store'

export const selectHistoryList = (state: RootState) => state.searches.historyList;

export const selectSelectedHistory = (state: RootState) => state.searches.selectedHistory;

export const selectSelectedHistoryId = (state: RootState) => state.searches.currentHistory;

export const selectSelectedHistoryChat = (state: RootState) => state.searches.selectedHistoryChat;

export const selectLastSearch = (state: RootState) => state.searches.lastSearch;

export const selectIASearchingState = (state: RootState) => state.searches.IASearchingState;