import type { RootState } from '../store'

export const selectShowSidebar = (state: RootState) => state.common.showSidebar;

export const selectCurrentUser = (state: RootState) => state.common.currentUser;