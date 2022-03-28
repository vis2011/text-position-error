class userpasswordil {
    constructor() {
        this.usernameInput = createInput("").attribute("placeholder", "Enter your Username");
        this.PasswordInput = createInput("").attribute("placeholder", "Enter your Password");
        this.NextButton = createButton("Next");
        this.uptitle = createElement("h2");
        this.u = createElement("h2");
        this.p = createElement("h2");
        this.eyeOpen = createImg("eye open.png");
        this.eyeClose = createImg("eye close.png");
        this.texts1 = createElement("h2");
        this.texts2 = createElement("h2");
        this.texts3 = createElement("h2");
        this.texts4 = createElement("h2");
        this.texts5 = createElement("h2");
        this.texts6 = createElement("h2");
    }

    setElementPosition() {
        this.NextButton.position(width / 2 - 70, height / 1 - -630);
        this.PasswordInput.position(width / 2 - 160, height / 2.14 - -780);
        this.usernameInput.position(width / 2 - 160, height / 2.14 - -670);
        this.uptitle.position(width / 2 - 230, height / 2 - -440);
        this.u.position(width / 2 - 160, height / 2 - -600);
        this.p.position(width / 2 - 160, height / 2 - -710);
        this.eyeClose.position(width / 2 - -130, height / 2.14 - -795);
        this.eyeOpen.position(width / 2 - -130, height / 2.14 - -795);
        this.texts1.position(width / 2 - 660, height / 2.14 - -670);
        this.texts2.position(width / 2 - 160, height / 2.14 - -670);
        this.texts3.position(width / 2 - 660, height / 2.14 - -780);
        this.texts4.position(width / 2 - 160, height / 2.14 - -780);
        this.texts5.position(width / 2 - 660, height / 1 - -630);
        this.texts6.position(width / 2 - 160, height / 1 - -630);
    }

    setElementsStyle() {
        this.NextButton.class("customButton");
        this.usernameInput.class("customInput1");
        this.PasswordInput.class("customInput2");
        this.uptitle.class("greeting4");
        this.u.class("greeting");
        this.p.class("greeting");
        this.eyeOpen.class("size");
        this.eyeClose.class("size");
        this.texts1.class("greeting4");
        this.texts2.class("greeting4");
        this.texts3.class("greeting4");
        this.texts4.class("greeting4");
        this.texts5.class("greeting4");
        this.texts6.class("greeting4");
    }

    handleMousePressed() {
        this.eyeClose.hide();
        var titleup = `Enter Your <br>
    USERNAME and PASSWORD`;
        this.uptitle.html(titleup)
        var usernameText = `Enter your username`;
        this.u.html(usernameText);
        var passwordText = `Enter your password`;
        this.p.html(passwordText);

        this.eyeOpen.mousePressed(() => {
            this.eyeOpen.hide();
            this.eyeClose.show();
            this.PasswordInput.class("customInput1");
            this.eyeClose.mousePressed(() => {
                this.eyeClose.hide();
                this.eyeOpen.show();
                this.PasswordInput.class("customInput2");
            })
        })

        this.NextButton.mousePressed(() => {
            this.validationUP();
        })
    }

    validationUP() {
        this.UName = this.usernameInput.value();
        this.PName = this.PasswordInput.value();
        if (this.PName == "" || this.UName == "") {
            Swal.fire({
                title: 'fill all the details',
                icon: 'error'
            });
        }
        else {
            var userInfoRef = database.ref('schools');
            userInfoRef.on("value", (data) => {
                allUsers = data.val();

                users = Object.values(allUsers);

                for (var i = 0; i < users.length; i++) {
                    if (this.UName == users[i].Username && this.PName == users[i].Password) {
                        this.eyeClose.hide();
                        this.eyeOpen.hide();
                        this.usernameInput.hide();
                        this.PasswordInput.hide();
                        this.NextButton.hide();
                        this.uptitle.hide();
                        this.u.hide();
                        this.p.hide();
                        Swal.fire({
                            title: 'Success',
                            icon: 'success',
                            text: 'on the next page check if the details are correct or else again give the username or password'
                        })
                        schoolND = users[i].name
                        registerND = users[i].registrationNo
                        locationD = users[i].locationOfSchool;
                        mailId = users[i].mailOfSchool;
                       phoneND = users[i].phoneNumberOfSchool;
                        NOSD = users[i].numberOfStudents;
                        tvnD = users[i].TotalVaccinationtvaccinationNeeded;
                        var allData = [schoolND , registerND , locationD , mailId , phoneND , NOSD , tvnD]
                        console.log(allData);
                        uptForm = new updateForm();
                        uptForm.Displays();
                    }

                    if (this.UName !== users[i].Username || this.PName !== users[i].Password) {
                        Swal.fire({
                            title: 'Error',
                            icon: 'error',
                            text: 'Username or password is not valid !!',
                        })
                    }
                }
            })
        }
    }

    display() {
        this.handleMousePressed();
        this.setElementPosition();
        this.setElementsStyle();
    }
}