

function myFunc() {
    let form = document.getElementById("contain");

    form.innerHTML = `
    <div class="form">
                
    <div class="name">
    <label for="fullName">Name:</label>
    <input type="text">
</div>
<div class="email">
    <label for="email">Email:</label>
    <input type="email">
</div>
<div class="btn">
    <button class="submit">Submit</button>
</div>
        </div>

    `
}