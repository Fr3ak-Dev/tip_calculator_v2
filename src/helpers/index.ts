export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('es-BO', {
        style: 'currency', currency: 'BOB',
    }).format(quantity)
}