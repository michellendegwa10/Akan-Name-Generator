document.getElementById("akan-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve user input
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;

    // Validate input
    if (!birthdate || !gender) {
        alert("Please fill in all fields.");
        return;
    }

    // Parse the birthdate
    const date = new Date(birthdate);
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Akan names based on the day of the week
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Determine the Akan name
    let akanName = "";
    if (gender === "male") {
        akanName = maleNames[dayOfWeek];
    } else if (gender === "female") {
        akanName = femaleNames[dayOfWeek];
    }

    // Display the result
    document.getElementById("akan-name").textContent = akanName;
});