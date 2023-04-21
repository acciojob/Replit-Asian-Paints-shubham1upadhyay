 function changeColor(){
	 // Get the block id and color
	 var blockId = document.getElementById("block_id").value;
	 var color = document.getElementById("colour_id").value;
	 // Set the background color of the specified block
	 document.getElementById(blockId).style.backgroundColor = color;
}
function resetColors(){
	// Set the background color of all blocks to transparent
	var blocks = document.getElementsByClassName("grid-item");
	for(var i = 0; i < blocks.length; i++){
		blocks[i].style.backgroundColor = "transparent";
	}
}