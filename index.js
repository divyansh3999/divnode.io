const fs = require('fs');
if (fs) {
    // create file
    // fs.writeFileSync('read.txt', 'Read file again');

    // append data
    // fs.appendFileSync('read.txt', ' append file');

    const buf_data = fs.readFileSync('read.txt');
    console.log(buf_data);
}else{
    console.log("not find");
}