//document.getElementById("count_el").innerText = 4

let counter = 0;

let entry = [];

function get_count () {
    return counter;
}

function increment() {
    counter += 1;
    document.getElementById("count_el").innerText = counter;
}

function save() {
    entry.push(counter);
    set_entry();
    console.log(entry);
}

function clean() {
    entry = [];
    set_entry();
}

function decrement() {
    if(counter != 0) counter -= 1;
    document.getElementById("count_el").innerText = counter;
}

function set_entry() {
    document.getElementById("count-text").innerText = "Entries: " + entry.toString();
}