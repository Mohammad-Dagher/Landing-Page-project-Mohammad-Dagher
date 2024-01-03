const sections = document.querySelectorAll("Section"); //  sections list  Global Variables..............................

////-------------------------------------------------------------addEventListener("scroll",function())

// Add an active state to your navigation items when a section is in the viewport.
// Detect the element location relative to the viewport using .getBoundingClientRect() built-in function.

window.addEventListener("scroll", function () {
  "use strict";

  for (const section of sections) {
    if (
      section.getBoundingClientRect().top <= 282 && ///  position sections[0] getBoundingClientRect() ===> 282
      section.getBoundingClientRect().top <= 1121.5 && /// position  sections[1] getBoundingClientRect()  ===> 1121.5
      section.getBoundingClientRect().top <= 1961 && /// position  sections[2] getBoundingClientRect()  ===> 1961
      section.getBoundingClientRect().top <= 2800.5 && /// position  sections[3] getBoundingClientRect()  ===>  2800.5
      section.getBoundingClientRect().top <= 3640 /// position  sections[4] getBoundingClientRect()   ===> 3640
    ) {
      let id = section.attributes.id.value;

      remove_your_active_class(); ///    Clear  all Action .

      add_your_active_class(id); ////     add Action Class .
    }
  }
});

// =================================================================================================

// =======================================================

let ul_navbar__list = document.getElementById("navbar__list");

///----------------------------------------------------------add event lisenar methode to  behavior smooth scroll section--------

// Add the functionality to scroll to sections. Clicking on a navigation item should scroll to the appropriate section of the page.

ul_navbar__list.addEventListener("click", function (g) {
  g.preventDefault(); // stop event's   ..........
  if (g.target.dataset.scorll) {
    //  chick if data-scorll exsis or no ........

    const location_scroll = document.getElementById(
      `${g.target.dataset.scorll}`
    );
    location_scroll.scrollIntoView({ behavior: "smooth" }); // make behavior as "smooth"...........
  }
});

///------------------------------------------------- method  remove class's

// We delete the classes of elements that have stopped displaying and have become ineffective .

function remove_your_active_class() {
  const sections = document.querySelectorAll("nav ul li a");

  for (const section of sections) {
    // console.log(section.className);

    section.classList.remove("your-active-class", "section_style"); // remove class "your-active-class" "section_style" from active
  }
}

///------------------------------------------------- method  add class's

// Add an active state to your navigation items when a section is in the viewport.
// Add functionality to distinguish the section in view. While navigating through the page,
//  the section that is active in the viewport/closest to the top should be distinguished from the other sections.

let conteners = document.querySelectorAll(`.landing__container`);

