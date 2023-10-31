import { create } from 'zustand'

interface useProjectModalStore {
  isCreateProjectModalOpen: boolean
  openCreateProjectModal: () => void
  closeCreateProjectModal: () => void
}

export const useProjectModal = create<useProjectModalStore>((set: any) => ({
  isCreateProjectModalOpen: false,
  openCreateProjectModal: () => set({ isCreateProjectModalOpen: true }),
  closeCreateProjectModal: () => set({ isCreateProjectModalOpen: false }),
}))
