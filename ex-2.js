function findBookIndex(books, searchBook) {
  // Start coding here
  const n = books.length;
  let right = n - 1;
  let left = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (books[mid].title === searchBook) {
      return mid;
    } else if (books[mid].title < searchBook) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

/*
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  Binary Search 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  เนื่องจากข้อมูลที่ได้รับเป็นข้อมูลที่มีการจัดเรียงลำดับตามตัวอักษรมาแล้วจึงใช้ binary search เพื่อลดเวลาในการค้นหา จากการค้นหาทีละตัวเป็นการค้นหาทีละส่วนจนกว่าจะเจอส่วนที่ต้องการ
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  Big O = O(log n) เนื่องจากใช้ Binary Search ซึ่งมีการใช้ while loop ที่ค่าของ left , right จะเปลี่ยนไปตามข้อมูลที่เจอ ทำให้ไม่ต้องวนลูปข้อมูลทั้งหมด
*/

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

console.log(findBookIndex(books, "Catch-22")); // 2
console.log(findBookIndex(books, "The Master Mind")); // -1
