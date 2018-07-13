// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//function makeGrid(row,colm) {
  
  function makeGrid() {
      let gridRows, cell;
  	  let rows = $("#inputHeight").val();
  	  let cols = $("#inputWidth").val();

  	  let table = $("#pixelCanvas");

  	  table.children().remove();


  	  for (let i = 0; i < rows; i++) {
  	  	table.append("<tr></tr>");
  	  }
         gridRows = $("tr");

  	  	for (let j = 0; j < cols; j++){
  	  		gridRows.append("<td></td>");
  	  	}
  	 
  	 cell = table.find("td");
  
   table.on("click", "td", function() {
   	   var color = $("input[type='color']").val();

   	   $(this).attr("bgcolor", color);
   });
}
//when size is submitted call makeGrid()
   $("input[type='submit']").click(function(e) {
   	e.preventDefault();
   	makeGrid();
   });