
let count = 0;
let star = "**";
while ( count < 5 ) {
    if (count === 0) {
        console.log("*")
        count++;
    } else {
        console.log(star.repeat(count));
        count++;
    }
}
