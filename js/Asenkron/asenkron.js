// console.log("bedirhan")

// setTimeout(() => {
//     console.log("1000 s geçti ve çalıştı")
// }, 1000);

// setTimeout(() => {
//     console.log("200 ms geçti ve çalıştı")
// }, 200);

// console.log("şahin")

// -------------------------------------------------

// ASENKRON PROBLEMİ 

const users = [
    {
        userId: 5,
        post: "Bedirhan post 1"
    },
    {
        userId: 5,
        post: "Bedirhan post 2"
    },
    {
        userId: 5,
        post: "Bedirhan post 3"
    },
    {
        userId: 5,
        post: "Bedirhan post 4"
    },
    {
        userId: 6,
        post: "Uğur post 1"
    },
    {
        userId: 7,
        post: "Eren post 1"
    }
]

// function getUserId() {
//     setTimeout(() => {
//         return 5;
//     }, 1000);
// }

// function getPostByUserId(userId) {
//     setTimeout(() => {
//         users.forEach((user) => {
//             if (user.userId === userId) {
//                 console.log(user.post);
//             }
//         })
//     }, 500);
// }


// let userId = getUserId();
// getPostByUserId(userId)


function getUserId(callback) {
    setTimeout(() => {
        const userId = 5;
        callback(userId)
    }, 1000);
}

function getPostByUserId(userId) {
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        });
    }, 500);
}

getUserId(getPostByUserId);
