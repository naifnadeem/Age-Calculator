function calculateAge() {
    var dob = document.getElementById('dob').value;
    var dobDate = new Date(dob);

    if (isNaN(dobDate)) {
        document.getElementById('result').innerHTML = 'Please enter a valid date.';
        return; 
    }

    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    var ageDisplay = '<span style="font-size: 20px; font-weight: bold; color: #007bff;">' + age + '</span>';
    document.getElementById('result').innerHTML = 'Your age is: ' + ageDisplay;
}
