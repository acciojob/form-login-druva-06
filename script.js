function getFormvalue() {
    //Write your code here
    const firstName = document.getElementsByName('fname')[0]
    const lastName = document.getElementsByName('lname')[0]
    let fullName = `${firstName.value} ${lastName.value}`
    alert(fullName)
}
