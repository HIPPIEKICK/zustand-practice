import { create } from "zustand"

export const useUserStore = create((set) => ({
  user: "No name yet",
  coordinates: null,
  description: null,
  actions: [],

  setNewUsername: (userName) => set({ user: userName }),
  setDescription: (description) => set({ description }),
  setActions: (actions) => set({ actions })
}))
