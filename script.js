const upload = document.querySelector("input");
const image = document.querySelector(".img img");
const close = document.querySelector(".icon .close");

upload.addEventListener("change",(event)=>{
    uploadFile(event);
});

function uploadFile(event){
