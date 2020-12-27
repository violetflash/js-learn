function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
}

checkAge(19);

function checkAge2(age) {
    return (age > 18) || confirm("Родители разрешили?");
}

