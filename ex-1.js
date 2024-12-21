function findStudentIndex(students, searchStudent) {
  // Start coding here
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      return i;
    }
  }
  return -1;
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
     Linear Search 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  เนื่องจาก students เป็น Array ที่บรรจุรายชื่อนักเรียน ที่ยังไม่ได้เรียงลำดับข้อมูลตามตัวอักษร จึงใช้อัลกอริทึมที่ค้นหาข้อมูลทีละตัว 
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  Big O ของ function นี้คือ O(n) เนื่องจากมีการใช้ for loop ตรวจสอบค่าทุกค่าใน array ทำให้เป็นการเพิ่มรอบการทำงานตามขนาดของข้อมูล
*/

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1
