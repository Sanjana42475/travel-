```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Dream Travel</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>

<body>

    <!-- Navigation Bar -->
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#book">Book Now</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>

    <!-- Section 1: Welcome and Search -->
    <section id="home">
        <div>
            <h1>Welcome to Your Dream Travel</h1>
            <p>Your gateway to unforgettable destinations</p>
            <div class="search-bar">
                <input type="text" id="search-input" placeholder="Search your destination...">
                <button id="search-btn">Search</button>
            </div>
        </div>
    </section>



    <!-- Section 2: Book Now -->
    <section id="book">
        <div>
            <h2>Book Your Next Adventure</h2>
            <div class="destination-container" id="destination-container">
                <!-- Destinations will be loaded here -->
            </div>
        </div>
    </section>

    <!-- Section 3: About Us -->
    <footer>
        <section id="about" class="about-section">
            <h2>About Our Travel Services</h2>
            <p>
                At Your Dream Travel, we specialize in crafting personalized travel experiences that cater to every
                traveler’s dream. Whether you’re
                looking for a relaxing getaway, an adventurous tour, or a cultural exploration, we offer tailored
                packages that suit your preferences.
            </p>

        </section>

        <div class="footer-container">
            <div class="footer-info">
                <h3>Contact Us</h3>
                <p>Email: Gaurav@gmail.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: Yog bhawan, Raipur, India</p>
            </div>
            <div class="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-social">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="https://www.instagram.com" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram">
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter">
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook">
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- Modal for Destination Details -->
    <div id="detailsModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2 id="modal-title"></h2>
            <p id="modal-description"></p>
        </div>
    </div>
</body>

</html>
```

