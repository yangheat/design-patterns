function createLibrary() {
  const books = new Map()
  return {
    getBook: (title, author, borrower, dueDate) => {
      const key = `${title}-${author}`

      if (!books.has(key)) {
        books.set(key, createBook(title, author))
      }

      return books.get(key).borrow(borrower, dueDate)
    }
  }
}

function createBook(title, author) {
  const book = { title, author }
  const borrow = (borrower, dueDate) => ({
    book,
    borrower,
    dueDate
  })

  return { ...book, borrow }
}

const library = createLibrary()

const loan1 = library.getBook(
  'React 핵심 가이드',
  '김리액트',
  '철수',
  '2023-06-01'
)
const loan2 = library.getBook(
  'React 핵심 가이드',
  '김리액트',
  '영희',
  '2023-06-10'
)

console.log(loan1.book === loan2.book) // true
console.log(loan1.borrower) // 철수
console.log(loan2.borrower) // 영희
console.log(loan1.borrower) // 철수
