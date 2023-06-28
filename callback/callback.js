// VAN DE
// const xinSoDt = () => {
//     let soDt 

//     console.log('Goi dien cho thang ban: cho tao xin so thang nam')
//     console.log('Thang ban dang tim so thang nam')

//     setTimeout(() => {
//         soDt = 123456;
//         console.log('Day roi. Da tim xong so thang nam.')
//     }, 1000);
    
//     return soDt
// }

// const soDtDaXin = xinSoDt()

// console.log(soDtDaXin)

// SOLUTION
const xinSoDt = () => {
    let soDt 

    console.log('Goi dien cho thang ban: cho tao xin so thang nam')
    console.log('Thang ban dang tim so thang nam')

    setTimeout(() => {
        soDt = 123456;
        console.log('Day roi. Da tim xong so thang nam.')
    }, 1000);
    
    // sua xau
    setTimeout(() => {
        console.log(soDt)
    }, 1500)
}

xinSoDt()