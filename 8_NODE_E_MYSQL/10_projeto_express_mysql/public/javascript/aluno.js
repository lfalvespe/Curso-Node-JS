const btnCancel = document.querySelector(".cancel_btn");
const btnDelete = document.querySelector(".delete_btn");

const showModal = () => {
  const modal = document.querySelector(".modal");

  if (modal.style.display == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }

};

btnCancel.addEventListener("click", (e) => {
  showModal()
})

btnDelete.addEventListener("click", (e) => {
  e.preventDefault();
  showModal();

});