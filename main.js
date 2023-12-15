// DISPLAYING IMAGE
const fileInput = document.querySelector("#file");
const validFormat = ['image/jpeg', 'image/png', 'image/webp'];
const errorModal = document.querySelector("#modal");

errorModal.addEventListener('click', function() {
    this.close();
})

function verifyType() {
    const file = fileInput.files[0];
    if (validFormat.includes(file.type)) {
        displayImage(file);
    } else {
        errorModal.showModal();
    }
}

function displayImage(image) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const imgContainer = document.querySelector("#img-getter");
        const imgNode = document.querySelector(".share img");

        imgContainer.remove();
        imgNode.classList.toggle("d-none");
        imgNode.src = e.target.result;
    }

    reader.readAsDataURL(image);
}
