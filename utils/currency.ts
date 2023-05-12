function currency(x: number) {
  return "$" + x.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  })
}

export default currency