function submit()
{

    let name=String(document.getElementById("name").value)
    alert("youe name is :"+name)

    let sname=name.split(" ")
    alert("First name :"+sname[0])
    alert("Middle name :"+sname[1])
    alert("Last name :"+sname[2])



    let num=Number(document.getElementById("mno").value)
    
    if(/^[6-9][0-9]{9}$/.test(num))
    {
        document.getElementById("p2").innerHTML = "Entered Phone number is valid";
    }
    else
    {
        document.getElementById("p2").innerHTML = "Number Invalid !!!!!";
    }




    let anum=Number(document.getElementById("ano").value)
    let an=anum.toString().length

    if(an==12)
    {
        document.getElementById("p3").innerHTML = "adhar number is Valid";
        
    }
    else
    {
        document.getElementById("p3").innerHTML = "adhar number Invalid !!!";
    }



    let pann=String(document.getElementById("pno").value)
    if(/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pann))
    {
        document.getElementById("p4").innerHTML = "PAN number is Valid";
        
    }
    else
    {
        document.getElementById("p4").innerHTML = "PAN number is Invalid !!!!!";
          
    }

    

    let dob = new Date(document.getElementById("dob").value);
    let d = new Date();
    d.setHours(0, 0, 0, 0);
    
    if (dob <= d) {
        document.getElementById("p5").innerHTML = "DOB is valid";
    } else {
        document.getElementById("p5").innerHTML = "DOB is InValid";
    }
    
    



   let sub1=Number(document.getElementById("marks1").value)
   let sub2=Number(document.getElementById("marks2").value)
   let sub3=Number(document.getElementById("marks3").value)
   let sub4=Number(document.getElementById("marks4").value)
   let sub5=Number(document.getElementById("marks5").value)
   let sub6=Number(document.getElementById("marks6").value)
   let total=0
   

   let marks = [sub1, sub2, sub3, sub4, sub5, sub6];
   marks.sort((a, b) => b - a);   
   total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
   let avg=total/5
   document.getElementById("p1").innerHTML = "avg of marks is :"+avg;



   
    

}