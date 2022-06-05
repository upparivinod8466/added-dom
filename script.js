let employees = [
    {
      id: 1,
      first_name: "Suresh",
      lastName: "Kumar",
      email: "suresh@gmail.com",
      gender: "male",
      ip_address: "160.192.178.23",
    },
  
    {
      id: 2,
      first_name: "Sourav",
      lastName: "Das",
      email: "sourav@gmail.com",
      gender: "male",
      ip_address: "160.192.168.23",
    },
  
    {
      id: 3,
      first_name: "Jhansi",
      lastName: "Das",
      email: "jhansi@gmail.com",
      gender: "female",
      ip_address: "160.192.128.23",
    },
  
    {
      id: 4,
      first_name: "John",
      lastName: "Paul",
      email: "john@gmail.com",
      gender: "male",
      ip_address: "160.192.198.23",
    },
    {
      id: 5,
      first_name: "Lavish",
      lastName: "paul",
      email: "lavish@gmail.com",
      gender: "male",
      ip_address: "160.192.148.23",
    },
  
    {
      id: 6,
      first_name: "Sourav",
      lastName: "Paul",
      email: "sourav@gmail.com",
      gender: "male",
      ip_address: "160.192.128.23",
    },
    {
      id: 7,
      first_name: "Sangeetha",
      lastName: "Paul",
      email: "sangeetha@gmail.com",
      gender: "female",
      ip_address: "160.193.178.23",
    },
  
    {
      id: 8,
      first_name: "Pavan",
      lastName: "Sai",
      email: "pavan@gmail.com",
      gender: "male",
      ip_address: "160.172.178.23",
    },
    {
      id: 9,
      first_name: "Pavni",
      lastName: "Das",
      email: "pavni@gmail.com",
      gender: "female",
      ip_address: "160.162.178.23",
    },
    {
      id: 10,
      first_name: "Jenny",
      lastName: "Paul",
      email: "jenny@gmail.com",
      gender: "female",
      ip_address: "160.182.178.23",
    },
  ];

  //all empolyee data
  let allempbtn=document.querySelector("#all-emp-btn");
  allempbtn.addEventListener("click",function(){
      displayemployees(employees);
    })

    let maleempbtn=document.querySelector("#male-emp-btn");
  maleempbtn.addEventListener("click",function(){
      let maleemployee=employees.filter(function(employee){
          return employee.gender==="male"
      })
      console.log(maleemployee);
      displayemployees(maleemployee)
    })

    let femaleempbtn=document.querySelector("#female-emp-btn");
    femaleempbtn.addEventListener("click",function(){
        let femaleemployee=employees.filter(function(employee){
            return employee.gender==="female"
        })
        console.log(femaleemployee);
        displayemployees(femaleemployee)
      });

      //search functionality logic body
      let searchbox=document.querySelector("#search-box");
      searchbox.addEventListener("keydown",function(){
          let textentered=searchbox.value;
          console.log(textentered);
          let filteredemps=[];
          if(textentered=""){
              // to populate the data on search box
              filteredemps=employees.filter(function(employee){
                  return employee.first_name.toLowerCase().includes(textentered.toLowerCase())||employee.lastName.toLowerCase().includes(textentered.toLowerCase());
              })
              displayemployees(filteredemps);
          }
          
      })  

       


// display data to get the data if user click on the button
  let displayemployees=(employees)=>{
      // select the table body using table-body
      let tablebody=document.querySelector("#table-body");
      //create a table body
       let tablerow="";
       for(let empolyee of employees){
           tablerow+=`<tr>
           <td>${empolyee.id}</td>
           <td>${empolyee.first_name}</td>
           <td>${empolyee.lastName}</td>
           <td>${empolyee.email}</td>
           <td>${empolyee.gender}</td>
           <td>${empolyee.ip_address}</td>
        </tr>`
          tablebody.innerHTML=tablerow


       }
  }