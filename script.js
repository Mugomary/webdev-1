"use strict";

// Select the main page elements
const form = document.getElementById("regform");
const themeBtn = document.getElementById("theme");
const memberList = document.getElementById("memberList");
const count = document.getElementById("count");
const successMsg = document.getElementById("successMsg");

// Select all form fields
const fields = document.querySelectorAll(
"#regform input, #regform select, #regform textarea"
);

// Select all field error messages
const errors = document.querySelectorAll(".error");

// Check the selected elements
console.log("Registration form:", form);
console.log("Form fields:", fields);
console.log("Error elements:", errors);
console.log("Success message:", successMsg);
console.log("Member list:", memberList);
console.log("Member counter:", count);
console.log("Dark Mode button:", themeBtn);form.addEventListener("submit", function(event) {
event.preventDefault();
if (validateForm()) {return;}
console.log("Form submitted successfully!");
});
function validateForm() {
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const gender = document.getElementById("gender");
    const dob = document.getElementById("dob");
    const country = document.getElementById("country");
    const phone = document.getElementById("phone");
    const bio = document.getElementById("bio");

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    // Validate full name
    if (name.value.trim() === "") {
        document.getElementById("nameError").textContent =
            "Please enter your full name.";
        isValid = false;
    }

    // Validate email
    if (!email.validity.valid || email.value.trim() === "") {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    // Validate password
    if (password.value.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters.";
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword.value !== password.value ||
        confirmPassword.value === "") {
        document.getElementById("confirmError").textContent =
            "Passwords do not match.";
        isValid = false;
    }

    // Validate gender
    if (gender.value === "") {
        document.getElementById("genderError").textContent =
            "Please select your gender.";
        isValid = false;
    }

    // Validate date of birth
    if (dob.value === "") {
        document.getElementById("dobError").textContent =
            "Please select your date of birth.";
        isValid = false;
    } else if (dob.value > new Date().toISOString().split("T")[0]) {
        document.getElementById("dobError").textContent =
            "Date of birth cannot be in the future.";
        isValid = false;
    }

    // Validate country
    if (country.value.trim() === "") {
        document.getElementById("countryError").textContent =
            "Please enter your country.";
        isValid = false;
    }

    // Validate phone number
    if (!/^[+]?[\d\s()-]{7,20}$/.test(phone.value.trim())) {
        document.getElementById("phoneError").textContent =
            "Please enter a valid phone number.";
        isValid = false;
    }

    // Validate bio
    if (bio.value.trim() === "") {
        document.getElementById("bioError").textContent =
            "Please enter a short bio.";
        isValid = false;
    }

    return isValid;
}