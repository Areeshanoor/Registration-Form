document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var output = "";
    for (var entry of formData.entries()) {
        output += entry[0] + ": " + entry[1] + "<br>";
    }
    document.getElementById('formDataDisplay').innerHTML = output;
});