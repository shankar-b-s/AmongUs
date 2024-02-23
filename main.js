// const arr = [25,25,25,25,25,25];
    // for(i = 0;i<6;i++){
    //   document.getElementById("seatsLeft"+String(i+1)).innerHTML = arr[i] + " seats Left";
    // }
    // document.getElementById("slotForm").addEventListener("submit", function(event) {
    //   event.preventDefault(); 
      
      
    //   var selectedSlot = document.querySelector('input[name="grp1"]:checked');
    //   var selectedSlotId = selectedSlot.id;
      // arr[selectedSlotId-1]--;
      
      

      // if(arr[selectedSlotId-1] === 0 ){
      //   document.getElementById("seatsLeft"+String(i+1)).innerHTML = "No seats Left";
      // }
      // if (!selectedSlot) {
      //   alert("Please select a slot.");
      // }
    // });

    // function submitForm(event){
    //     event.preventDefault();
    //     form.style.display = "none";
    //     finall.innerHTML = "<b>Form Submitted Successfully</b>";
    //   }

    //   form.addEventListener('submit',submitForm);

  console.log("hi");
  alert("hi");
  var slotcount = [25,25,25,25,25,25];
  var i;
  for(i = 1;i<=6;i++){
      document.getElementById("slot"+String(i)).innerHTML = slotcount[i];
    }