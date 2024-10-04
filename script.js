document.getElementById('search-btn').addEventListener('click', function () {
    // Get the search input value
    const searchQuery = document.getElementById('search-input').value.toLowerCase();

    // Get all the destination divs
    const destinations = document.querySelectorAll('.destination');

    // Clear previous highlights
    destinations.forEach(destination => {
    destination.classList.remove('highlight');
    });

    // Check if the search input matches any destination
    let found = false;
    destinations.forEach(destination => {
    const destinationName = destination.querySelector('h3').innerText.toLowerCase();

    // If a match is found, add the highlight class
    if (destinationName.includes(searchQuery)) {
        destination.classList.add('highlight');
        found = true;
        destination.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to the matched destination
    }
    });

    // If no match is found, alert the user
    if (!found) {
    alert('Destination not found. Please try again.');
    }
});

/* Optional: Trigger search on Enter key press*/
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    document.getElementById('search-btn').click();
    }
});

/* Search Button Functionality*/
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const destinations = [
    { name: 'goa', id: 'destination-goa' },
    { name: 'shimla', id: 'destination-shimla' },
    { name: 'manali', id: 'destination-manali' },
    { name: 'udaipur', id: 'destination-udaipur' },
    { name: 'kerala', id: 'destination-kerala' },
    { name: 'darjeeling', id: 'destination-darjeeling' },
    { name: 'rajasthan', id: 'destination-rajasthan' },
    { name: 'leh-ladakh', id: 'destination-leh-ladakh' },
    { name: 'andaman', id: 'destination-andaman' },
    { name: 'rishikesh', id: 'destination-rishikesh' },
    { name: 'hampi', id: 'destination-hampi' },
    { name: 'agra', id: 'destination-agra' },
    { name: 'mumbai', id: 'destination-mumbai' }
    ];

    const foundDestination = destinations.find(destination => destination.name === query);
    if (foundDestination) {
    const destinationId = foundDestination.id;
    const destinationElement = document.getElementById(destinationId);
    destinationElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
    alert('Destination not found. Please try another.');
    }
});

/* Function to show details in modal */
function showDetails(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('detailsModal').style.display = 'block';
}

/* Function to close modal */
function closeModal() {
    document.getElementById('detailsModal').style.display = 'none';
}