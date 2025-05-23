import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button className="border-2 border-red-400 hover:bg-red-200 p-3 text-lg rounded-lg flex justify-between w-full  cursor-pointer"
      onClick={() => dispatch({ type: 'add-item', payload: { item } })}>
        <p>{item.name}</p>
        <p className="font-black">Bs. {item.price}</p>
    </button>
  )
}
