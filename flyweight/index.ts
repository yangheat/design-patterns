// 도서관 (Flyweight Factory)
class Library {
  books = {}

  getBook(title: string, author: string, borrower: string, dueDate: string) {
    const key = `${title}-${author}`
    if (!this.books[key]) {
      this.books[key] = new Book(title, author) // 없을 때, 새 책 생성
    }
    return this.books[key].borrow(borrower, dueDate)  // 대출 기록 추가
  }
}

// 책 (Flyweight)
class Book {
  title: string
  author: string

  constructor(title, author) {
    this.title = title    // 내재적 상태 (공유 O)
    this.author = author  // 내재적 상태 (공유 O)
  }

  borrow(borrower: string, dueDate: string) {
    return {
      book: this, // 공유된 챇 정보
      borrower,   // 외재적 상태 (공유 X)
      dueDate
    }
  }
}

// 사용 예시
const library = new Library()

// 같은 책을 여러 사람이 빌려도, 실제 책 객체는 1개만 생성
const loan1 = library.getBook('React 핵심 가이드', '김리액트', '철수', '2023-06-01')
const loan2 = library.getBook('React 핵심 가이드', '김리액트', '영희', '2023-06-10')

console.log(loan1.book === loan2.book)  // true
console.log(loan1.borrower) // 철수
console.log(loan1.dueDate)  //2023-06-01