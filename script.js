const menuIconButton = document.querySelector("[data-menu-icon-btn]");
const sidebar = document.querySelector("[data-sidebar]");

menuIconButton.addEventListener("click", () => {
	sidebar.classList.toggle("open");
});

const listItems = document.querySelectorAll(".sidebar-list-item");
console.log(listItems);

for (const item of listItems) {
	// console.log(item);
	item.addEventListener("click", () => {
		listItems.forEach((item) => item.classList.remove("active"));
		item.classList.add("active");
	});
}
