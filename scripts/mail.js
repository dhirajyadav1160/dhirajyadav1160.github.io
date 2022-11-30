      var myContactDetails = {};
      var mailLink = "mailto:__EMAIL__?&subject=__SUBJECT__&body=__BODY__";
      function setContactDetails(val, key) {
       
        if (key === "email") {
          myContactDetails = {...myContactDetails, [key]: val};
        }
        if (key === "subject") {
          myContactDetails = {...myContactDetails, [key]: val};
        }
        if (key === "message") {
          myContactDetails = {...myContactDetails, [key]: val};
        }
      }
      function redirectToMail() {
        let errorMsg = "";  
        
        if (!(myContactDetails?.message?.length)) {
          errorMsg = "Please Add Message";
        }
        if (!(myContactDetails?.subject?.length)) {
          errorMsg = "Please Add Subject";
        }
        if (!(myContactDetails?.email?.length) || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myContactDetails?.email))) {
          errorMsg = "Please Provide Valid Email Address";
        }
        if (errorMsg) {
          var div = document.getElementById("errorMsg");
          div.innerHTML = errorMsg;
          return
        }
        mailLink = mailLink.replace("__EMAIL__", myContactDetails.email);
        mailLink = mailLink.replace("__SUBJECT__", myContactDetails.subject);
        mailLink = mailLink.replace("__BODY__", myContactDetails.message);
        window.open(
          mailLink,
          "_blank" // <- This is what makes it open in a new window.
        );
      }