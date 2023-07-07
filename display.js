function addData()
    {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        //to get weblink 
        var weblink = document.getElementById("weblink").value;
        // to get input image
        var imglink = document.getElementById("imglink").value;
        var img = document.createElement("img");
        img.setAttribute("src",imglink);
        img.style.width ="100px";
        if(name.trim()=="" || email.trim()==""|| weblink.trim()=="" || imglink.trim()==""){
           // alert("No blank values are allowed");
           document.getElementById("blank").innerHTML="No blank values are allowed";
            document.getElementById("blank").style.visibility="visible";
            document.getElementById("blank").style.color="red";
            return false;
        }else{
            document.getElementById("blank").style.visibility="hidden"; 
        }
        var emailVal =/^([a-z 0-9 A-z\.-]+)@([a-z0-9]+).([a-z]{2,8})$/;
        if(!emailVal.test(email)){
            document.getElementById("invalid").innerHTML="Invalid";
            document.getElementById("invalid").style.visibility="visible";
            document.getElementById("invalid").style.color="red";
            //alert("Invalid email");
            return false;
        }else{
            document.getElementById("invalid").style.visibility="hidden";
        }
        // to get input from radio button
        var gender = document.getElementsByClassName("gender");
        var c=0;
        for(var i = 0; i< gender.length; i++){
            if(gender[i].checked){
                c++;
                gender = gender[i].value;
            }
        }
        if(c==0){
            document.getElementById("gender").innerHTML="Gender is not selected";
            document.getElementById("gender").style.visibility="visible";
            document.getElementById("gender").style.color="red";
            //alert("Gender is not selected");
            return false;
        }else{
            document.getElementById("gender").style.visibility="hidden";
        }
       //to get input from checkbox
       var java = document.getElementById("java");
       var html = document.getElementById("html");
       var css = document.getElementById("css");
       var output;
       if(java.checked && html.checked && css.checked){
        document.getElementById("course").style.visibility="hidden";
        output = java.value + ","+ html.value + ","+css.value;
       }else if(java.checked && html.checked ){
        document.getElementById("course").style.visibility="hidden";
        output = java.value + ","+ html.value;
       }else if(html.checked && css.checked ){
        document.getElementById("course").style.visibility="hidden";
        output = html.value + ","+ css.value;
       }else if(css.checked && java.checked ){
        document.getElementById("course").style.visibility="hidden";
        output = java.value + ","+ css.value;
       }else if(java.checked){
        document.getElementById("course").style.visibility="hidden";
        output = java.value;
       }else if(html.checked){
        document.getElementById("course").style.visibility="hidden";
        output = html.value;
       }else if(css.checked){
        document.getElementById("course").style.visibility="hidden";
        output = css.value;
          }   else{
            document.getElementById("course").innerHTML="Please select atleast one course";
            document.getElementById("course").style.visibility="visible";
            document.getElementById("course").style.color="red";
        //alert("Please select atleast one course");
        return false;
       }
        var table = document.getElementById("mytable");
        var row = table.insertRow();
        var Cell1 = row.insertCell(0);
        var Cell2 = row.insertCell(1);
        Cell1.innerHTML = name +"<br>" +email +"<br>"+ "<a href='" + weblink + "'>" + weblink + "</a>"+"<br>" + gender+"<br>"+ output;
        Cell2.appendChild(img);
    }
function clearInput(){
    input = document.getElementsByClassName("clear");
    for(var i = 0;i< input.length;i++){
        input[i].value='';
    }
    var gender =document.getElementsByClassName("gender");
    for(var i =0;i< gender.length;i++){
        gender[i].checked = false;
    }
    var skills =document.getElementsByClassName("skills");
    for(var i =0;i< skills.length;i++){
        skills[i].checked = false;
    }
}    
