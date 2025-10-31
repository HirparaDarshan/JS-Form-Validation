 $("#registration-form").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password:{
            required: true,
            strongPassword: true
        },
        repassword:{
            required: true,
            equalTo: "#password"
        },
        fname:{
            required: true,
            noDigits: true
        },
        lname:{
            required: true,
            noDigits: true
        },
        optradio:{
            required: true
        },
        country:{
            required: true,
        },
        option1:{
            required: true
        }
    },
    messages: {
        email: {
            required: "Please enter your email address.",
            email: "Please enter a valid email address."
        },
        password: {
            required: "Please enter your Password",
            strongPassword: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
        },
        repassword: {
            required: "Passwords do not match!",
            equalTo: "Please enter same password as above"
        },
        fname:{
            required:"Name cannot be empty",
            noDigits: "Name cannot have a number"
        },
        lname:{
            required: "Name cannot be empty",
            noDigits: "Name cannot have a number"
        },
        optradio:{
            required: "Please select a Gender"
        },
        country:{
            required: "Plase select a country"
        },
        option1:{
            required: "You must agree to the terms and conditions."
        }
    },
    groups:{
        fullname: "fname lname"
    },
    errorPlacement: function(error, element) {
            if (element.attr("name")=="email"){
                error.appendTo("#email-message"); 
            } else if (element.attr("name")=="password"){
                error.appendTo("#password-message");
            } else if (element.attr("name")=="repassword"){
                error.appendTo("#repassword-message");
            } else if (element.attr("name")=="fname" || element.attr("name")=="lname"){
                error.appendTo("#name-msg");
            } else if (element.is(":radio")){
                error.appendTo("#malefemale-msg");
            } else if (element.attr("name")=="country"){
                error.appendTo("#country-msg");
            } else if (element.attr("name")=="option1"){
                error.appendTo("#terms-msg");
            }
        }
});


$.validator.addMethod("strongPassword", function(value, element) {
    return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/.test(value);
});


$.validator.addMethod("noDigits", function(value, element) {
    return this.optional(element) || !/\d/.test(value);
}); 




