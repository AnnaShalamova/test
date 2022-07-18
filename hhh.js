let inputValue = "";

const allServices = [
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/1.png",
class: "fotki",
text: "хирургия",
href: "C:/Users/User/Desktop/Vetclinika/personal_page/service.html",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/2.png",
class: "fotki",
text: "2",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/3.png",
class: "fotki",
text: "теропия",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/4.png",
class: "fotki",
text: "4",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/5.png",
class: "fotki",
text: "5",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/6.png",
class: "fotki",
text: "6",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/7.png",
class: "fotki",
text: "7",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/8.png",
class: "fotki",
text: "8",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/9.png",
class: "fotki",
text: "9",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/10.png",
class: "fotki",
text: "10",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/11.png",
class: "fotki",
text: "11",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/12.png",
class: "fotki",
text: "12",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/13.png",
class: "fotki",
text: "13",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/14.png",
class: "fotki",
text: "14",
},
{
href: "C:UsersUserDesktopVetclinikapersonal_pageservice.html",
src: "C:/Users/User/Desktop/Vetclinika/personal_page/image/service/15.png",
class: "fotki",
text: "вакцинация",
},
];

const render = () => {
const content = document.getElementById("content");
while (content.firstChild) {
content.removeChild(content.firstChild);
}
let aaaa;
if (!!inputValue) {
aaaa = allServices.filter((item) => {
return item?.text?.includes(inputValue);
});
} else {
aaaa = allServices;
}
aaaa.map((item) => {
const href = document.createElement("a");
const containerImg = document.createElement("div");
const img = document.createElement("img");
href.href = item.href;
img.src = item.src;
containerImg.classList.add("fotki");

containerImg.appendChild(img);
href.appendChild(containerImg);
content.appendChild(href);
});
};

window.onload = init = () => {
const input = document.getElementById("search");
input.addEventListener("input", (e) => {
inputValue = e.target.value;
render();
});
};

render();
