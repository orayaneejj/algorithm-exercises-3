function sortByRating(shops) {
  // Start coding here
  const n = shops.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (shops[j].rating < shops[j + 1].rating) {
        let temp = shops[j];
        shops[j] = shops[j + 1];
        shops[j + 1] = temp;
      }
    }
  }
  return shops;
}

/* 
  1. ควรใช้ Algorithm ใดในการแก้โจทย์นี้ 
  Bubble Sort 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Algorithm นี้
  เนื่องจากเป็นอัลกอริทึมที่ตรวจสอบค่าในข้อมูลทั้งหมดโดยมีการตรวจสอบทีละคู่ เพื่อเปรียบเทียบหาค่าที่มากกว่า และสลับที่เพื่อจัดเรียงข้อมูลตามที่เราต้องการได้
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  Big O = O(n^2) เนื่องจาก มีการใช้ nested loop 2 loop ทำให้รอบการทำงานเพิ่มขึ้นตามกำลังสองของขนาดข้อมูล
*/

const shops = [
  {
    shopTitle: "ร้านอาหารส้มตำแซ่บ",
    rating: 4.5,
  },
  {
    shopTitle: "ร้านขนมไทยแม่จันทร์",
    rating: 4.8,
  },
  {
    shopTitle: "ร้านกาแฟหอมกรุ่น",
    rating: 4.2,
  },
  {
    shopTitle: "ร้านเบเกอรี่บ้านอบอุ่น",
    rating: 4.9,
  },
  {
    shopTitle: "ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง",
    rating: 4.6,
  },
];

console.log(sortByRating(shops));
/*
[
  { shopTitle: 'ร้านเบเกอรี่บ้านอบอุ่น', rating: 4.9 },
  { shopTitle: 'ร้านขนมไทยแม่จันทร์', rating: 4.8 },
  { shopTitle: 'ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง', rating: 4.6 },
  { shopTitle: 'ร้านอาหารส้มตำแซ่บ', rating: 4.5 },
  { shopTitle: 'ร้านกาแฟหอมกรุ่น', rating: 4.2 }
]
*/
