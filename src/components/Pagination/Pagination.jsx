import "../styles/Pagination.css"

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  pagesToShow = 10,
}) => {
  const handlePageChange = page => {
    onPageChange(page)
  }

  // Calcula los índices de inicio y fin para mostrar solo un subconjunto de páginas
  const halfPagesToShow = Math.floor(pagesToShow / 2)
  let startPage = Math.max(currentPage - halfPagesToShow, 1)
  let endPage = Math.min(startPage + pagesToShow - 1, totalPages)

  // Ajusta los índices si la página actual está cerca del inicio o el final de la lista de páginas
  if (endPage - startPage + 1 < pagesToShow) {
    startPage = Math.max(endPage - pagesToShow + 1, 1)
  }

  // Generar un arreglo con los números de página para mostrar
  const pageNumbers = []
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      <button
        className="pagination__previous"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="pagination__number">
        {pageNumbers.map(page => (
          <button
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="pagination__Next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
