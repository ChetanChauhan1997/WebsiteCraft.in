
  function sendMail() {
    var params = {
        username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value,
    };

    const serviceID = "service_b1gq6b1";
    const templateID = "template_ay783ik";

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById('contact').reset(); // Reset the form fields
        Swal.fire("Message Sent Successfully");
      })
      .catch(err => {
        console.error(err);
        Swal.fire("Message Failed to Send");
      });
  }

