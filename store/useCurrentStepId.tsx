import { create } from 'zustand'

import { FormStepId } from '@/types'

interface useCurrentStepIdStore {
  currentStepId: FormStepId
  setCurrentStepId: (stepId: FormStepId) => void
}

export const useCurrentStepId = create<useCurrentStepIdStore>((set: any) => ({
  currentStepId: 'WELCOME_PAGE',
  setCurrentStepId: (stepId: any) => set({ currentStepId: stepId }),
}))
