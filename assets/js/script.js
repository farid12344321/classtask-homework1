

$(document).ready(function () {

    let addBtn = $("button");

    let person = [];


   if(localStorage.getItem("fulName") !=null){
       person = JSON.parse(localStorage.getItem("fulName"));
   }


    addBtn.click(function(e){
        e.preventDefault();
        $("ul").empty();


        let strName = $(".input1").val();

        let strSurname = $(".input2").val();

        person.push({
            name: strName,
            surname: strSurname,
        })

        localStorage.setItem("fulName", JSON.stringify(person));

        
      
        for (const item of person) {
            $("ul").append(` <li class="list-group-item">${item.name + item.surname}</li>`)
        }
    })
      


    

    for (const item of person) {
        $("ul").append(` <li class="list-group-item">${item.name + item.surname}</li>`)
    }

});