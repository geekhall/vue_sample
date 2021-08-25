const fs = require('fs');

function readFile1(){
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/file1.md", (err, data) =>{
            // 如果失败
            if (err) reject(err);

            // 如果成功
            resolve(data);
        })
    })
}


function readFile2(){
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/file2.md", (err, data) =>{
            // 如果失败
            if (err) reject(err);

            // 如果成功
            resolve(data);
        })
    })
}

function readFile3(){
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/file3.md", (err, data) =>{
            // 如果失败
            if (err) reject(err);

            // 如果成功
            resolve(data);
        })
    })
}

// 声明一个async函数
async function main(){
    let file1 = await readFile1();
    let file2 = await readFile2();
    let file3 = await readFile3();

    console.log(file1.toString());
    console.log(file2.toString());
    console.log(file3.toString());
}

main();
