import { h } from 'vue'

export const columns: ColumnDef<Payment>[] = [
    {
    accessorKey: 'id',
    header: () => h('div', { class: 'text-left' }, 'ID'),
    cell: ({ row } : any) => {
      const id = row.getValue("id")

      return h('div', { class: 'text-left font-bold'}, id)
    }
  },
  {
    accessorKey: 'email',
    header: () => h('div', { class: 'text-left' }, 'Email'),
    cell: ({ row } : any) => {
      const email = row.getValue("email")

      return h('div', { class: 'text-left font-bold'}, email)
    }
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row } : any) => {
      const status = row.getValue("status")

      return h('div', { class: 'text-left font-bold'}, status)
    }
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-left' }, 'Amount'),
    cell: ({ row } : any) => {
      const amount = row.getValue("amount")

      return h('div', { class: 'text-left font-bold'}, '$' + amount)
    }
  },

]