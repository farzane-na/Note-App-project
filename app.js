let $=document;
let inputBox=$.querySelector(".write-note");
let addBox=$.querySelector(".add-icon");
let deleteBox=$.querySelector(".delete-icon");
let containerNoteBox=$.querySelector(".container-note");
let colorBox=$.querySelectorAll(".color-box");
let choosingcolor;
console.log(colorBox)
colorBox.forEach(function(color){
    color.addEventListener("click",function(event){
        let choosingcolor=event.target.style.backgroundColor;
        inputBox.style.backgroundColor=choosingcolor;
    });
});
function generation(){
    if(inputBox.value){
        let noteBox=$.createElement("div");
        let inputBackground=inputBox.style.backgroundColor;
        noteBox.setAttribute("class","note-box");
        noteBox.innerHTML=inputBox.value;
        containerNoteBox.appendChild(noteBox);
        inputBox.value="";
        noteBox.style.backgroundColor=inputBackground;
        noteBox.addEventListener("click",function(event){
            event.target.remove();
        });
        inputBox.style.backgroundColor="#fff";
    }else{
        alert("write a Note !");
    };
}
function inputBoxHandeler(event){
    if(event.keyCode===13){
        generation();
    };
};
function addNoteBox(){
    generation();
};
function deleteNote(){
    inputBox.value="";
    inputBox.style.backgroundColor="#fff";
};

inputBox.addEventListener("keyup",inputBoxHandeler);
addBox.addEventListener("click",addNoteBox);
deleteBox.addEventListener("click",deleteNote);