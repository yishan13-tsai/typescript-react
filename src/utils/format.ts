export const formatPrice = (price: number): string => {
  let priceStr = price.toString()
  priceStr = priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const prefix = 'NT$'
  let negative = ''
  if (priceStr?.[0] == '-') {
    negative = '-'
    priceStr = priceStr.replace('-', '')
  }
  return `${negative}${prefix} ${priceStr}`
}