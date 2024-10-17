const pincodes = [
    249001, // Tehri Garhwal
    249002, // Chamba
    249003, // Rishikesh
    249004, // New Tehri
    249005, // Bhilangana
    249006, // Ghansali
    249007, // Pratapnagar
    249008, // Jakholi
    249009, // Narendra Nagar
    249010, // Tehri
    249011, // Koti
    249012, // Dhanaulti
    249013, // Kanatal
    249014, // Chamba
    249015, // Harshil
    249016, // Naugaon
    249017, // Kirtinagar
    249018, // Jaunpur
    249124, // Bpuram
    249019  // Rudraprayag (part of the district area)
  ];
  // Add all valid pincodes here

function searchMedicine() {
    const searchBar = document.getElementById('searchBar');
    const pincode = searchBar.value;

    if (pincodes.includes(parseInt(pincode))) {
        window.location.href = './stores.html'; // Replace with the desired URL
    } else {
        alert('Invalid pincode. Please enter a valid pincode.');
    }
}
