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
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('detailsModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('detailsModal').style.display = 'none';
}

// Load the destinations on page load
loadDestinations();
```

**Explanation of Changes:**

1.  **Modal Implementation:**
    *   The HTML code now includes a modal element (`<div id="detailsModal">`) to display the destination details.
    *   The modal content includes placeholders for the title (`<h2>` with `id="modal-title"`) and description (`<p>` with `id="modal-description"`).
    *   The modal is hidden by default (`display: none;`).

2.  **JavaScript Enhancements:**
    *   **`showDetails` Function:**
        *   This function takes the destination `title` and `description` as arguments.
        *   It sets the content of the modal's title and description elements.
        *   It makes the modal visible by setting `display: block`.
    *   **`closeModal` Function:**
        *   This function hides the modal by setting `display: none`.
    *   **Click Event Handlers:**
        *   The `read-more` button in each destination element now calls `showDetails` when clicked, passing the relevant data.
        *   A close button (`<span class="close">`) is added to the modal, which calls `closeModal` when clicked.
    *   **`loadDestinations` Function:**
        *   The `loadDestinations` function now adds the `onclick` attributes to the `read-more` and `book-now` buttons, calling the appropriate functions.

**How it Works:**

1.  **User clicks "Read More":**
    *   The `showDetails` function is called, which populates the modal with the destination details and makes it visible.
2.  **User clicks the close button or outside the modal:**
    *   The `closeModal` function is called, which hides the modal.

**Additional CSS:**

You'll need to add some basic CSS styles for the modal (see the provided CSS code earlier). This code handles the positioning, appearance, and closing behavior of the modal.

**Important Notes:**

*   **Booking Functionality:**  The `bookDestination` function is a placeholder for your actual booking logic. You'll need to implement the appropriate functionality to handle bookings (e.g., redirecting to a form or payment system).
*   **Dynamic Content:** The `showDetails` function provides a way to display dynamic content in the modal. You can modify the function to fetch data from an API or a database for more complex scenarios.
*   **Accessibility:**  Consider accessibility when designing the modal. Add appropriate ARIA attributes for screen readers, and ensure the modal can be closed using the keyboard.
*   **Mobile Responsiveness:** The provided CSS handles responsiveness for different screen sizes, ensuring the modal displays well on mobile devices.
