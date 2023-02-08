// Extensão .d.ts = arquivo de Definição de Tipagem.
// Só é possível adicionar TypeScript aqui, sem o JavaScript (só tipagem)

// eslint-disable-next-line
import { knex } from 'knex'

declare module 'knex/types/table' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
