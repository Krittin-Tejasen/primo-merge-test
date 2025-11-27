# Installation and setup
1. install all dependencies 
  "npm install"
2. run unit test 
  "npm test"

  expected output: 
   ✓ test/merge.test.ts (3 tests) 3ms
   ✓ Merge function (3)
     ✓ Sort all 3 column correctly 1ms
     ✓ Able to merged negative number correctly 0ms
     ✓ Able to merge empty collection correctly 0ms

หลักการทำงาน
1. กลับ collection_3 จาก descending ให้เป็น ascending
2. merge collection_1 และ collection_2
3. merge ผลจากข้อ 2 กับ collection_3 ที่กลับแล้ว
4. ใช้่ vitest ในการ test 