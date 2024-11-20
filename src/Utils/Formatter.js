export const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2
    }).format(amount);
    };