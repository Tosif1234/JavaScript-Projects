let oldPassword = prompt("Enter your Old Password..");
let newPassword = prompt("Enter the New Password..");

if(oldPassword === "" || newPassword === ""){
    console.log("Password Cannot be empty!");
}
else if(oldPassword === newPassword){
    console.log("New password must be different from the old password.");
}
else{
    let confirmPassword = prompt("Re-enter the New Password..");

    if (confirmPassword === "") {
        console.log("You must re-enter your password for confirmation!");
    }
    else if (newPassword === confirmPassword) {
    console.log("Password Changed Successfully!");
    }

    else{
    console.log("Password mismatch. Please try again.");
    }
}