function add_your_active_class(id) {
  // console.log(id);
  let acteve_id = `nav ul li a[href="#${id}"]`;

  this.document.querySelector(acteve_id).classList.add("your-active-class"); // add class "your-active-class"

  // this.document.querySelector(`#${id}`).classList.add("section_style"); // add class "section_style" to active

  // console.log(  this.document.querySelector(acteve_id).innerHTML);

  const h2_values = document.getElementsByTagName(`h2`);

  // console.log(h2_values);

  let curent_section = this.document.querySelector(acteve_id).innerText;

  // ++++++
  // console.log(curent_section);
  for (const h2_val of h2_values) {
    // console.log(h2_val.innerText);

    if (h2_val.innerText === curent_section) {
      h2_val.classList.add("Section_Active_State");

      // console.log(h2_val.innerText);

      // console.log("h2_val.innerText" + "acteve_id is ready");
    } else if (h2_val.innerText != curent_section) {
      h2_val.classList.remove("Section_Active_State");
    }
//////////////////////////////////////////////////////////////

    // // console.log(
    // //   conteners[0].getElementsByTagName("p")[0]
    // //     ,
    // //   conteners[0].getElementsByTagName("p")[1]
    // //   );

    // console.log(conteners[0].hasChildNodes("p"));

    // if (
    //   (h2_values[0] === h2_val && h2_val.innerText === curent_section) ||
    //   (conteners[0].hasChildNodes("p") &&
    //     conteners[0] === h2_val.getBoundingClientRect().top <= 282)
    // ) {
    //   conteners[0].getElementsByTagName("p")[1].classList.add("section_style");
    //   conteners[0].getElementsByTagName("p")[0].classList.add("section_style");
    // } else if (!(h2_val.innerText === curent_section)) {
    //   conteners[0]
    //     .getElementsByTagName("p")[1]
    //     .classList.remove("section_style");
    //   conteners[0]
    //     .getElementsByTagName("p")[0]
    //     .classList.remove("section_style");
    // }
    // if (h2_values[1] === h2_val && h2_val.innerText === curent_section) {
    //   conteners[1].getElementsByTagName("p")[1].classList.add("section_style");
    //   conteners[1].getElementsByTagName("p")[0].classList.add("section_style");
    // } else if (!(h2_val.innerText === curent_section)) {
    //   conteners[1]
    //     .getElementsByTagName("p")[1]
    //     .classList.remove("section_style");
    //   conteners[1]
    //     .getElementsByTagName("p")[0]
    //     .classList.remove("section_style");
    // }

    // if (h2_values[2] === h2_val && h2_val.innerText === curent_section) {
    //   conteners[2].getElementsByTagName("p")[1].classList.add("section_style");
    //   conteners[2].getElementsByTagName("p")[0].classList.add("section_style");
    // } else if (!(h2_val.innerText === curent_section)) {
    //   conteners[2]
    //     .getElementsByTagName("p")[1]
    //     .classList.remove("section_style");
    //   conteners[2]
    //     .getElementsByTagName("p")[0]
    //     .classList.remove("section_style");
    // }

    // if (h2_values[3] === h2_val && h2_val.innerText === curent_section) {
    //   conteners[3].getElementsByTagName("p")[1].classList.add("section_style");
    //   conteners[3].getElementsByTagName("p")[0].classList.add("section_style");
    // } else if (!(h2_val.innerText === curent_section)) {
    //   conteners[3]
    //     .getElementsByTagName("p")[1]
    //     .classList.remove("section_style");
    //   conteners[3]
    //     .getElementsByTagName("p")[0]
    //     .classList.remove("section_style");
    // }

    // if (h2_values[4] === h2_val && h2_val.innerText === curent_section) {
    //   conteners[4].getElementsByTagName("p")[1].classList.add("section_style");
    //   conteners[4].getElementsByTagName("p")[0].classList.add("section_style");
    // } else if (!(h2_val.innerText === curent_section)) {
    //   conteners[4]
    //     .getElementsByTagName("p")[1]
    //     .classList.remove("section_style");
    //   conteners[4]
    //     .getElementsByTagName("p")[0]
    //     .classList.remove("section_style");
    // }

//////////////////////////////////////////////////////////////


  }
}

////----------------------------------------------------------------------------------------

const nav_ul = document.querySelector("#navbar__list");

const Sections = document.querySelectorAll("Section");

// Build the navigation menu. This will dynamically create a navigation menu based on the sections of the page.
//  This can be a particularly useful trick when you begin working with content management systems or APIs when you are uncertain
// of where the items will be.  ===>    function create_nav_Ul()

(function create_nav_Ul() {
  ///   create nav menuo   // build the nav

  // We create ul elements using the new_li constant variable for all elements that we will add, current and future, and insert them using a function
  // nav_ul. insertAdjacentHTML("afterbegin", new_li(li));

  for (let i = 0; i < Sections.length; i++) {
    const new_li = ` <li> <a href="#${Sections[i].id}" data-scorll="${Sections[i].id}"  class="btn" > ${Sections[i].dataset.nav} </a>  </li> `;

    nav_ul.insertAdjacentHTML("afterbegin", new_li);
  }

  console.log(" nav manuo is redy "); // <======  create_nav_Ul ()
})();

// ------------------------------------------------------------------------

let today = new Date();
let HourNow = today.getHours();
let HOUR;

//====================================  set time to say ( Evening , afternoon , morning ) after H1 .
const Hour_Now_Is = () => {
  if (HourNow > 18) {
    /////  time > 18   ==>  Evening.
    HOUR = " Good Evening !  mohammad dagher ";
  } else if (HourNow > 12) {
    //// time > 12 noon  ==>  afternoon.
    HOUR = " Good afternoon ! mohammad dagher ";
  } else if (HourNow > 0) {
    //// time > 12 midnight ==>   morning.
    HOUR = " Good morning ! mohammad dagher ";
  } else {
    HOUR = " Welcoome To Day ! mohammad dagher ";
  }

  return HOUR;
};

let hed = document.querySelector("#head");

const p = document.createElement("p");

p.textContent = Hour_Now_Is();

p.style.cssText =
  "   font-family: 'Cursive' ;  width: 10em  ;  margin: 0% ;  padding: 0% ; box-sizing: border-box; font-size:20px; color:#0f0;  ";

hed.append(p);
