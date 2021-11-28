const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");
const act = document.querySelector(".items");
window.onload = ()=>{ 
act.onclick = (selectedItem)=>{ 
 
  if(selectedItem.target.classList.contains("item")){ 
    act.querySelector(".activate").classList.remove("activate");
    selectedItem.target.classList.add("activate");
  }
} 
}


window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ 
    if(selectedItem.target.classList.contains("item")){ 
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active"); 
      let filterName = selectedItem.target.getAttribute("data-name"); 
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); 
          image.classList.add("show"); 
        }else{
          image.classList.add("hide"); 
          image.classList.remove("show"); 
        }
      });
    }
}
}