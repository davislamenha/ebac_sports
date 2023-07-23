import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../App'

type favoritosState = {
  itens: Produto[]
}

const initialState: favoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      state.itens.push(produto)
    },
    remover: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.itens.findIndex((p) => p.id === id)
      state.itens.splice(index, 1)
    }
  }
})

export const { adicionar, remover } = favoritosSlice.actions
export default favoritosSlice.reducer
