import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ScoreStore {
  maxScore: number
  score: number
  init: () => Promise<void>
  updateScore: (win: boolean) => Promise<void>
  resetScore: () => void
}

const useScoreStore = create<ScoreStore>((set) => ({
  maxScore: 0,
  score: 0,

  init: async () => {
    try {
      const storedMaxScore = await AsyncStorage.getItem('maxScore')
      if (storedMaxScore != null) {
        set({ maxScore: parseInt(storedMaxScore) })
      }
    } catch (error) {
      console.error('Error loading maxScore from AsyncStorage:', error)
    }
  },
  updateScore: async (win: boolean) => {
    set((state) => {
      const newScore = win ? state.score + 1 : 0
      const newMaxScore = Math.max(state.maxScore, newScore)
      void AsyncStorage.setItem('maxScore', newMaxScore.toString())
      return { score: newScore, maxScore: newMaxScore }
    })
  },
  resetScore: () => {
    set({ score: 0 })
  }
}))

export default useScoreStore
