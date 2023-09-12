// console.log('DTI......');
// statment
console.log(111)
console.log(222);
console.log(333); console.log(444); console.log(555)
// variable ตัวแปร
var a = 100
let b = 200
console.log(a + b)
console.log('-------------')
// Scope / Block Scope --> มันคือ {?????} มันคือขอบเขตการทำงาน

{
    let e = 999
    {
        var c = 300
        let d = 400
        // console.log(a)
        // console.log(b)
        // console.log(c)
        console.log(e) //no error

    }
    // console.log(a)
    // console.log(b)
    // console.log(c)
    console.log(e); //no error

}
console.log(a)
console.log(b)
console.log(c)
// console.log(e); //error

// constant ค่าคงที่ (มาตรฐานเขาให้ตั้งเป็นตัวใหญ่หมด)
const DATA_A1 = 52
const INFO1 = "Wow"
const INFO2 = "Woo"
// INFO1 = "Wee" error
console.log(INFO1 + '@@@' + INFO2)
console.log('SAU\nDTI\t\t2023')
console.log('I love "SAU"')
console.log("I love 'SAU'")
console.log('สวัสดี %s %d', INFO1, DATA_A1)

{
    {
     const INFO3 = 'Wee'
     console.log( INFO3 )
    }
    //console.log( INFO3 ); error
}
//console.log( INFO3 ); error

//logowindows + alt +96
console.log(`Welcome...`)
let yourname = "สมชาย"
let year = 2000
let age = 15

// สวัสดี สมชาย คุณเกิดปี 2000 อายุ 15
console.log('สวัสดี ' + yourname + ' คุณเกิดปี ' + year + ' อายุ ' + age + ' ปี ' + (20*5))
console.log(`สวัสดี ${yourname} คุณเกิดปี ${year} อายุ ${age} ปี ${20*5}`)

// string method
                 //01234567890123456789012345678901
let data = '    Southeast Asia University   '

console.log(data)
console.log(data.length)
console.log(data.trim())
console.log(data.trim().length)
console.log(data.toUpperCase())
console.log(data.toLowerCase())
console.log(data.substring(10)) //จะตัดข้อความตั้งแต่ index 10
           //0123456789
let data2 = 'Welcome to'
console.log(data2.substring(5))
console.log(data2.substring(3, 9))
console.log(data2.repeat(5)) //ทำซ้ำ
console.log(data2.replace('To', 'To Thailand')) //แทนที่
console.log(data.replace('e', 'xxx'))
console.log(data.replaceAll('e', 'xxx'))