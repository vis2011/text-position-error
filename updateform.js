class updateForm {
    constructor() {
        //title
        this.text = createElement("h2");
        //school name
        this.text1 = createElement("h2");
        //registeration number
        this.text2 = createElement("h2");
        //location
        this.text3 = createElement("h2");
        //mail id
        this.text4 = createElement("h2");
        //phone number
        this.text5 = createElement("h2");
        //number of students
        this.text16 = createElement("h2");
        //total vaccination needed
        this.input = createInput("").value("value", tvnD);
    }

    setelementPositions() {
        //position
        this.text.position(width / 2 - 150, height / 2 - -430);
        this.text1.position(width / 2 - 660, height / 2 - -480);
        this.text2.position(width / 2 - 660, height / 2 - -630);
        this.text3.position(width / 2 - 660, height / 2 - -780);
        this.text4.position(width / 1.3 - 160, height / 2 - -630);
        this.text5.position(width / 1.3 - 160, height / 2 - -480);
        this.text6.position(width / 1.3 - 160, height / 2 - -780);
        this.input.position(width / 2.1 - 200, height / 2 - -630);
    }

    setElementsStyle() {
        
        //class
        this.text.class("greeting1");
        this.text1.class("greeting1");
        this.text2.class("greeting2");
        this.text3.class("greeting2");
        this.text4.class("greeting2");
        this.text5.class("greeting2");
        this.text6.class("greeting2");
        this.input.class("customInput1");
    }

    handleMousePressed() {
      
        //text in element
        var ti =`Update Form`;
        this.text.html(ti);

        this.text1.html(schoolND);
        this.text2.html(registerND);
        this.text3.html(locationD);
        this.text4.html(mailId);
        this.text5.html(phoneND);
        this.text6.html(NOSD);
    }

    Displays() {
        this.setelementPositions();
        this.setElementsStyle();
        this.handleMousePressed();
    }
}
