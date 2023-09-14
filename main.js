

// // promise 
// // let nt_open = false;

// // let myPromise = new Promise((res, rej) => {
// //     if (nt_open) {
// //         res('ok')
// //     } else {
// //         rej('not ok')
// //     }
// // })

// // myPromise.then(
// //     function (value) { extra(value) },
// //     function(value) { extra(value)}
// // )


// // function extra(qiymat) {
// //     console.log(qiymat);
// // }



// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
// };


// // let order = (pro) => { 
// //     console.log('order booked ');
// //     pro()
// // }

// // let production = () => {
// //     setTimeout(() => {
// //         console.log('p started');
// //         setTimeout(() => {
// //             console.log(`${stocks.Fruits[0]} mevasi kesildi`);
// //             setTimeout(() => {
// //                 console.log('water and ice addded');
// //                 setTimeout(() => {
// //                     console.log('idish ga solindi');
// //                     setTimeout(() => {
// //                         console.log('mijozga berildi');
// //                     }, 1000)
// //                 }, 2000)
// //             }, 1000)
// //             },1000)
// //     }, 1000)
   
// // }

// // order(production)
// let time = new Date().getHours();

// let is_shop_open = false;

// if (time >= 10) {
//     is_shop_open = true
// } else if(time >= 22) {
//     is_shop_open = false
// }
// let order = (time, work) => {
//     return new Promise((res, rej) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 res(work())
//             }, time)
//         } else {
//             rej('err')
//         }
//     })
// }

// order(2000, () => console.log('every thing is ok'))
//     .then(() => {
//     return order(1000, () => console.log('meva tanlandi'))
//     })
//     .then(() => {
//     return order(1000, process)
// })

// function process() {
//     console.log('dljvbhdbvh');
// }
// let url = 'https://jsonplaceholder.typicode.com/posts'



//  fetch(url)
//  .then((res) => res.json ())
//  .then((data)=> {
//     let posts = data 
//     posts.map((item)=>console.log(item))
//  })

const Select = document.getElementById('select')


let dogUrl = 'https://dog.ceo/api/breeds/list/all'

Select.addEventListener('change',(e) => {
   console.log(e.target.value)
})

 function fetchUrl(url){
   fetch(url)
   .then((res) =>res.json())
   .then((data) => {
      let dogsOfObject = data.message;
      let dogsOfArr = Object.keys(dogsOfObject)
      dogsOfArr.map((dog) => {
         const option = document.createElement('option')
         option.innerText = dog
         option.value = dog 
         Select.appendChild(option)
      })
   })
 }

 fetchUrl(dogUrl)
