 function sendMail() {
      var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
      const serviceID = "service_ilxce5d";
      const templateID = "template_l3k55gw";
      emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("your message was sent successfully");
        })
        .catch((err) => console.log(err));
    }