```css
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h2 {
    font-size: 50px;
    font-family: 'Times New Roman', Times, serif;
}

body,
html {
    height: 100%;
    scroll-behavior: smooth;
    font-family: Arial, sans-serif;
}

/* Sticky Navigation Bar */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 15px 0;
    z-index: 1000;
}

nav ul {
    display: flex;
    justify-content: right;
    list-style: none;
    margin-right: 30px;
}

nav ul li {
    margin: 0 20px;
}

nav ul li a,
nav ul li button {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    background: none;
    border: none;
    cursor: pointer;
}

nav ul li a:hover,
nav ul li button:hover {
    text-decoration: underline;
}

/* Section Styling */
section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    transition: transform 0.5s ease;
    /* Added transition for zoom effect */
}

/* Home Section */
#home {
    background-image: url('https://i.pinimg.com/originals/76/aa/24/76aa24bf1e433a13444c18c5df7b839b.gif');
    background-color: #1abc9c;
    /* Teal */
    background-size: cover;
    background-position: center;
}

#home h1 {
    font-size: 60px;
    margin-bottom: 20px;
}

#home .search-bar {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

#search-input {
    padding: 10px;
    width: 300px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
}

#search-btn {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
}

#search-btn:hover {
    background-color: #218838;
}

/* Book Now Section */
#book {
    background-color: #224225f7;
    /* Blue */
    padding: 50px 20px;
    min-height: 170vh;
}

/* Container for all destinations */
.destination-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

/* Destination styling */
.destination {
    flex: 1 1 calc(20% - 20px);
    width: 250px;
    height: 390px;
    margin: 10px;
    background-color: white;
    color: black;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.destination img {
    width: 100%;
    height: 200px;
    border-radius: 0 0 20px 20px;
    /* Adjusting the height for uniformity */
    object-fit: cover;
}


.destination:hover {
    transform: scale(1.05);
    /* Zoom effect on hover */
}

.destination-content {
    padding: 15px;
}

.destination h3 {
    font-size: 22px;
    margin-bottom: 10px;
}

.destination p {
    font-size: 12px;
    margin-bottom: 10px;
}

.destination .budget {
    font-size: 18px;
    color: #2ecc71;
    margin-bottom: 10px;
}

.read-more,
.book-now {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
}

.read-more {
    background-color: #3498db;
    color: white;
}

.read-more:hover {
    background-color: #2980b9;
}

.book-now {
    background-color: #e74c3c;
    color: white;
}

.book-now:hover {
    background-color: #c0392b;
}

/* About Section */
#about {
    background-color: #e74c3c;
    /* Red */
    padding: 50px 20px;
}

#about h2 {
    font-size: 50px;
    text-align: center;
    justify-content: center;
}

#about p {
    font-size: 20px;
    width: 80%;
    margin: auto;
    line-height: 1.6;
}

.social-icons {
    margin-top: 20px;
}

.social-icons img {
    width: 40px;
    margin: 0 10px;
    cursor: pointer;
}

/* Details Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
    padding-top: 60px;
}

.modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover, .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Modal Styling */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.highlight {
    border: 6px solid #ff5733;
    /* Orange border for highlighting */
    background-color: #fff4e6;
    /* Light orange background */
    transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out;
    /* Smooth transition */
}

/* Footer Styles */
footer {
    background-color: #131512;
    /* Dark background */
    color: white;
    padding: 40px 20px;
    /* Padding for the footer */
    font-size: 14px;
    /* Base font size */
    min-height: 20%;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    /* Align items to space out */
    flex-wrap: wrap;
    /* Wrap elements on smaller screens */
    height: 200px;
}

.footer-info,
.footer-links,
.footer-social {
    flex: 1;
    /* Each section takes equal space */
    margin: 10px;
    /* Space between sections */
}

.footer-info h3,
.footer-links h3,
.footer-social h3 {
    margin-bottom: 15px;
    /* Space below headings */
}

.footer-links ul {
    list-style-type: none;
    /* Remove bullet points */
    padding: 0;
    /* Remove padding */
}

.footer-links ul li {
    margin-bottom: 10px;
    /* Space between links */
}

.footer-links a {
    color: #61dafb;
    /* Link color */
    text-decoration: none;
    /* Remove underline */
}

.footer-links a:hover {
    text-decoration: underline;
    /* Underline on hover */
}

.footer-social {
    display: flex;
    gap: 10px;
    /* Space between social icons */
}

.social-icon {
    color: #61dafb;
    /* Color for social icons */
    text-decoration: none;
    /* Remove underline */
    font-size: 20px;
    /* Size of social icons */
}

.footer-bottom {
    text-align: center;
    /* Centered text */
    margin-top: 20px;
    /* Space above copyright */
    border-top: 1px solid #444;
    /* Top border for separation */
    padding-top: 10px;
    /* Padding above copyright text */
}

.about-section {
    padding: 20px;
    background-color: #f9f9f9;
    color: #333;
    margin-top: 20px;
    border-radius: 8px;
    text-align: center;
    /* Center the text */
}

.about-section h2 {
    margin-bottom: 15px;
    /* Adds space below the heading */
}

.about-section p {
    margin-top: 10px;
    /* Space above the paragraph */
    font-size: medium;
}
nav {
    position: relative;
    z-index: 1000;
}

/* Add some padding to the top of the body to prevent overlap */
body {
    padding-top: 60px; /* Adjust this value based on the height of your nav bar */
}

/* Mobile Devices (max-width: 767px) */
@media (max-width: 767px) {
    nav {
        position: fixed;
        top: 0;
        height: 60px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 5px 0;
        z-index: 1000;
    }

    nav ul {
        flex-direction: row;
        align-items: left;
        margin-right: 20px;
        padding: 5px;
        gap: 15px;
    }

    nav ul li {
        margin: 10px 0;
    }

    section {
        height: auto;
        padding: 20px 10px;
    }

    h2 {
        font-size: 30px;
    }

    #home h1 {
        font-size: 40px;
    }

    #home .search-bar {
        flex-direction: column;
    }

    #search-input {
        width: 100%;
        margin-bottom: 10px;
    }

    .destination-container {
        flex-direction: column;
        align-items: center;
    }

    .destination {
        width: 90%;
        margin: 15px 0;
    }

    #about p {
        font-size: 18px;
        width: 100%;
    }

    .footer-container {
        flex-direction: column;
        align-items: center;
        height: auto;
    }

    .footer-info,
    .footer-links,
    .footer-social {
        margin: 20px 0;
        text-align: center;
    }
}

/* Tablets (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
    h2 {
        font-size: 40px;
    }

    nav {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 20px 0;
        z-index: 1000;
    }

    #home h1 {
        font-size: 50px;
    }

    .destination-container {
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-between;
    }

    .destination {
        margin: 10px;
        height: 320px;
        width: 200px;
    }

    .destination .budget {
        font-size: 15px;
        color: #2ecc71;
        margin-bottom: 5px;
    }

    .destination img {
        width: 100%;
        height: 130px;
        border-radius: 0 0 20px 20px;
        /* Adjusting the height for uniformity */
        object-fit:cover;
    }

    .destination-content {
        padding: 1px;
    }

    .destination h3 {
        font-size: 15px;
        margin-bottom: 10px;
    }

    .destination p {
        font-size: 9px;
        margin-bottom: 10px;
    }
    .read-more,
    .book-now {
        padding: 5px 10px;
        border: none;
        margin: 2px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 12px;
    }

    .footer-container {
        flex-direction: column;
        align-items: center;
    }

    .footer-info,
    .footer-links,
    .footer-social {
        text-align: center;
        margin: 10px 0;
    }
}

/* Large Desktops (1025px and up) */
@media (min-width: 1025px) {

    nav {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 20px 0;
        z-index: 1000;
    }
    
    .destination-container {
        justify-content: center;
        gap: 20px;
    }

    .destination {
        flex: 1 1 calc(20% - 20px);
    }

    .destination h3 {
        font-size: 17px;
        margin-bottom: 5px;
    }

    .destination p {
        font-size: 12px;
        margin-bottom: 5px;
    }

    .read-more,
    .book-now {
        padding: 5px 15px;
        border: none;
        margin: 2px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 12px;
    }

    #about p {
        width: 80%;
        font-size: 20px;
    }
}
```

