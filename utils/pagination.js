const paginate = (currentPage, lastPage) => {
  const pages = []
  const onSides = 2

  for (let i = 1; i <= lastPage; i++) {
    const offset = i === 1 || lastPage ? onSides + 1 : onSides

    if (
      i === 1 ||
      (currentPage - offset <= i && currentPage + offset >= i) ||
      i === currentPage ||
      i === lastPage
    ) {
      pages.push(i)
    } else if (
      i === currentPage - (offset + 1) ||
      i === currentPage + (offset + 1)
    ) {
      pages.push('...')
    }
  }
  return pages
}

export default paginate
