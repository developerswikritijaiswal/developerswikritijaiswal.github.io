function validate()
//First Name
{
    var a = /^[A-Za-z.\s]{0,15}$/;
    if (document.Refer1.First.value == "") {
        alert("Please Enter Firstname");
        document.Refer1.First.focus();
        return false;
    }

    if (!a.test(document.Refer1.First.value)) {
        alert("Enter Valid Name");
        document.Refer1.First.focus();
        return false;
    }

    //Middle name
    {
        var a = /^[A-Za-z.\s]{0,15}$/;
        if (!a.test(document.Refer1.Middle.value)) {
            alert("Enter Valid Middle Name");
            document.Refer1.Middle.focus();
            return false;
        }
    }

    //Last Name
    var a = /^[A-Za-z.\s]{0,15}$/;
    if (document.Refer1.Last.value == "") {
        alert("Please Enter Last Name");
        document.Refer1.Last.focus();
        return false;
    }

    if (!a.test(document.Refer1.Last.value)) {
        alert("Enter Valid Last  Name");
        document.Refer1.Last.focus();
        return false;
    }



    //Email
    var a = /^[A-Za-z0-9_\-\.]+\@[A-Za-z0-9_\-\.]+\.[A-Za-z]{2,4}$/;
    if (document.Refer1.email.value == "") {
        alert("Please Enter email id ");
        document.Refer1.email.focus();
        return false;
    }

    if (!a.test(document.Refer1.email.value)) {
        alert("Please Enter correct email id");
        document.Refer1.email.focus();
        return false;
    }


    //Contact
    var a = /^[0-9.\s]{0,30}$/;
    if (document.Refer1.mob.value == "") {
        alert("Please Enter Mobile Number");
        document.Refer1.mob.focus();
        return false;
    }

    if (document.Refer1.mob.value.length != 10) {
        alert("Please Enter equal to ten digit number");
        document.Refer1.mob.focus();
        return false;
    }
    //Message
    {
        var a = /^[A-Za-z.\s]{0,100}$/;
        if (document.Refer1.Msg.value == "") {
            alert("Please Enter Message");
            document.Refer1.Msg.focus();
            return false;
        }

    }

    //Referred By
    //First Name
    {
        var a = /^[A-Za-z.\s]{0,15}$/;
        if (document.Refer1.First2.value == "") {
            alert("Please Enter Firstname");
            document.Refer1.First2.focus();
            return false;
        }

        if (!a.test(document.Refer1.First2.value)) {
            alert("Enter Valid Name");
            document.Refer1.First2.focus();
            return false;
        }
    }
    //Middle name
    {
        var a = /^[A-Za-z.\s]{0,15}$/;
        if (!a.test(document.Refer1.Mid2.value)) {
            alert("Enter Valid Middle Name");
            document.Refer1.Mid2.focus();
            return false;
        }
    }

    //Last Name
    var a = /^[A-Za-z.\s]{0,15}$/;
    if (document.Refer1.Last2.value == "") {
        alert("Please Enter Last Name");
        document.Refer1.Last2.focus();
        return false;
    }

    if (!a.test(document.Refer1.Last2.value)) {
        alert("Enter Valid Last  Name");
        document.Refer1.Last2.focus();
        return false;
    }



    //Email
    var a = /^[A-Za-z0-9_\-\.]+\@[A-Za-z0-9_\-\.]+\.[A-Za-z]{2,4}$/;
    if (document.Refer1.email2.value == "") {
        alert("Please Enter email id ");
        document.Refer1.email2.focus();
        return false;
    }

    if (!a.test(document.Refer1.email2.value)) {
        alert("Please Enter correct email id");
        document.Refer1.email2.focus();
        return false;
    }


    //Contact

    var a = /^[0-9.\s]{1,10}$/;
    if (document.Refer1.cont2.value == "") {
        alert("Please Enter Mobile Number");
        document.Refer1.cont2.focus();
        return false;
    }
    if (document.Refer1.cont2.value.length != 10) {
        alert("Please Enter equal to ten digit number");
        document.Refer1.cont2.focus();
        return false;
    }






/*

    var a = /^[A-Za-z.\s]{0,30}$/;
    if (document.Refer1.state.value == "") {
        alert("Please Enter statename Number");
        document.Refer1.state.focus();
        return false;
    }

    if (!a.test(document.Refer1.state.value)) {
        alert("Please Enter only character  value");
        document.Refer1.state.focus();
        return false;
    }
    var a = /^[A-Za-z.\s]{0,30}$/;
    if (document.Refer1.city.value == "") {
        alert("Please Enter cityname Number");
        document.Refer1.city.focus();
        return false;
    }

    if (!a.test(document.Refer1.city.value)) {
        alert("Please Enter only character  value");
        document.Refer1.city.focus();
        return false;
    }
    var a = /^[A-Za-z.\s]{0,30}$/;
    if (document.Refer1.country.value == "") {
        alert("Please Enter countryname Number");
        document.Refer1.country.focus();
        return false;
    }

    if (!a.test(document.Refer1.country.value)) {
        alert("Please Enter only character  value");
        document.Refer1.country.focus();
        return false;
    }
*/
}




