function searchPhones() {
    // Obtiene el valor del campo de búsqueda
    var input = document.querySelector("input[type='text']");
    var filter = input.value.toUpperCase();
  
    // Obtiene los elementos que deben ser filtrados
    var phones = document.querySelectorAll(".product");
  
    // Itera sobre cada elemento y los filtra por el valor de búsqueda
    for (var i = 0; i < phones.length; i++) {
      var name = phones[i].querySelector(".product-name");
      if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
        phones[i].style.display = "";
      } else {
        phones[i].style.display = "none";
      }
    }
  }
var searchBtn = document.querySelector("button[type='submit']");
  searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    searchPhones();
  });
    