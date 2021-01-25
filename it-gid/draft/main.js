d = [1, 0, 0, 0, 0];
let i = 0;


function shift() {
    // d.unshift(d.pop());
    if ( i+1 < d.length ) {
        d[i] = 0;
        d[i+1] = 1;
        i++;
    }

    document.querySelector(".out").innerHTML = d;
}

document.querySelector(".out").innerHTML = d;
document.querySelector(".btn").onclick = shift;