```javascript
const destinationData = [
    {
        id: "destination-goa",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxpWOodhHvvL7GqyIOeugaus1D_ZlNhY7KM7lk321hqq4vBKD5mi9di8TEe0CPW5j0Os&usqp=CAU",
        title: "Goa",
        description: "Experience the sun, sand, and vibrant nightlife in Goa.",
        budget: "Starting at $500",
        detailedDescription: "Goa is a vibrant coastal paradise in India, renowned for its stunning beaches, lively nightlife, and rich Portuguese heritage. It's a favorite destination for travelers seeking sun, sea, adventure sports, and cultural experiences. From relaxing by the beach to exploring its historic forts and churches, Goa offers something for everyone."
    },
    {
        id: "destination-shimla",
        imgUrl: "https://img.wattpad.com/880ef214f10d6f01ac79d64c86d6ce9b935f0952/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f46534f6f38376451664b585731413d3d2d3937333230363432312e3136343231616663303764363063316238333336363538323539372e676966",
        title: "Shimla",
        description: "Escape to the hills of Shimla for a serene getaway.",
        budget: "Starting at $400",
        detailedDescription: "Shimla, the capital of Himachal Pradesh, is a charming hill station known for its scenic beauty, colonial architecture, and pleasant climate. Nestled in the Himalayas, it's a popular destination for nature lovers and those seeking a peaceful retreat amidst lush forests and snow-capped mountains."
    },
    {
        id: "destination-manali",
        imgUrl: "https://www.travelpack.in/public/imagedb/sysimgdocs/rszimages/Manali-Volvo-Packages_pk29341_1.gif",
        title: "Manali",
        description: "Discover adventure and beauty in the picturesque town of Manali.",
        budget: "Starting at $450",
        detailedDescription: "Manali is a picturesque hill station in Himachal Pradesh, nestled in the northern Himalayas. Known for its breathtaking landscapes, snow-capped mountains, and adventurous activities like trekking, skiing, and paragliding, Manali attracts nature lovers and thrill-seekers alike. Its serene valleys, rivers, and ancient temples make it a favorite getaway for travelers."
    },
    {
        id: "destination-udaipur",
        imgUrl: "https://i.makeagif.com/media/2-18-2016/U_bmbz.gif",
        title: "Udaipur",
        description: "Known as the City of Lakes, Udaipur offers beautiful palaces and a rich cultural heritage.",
        budget: "Starting at $600",
        detailedDescription: "Udaipur, often called the City of Lakes, is a beautiful city in Rajasthan, known for its rich history, royal palaces, and scenic lakes like Lake Pichola and Fateh Sagar. The city's majestic architecture, including the City Palace and Jag Mandir, reflects the grandeur of the Rajput era. Surrounded by the Aravalli Hills, Udaipur offers a serene and romantic atmosphere, making it a popular destination for travelers and couples. Its vibrant culture and artistic heritage add to its charm."
    },
    {
        id: "destination-kerala",
        imgUrl: "https://i.makeagif.com/media/8-22-2017/i7BXb_.gif",
        title: "Kerala",
        description: "Experience the backwaters, beaches, and lush green landscapes of Kerala.",
        budget: "Starting at $700",
        detailedDescription: "Kerala, known as God’s Own Country, is a tropical paradise in southern India renowned for its lush landscapes, tranquil backwaters, and pristine beaches. The state’s rich cultural heritage includes traditional art forms like Kathakali and Ayurveda, making it a hub for wellness tourism. Kerala is also famous for its spice plantations, wildlife sanctuaries, and the scenic beauty of the Western Ghats, offering a unique blend of natural beauty, culture, and history."
    },
    {
        id: "destination-darjeeling",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFpnASTsTadxARUURHfU5ig6Ie-VXCbiC7qI0wISJvTOKCEY3avE2IZWJ0eaQUDOfLpk&usqp=CAU",
        title: "Darjeeling",
        description: "Famous for its tea gardens and stunning views of the Himalayas.",
        budget: "Starting at $500",
        detailedDescription: "Darjeeling, a picturesque hill station in West Bengal, is renowned for its stunning views of the Himalayas, especially the majestic Kanchenjunga peak. Famous for its tea plantations, Darjeeling produces some of the world’s finest tea. The town offers a serene blend of colonial-era architecture, Buddhist monasteries, and the charming Darjeeling Himalayan Railway, a UNESCO World Heritage site. With its cool climate and lush landscapes, it’s a popular destination for nature lovers and adventure enthusiasts."
    },
    {
        id: "destination-rajasthan",
        imgUrl: "https://i.makeagif.com/media/1-28-2014/gRjPkI.gif",
        title: "Rajasthan",
        description: "Immerse yourself in the royal history and desert landscapes of Rajasthan.",
        budget: "Starting at $800",
        detailedDescription: "Rajasthan, the largest state in India, is known for its rich history, vibrant culture, and stunning desert landscapes. Often called the Land of Kings, it boasts grand palaces, majestic forts, and intricately carved temples. Cities like Jaipur, Udaipur, and Jodhpur are famous for their architectural splendor and royal heritage. Rajasthan is also home to the Thar Desert, colorful festivals, traditional folk music and dance, and a thriving handicrafts market, making it a major tourist destination that reflects India’s regal past and artistic traditions."
    },
    {
        id: "destination-leh-ladakh",
        imgUrl: "https://static2.tripoto.com/media/transfer/img/496775/TripDocument/1589457855_abc_1.gif",
        title: "Leh-Ladakh",
        description: "Experience the stunning landscapes and rich culture of Leh-Ladakh.",
        budget: "Starting at $900",
        detailedDescription: "Leh-Ladakh, located in the northernmost region of India, is known for its stunning landscapes, high-altitude mountain passes, and unique Buddhist culture. Often called the Land of High Passes, Ladakh is home to majestic monasteries, crystal-clear lakes like Pangong and Tso Moriri, and rugged terrain perfect for adventure enthusiasts. The region offers a blend of serene beauty and thrilling experiences, making it a popular destination for trekkers, bikers, and those seeking spiritual retreats in the lap of the Himalayas."
    },
    {
        id: "destination-andaman",
        imgUrl: "https://assets.vogue.in/photos/6274d9cedf2aeda1f8f79c95/2:3/w_2560%2Cc_limit/Andaman-Meghalaya%2520gif.gif",
        title: "Andaman and Nicobar Islands",
        description: "Relax on the pristine beaches and enjoy water sports in the Andaman Islands.",
        budget: "Starting at $750",
        detailedDescription: "The Andaman and Nicobar Islands, located in the Bay of Bengal, are a group of picturesque islands known for their pristine beaches, turquoise waters, and lush tropical forests. This remote paradise is a haven for nature lovers and adventure enthusiasts, offering activities like snorkeling, scuba diving, and exploring coral reefs teeming with marine life. The islands also have a rich history, with landmarks like the Cellular Jail in Port Blair, reflecting their significance during India’s freedom struggle."
    },
    {
        id: "destination-rishikesh",
        imgUrl: "https://www.travelpack.com/public/imagedb/sysimgdocs/rszimages/Rishikesh-Yoga-Meditation-Nature-Walk_pk28703_1.gif",
        title: "Rishikesh",
        description: "Known as the Yoga Capital of the World, Rishikesh offers spiritual experiences.",
        budget: "Starting at $400",
        detailedDescription: "Rishikesh, located in the foothills of the Himalayas along the Ganges River, is a renowned spiritual hub and adventure destination in India. Known as the Yoga Capital of the World, it attracts seekers for meditation, yoga, and spiritual enlightenment. It is also famous for its scenic beauty, sacred temples, and the iconic Laxman Jhula bridge. For adventure lovers, Rishikesh offers thrilling activities like white-water rafting, trekking, and camping by the river."
    },
    {
        id: "destination-hampi",
        imgUrl: "https://www.travelpack.com/public/imagedb/sysimgdocs/rszimages/Hampi-Deccan_pk24608_1.gif",
        title: "Hampi",
        description: "A UNESCO World Heritage Site, Hampi is known for its ancient temples and ruins.",
        budget: "Starting at $500",
        detailedDescription: "Hampi is a UNESCO World Heritage Site located in Karnataka, India, known for its stunning ruins and rich history. Once the capital of the Vijayanagara Empire in the 14th century, it features impressive temples, intricate sculptures, and captivating landscapes dotted with large boulders. The iconic Virupaksha Temple and the Vittala Temple, famous for its stone chariot, are key attractions. Hampi’s unique blend of history, culture, and natural beauty makes it a must-visit destination for travelers and history enthusiasts alike."
    },
    {
        id: "destination-mumbai",
        imgUrl: "https://64.media.tumblr.com/1a152a646a1f973fe9e7b197fb052730/tumblr_inline_pjzrkr8poh1qa7lan_500.gifv",
        title: "Mumbai",
        description: "The bustling city of Mumbai is known for its vibrant culture and nightlife.",
        budget: "Starting at $500",
        detailedDescription: "Mumbai, often referred to as the financial capital of India, is a bustling metropolis known for its vibrant culture, diverse population, and iconic landmarks. The city is home to Bollywood, India’s film industry, and features attractions like the Gateway of India, Marine Drive, and the historic Elephanta Caves. With its rich history, bustling markets, and a mix of modern and colonial architecture, Mumbai offers a unique blend of tradition and contemporary life, making it a dynamic destination for tourists and locals alike."
    }
];

const destinationContainer = document.getElementById('destination-container');

// Function to load and display destinations
function loadDestinations() {
    destinationContainer.innerHTML = ''; // Clear any existing content

    destinationData.forEach(destination => {
        const destinationElement = `
            <div class="destination" id="${destination.id}">
                <img src="${destination.imgUrl}" alt="${destination.title}">
                <div class="destination-content">
                    <h3>${destination.title}</h3>
                    <p>${destination.description}</p>
                    <p class="budget">${destination.budget}</p>
                    <button class="read-more" onclick="showDetails('${destination.title}', '${destination.detailedDescription}')">Read More</button>
                    <button class="book-now" onclick="bookDestination('${destination.title}')">Book Now</button>
                </div>
            </div>
        `;
        destinationContainer.innerHTML += destinationElement;
    });
}

// Function to handle booking - you can customize this
function bookDestination(destinationName) {
    alert(`Booking for ${destinationName}! You'll be redirected to a booking page.`); 
    // Add your booking logic here, e.g., redirect to a booking form or page.
}

// Function to show details in modal
function showDetails(title, description) {
    document.getElementById('modal-title