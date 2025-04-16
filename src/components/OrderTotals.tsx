import { Dispatch, useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {

    const subTotalAmount = useCallback(() => {
        const total = order.reduce((total, item) => total + (item.quantity * item.price), 0)
        console.log(`Subtotal a pagar: ${formatCurrency(total)}`)
        return total
    }, [order])
    const tipAmount = useCallback(() => {
        const total = subTotalAmount() * tip
        console.log(`Propina: ${formatCurrency(total)}`)
        return total
    }, [tip, order])
    const totalAmount = useCallback(() => {
        const total = subTotalAmount() + tipAmount()
        console.log(`Total a pagar: ${formatCurrency(total)}`)
        return total
    }, [tip, order])

    return (
        <>
            <div className="">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subTotalAmount())}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount())}</span>
                </p>
                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount())}</span>
                </p>
            </div>

            <button className="w-full bg-black text-white p-3 uppercase font-bold mt-10 disabled:opacity-10 cursor-pointer"
                disabled={totalAmount() === 0} onClick={() => dispatch({ type: 'saveOrder' })}>
                Guardar Orden
            </button>
        </>
    )
}
