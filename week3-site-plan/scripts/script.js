function toggleMenu() {
    document.querySelector("#navigation").classList.toggle("open")
    document.querySelector("#pageNavigation").classList.toggle("open")
    document.querySelector("#socialNavigation").classList.toggle("open")
}

document.querySelector("#hamburgerMenu").addEventListener("click", toggleMenu)

//get all images
const imagesToLoad = document.querySelectorAll("img[data-src]")

//changes the path from data-src to src
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"))
    image.onload = () => {
        image.removeAttribute("data-src")
    };
}

//verify if intersection observer is supported
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            };
        });
    });

    //iterate to each imgs
    imagesToLoad.forEach((img) => {
        observer.observe(img)
    });

    //load all imgs
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

function getDayName(weekDayNumber) {
    const dayNames = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"}

    const dayName = dayNames[weekDayNumber]
    return dayName
}

function getMonthName(monthNumber) {
    const months = {0: "January", 1: "February", 2: "March", 3: "April", 4: "May", 5: "June",
    6: "July", 7: "August", 8: "September", 9: "October", 10: "November", 11: "December"}

    const monthName = months[monthNumber]
    return monthName
}

//Define date variables
const date = new Date()
const dayNumber = date.getDate()
const dayName = getDayName(date.getDay())
const month = getMonthName(date.getMonth())
const year = date.getFullYear()

//Add current date to header
document.querySelector("#currentDate").textContent = `${dayName}, ${dayNumber} ${month} ${year}`

//Add year to footer
document.querySelector("#year").textContent = year

//Add banner to header
function displayBanner(dayName) {

    //Use this line to test the function: || dayName === "Current day name to test"
    if (dayName === "Monday" || dayName === "Tuesday") {
        const banner = document.querySelector("#banner")
        banner.className = "display"
        banner.innerHTML = "<p>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</p>"
    } else {
        const banner = document.querySelector("#banner")
        banner.classList.toggle("displays")
    }
}

displayBanner(dayName)

//Add current date to header
document.querySelector("#currentDate").textContent = `${dayName}, ${dayNumber} ${month} ${year}`

//Add year to footer
document.querySelector("#year").textContent = year

//Add last modified to footer
const lastModified = document.lastModified
document.querySelector("#lastModified").textContent = lastModified

// Handle localStorages
// Save Current Visit day
localStorage.setItem("visitDay", today)
// Calculate difference between last visit and today
const daysSinceLastVisit =  localStorage.getItem("visitDay") - localStorage.getItem("lastVisit")
// Get element to display the difference
const lastVisitDisplay = document.querySelector("#current-visit")

if (daysSinceLastVisit != 0) {
    lastVisitDisplay.textContent = `Happy to see you, it had been long ${daysSinceLastVisit} days`
} else {
    lastVisitDisplay.textContent = `Seem to be your first time here, and we very much happy to be with you :)`
}