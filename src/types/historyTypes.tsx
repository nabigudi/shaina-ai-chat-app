export type HistorySearch = {
  id: number,
  title: string,
  createdAt: string,
  left: number,
  createdBy: string,
  history: HistoryChat[]
}

export type HistoryChat = {
  id: number,
  user: string,
  role: "system" | "user" | "ai",
  message: string,
  typeMessage: string,
  date: string
}