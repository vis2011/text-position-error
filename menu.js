console.log("authentication sucessful")
this.eyeClose.hide();
this.eyeOpen.hide();
this.usernameInput.hide();
this.PasswordInput.hide();
this.NextButton.hide();
this.uptitle.hide();
this.u.hide();
this.p.hide();
var message1 = `schoolname :`;
this.texts1.html(message1)
this.texts2.html(users[i].name);
var message2 = `Registration number :`;
this.texts3.html(message2);
this.texts4.html(users[i].registrationNo)
var message3 = `vaccination needed :`
this.texts5.html(message3)
this.texts6.html(users[i].TotalVaccinationtvaccinationNeeded)