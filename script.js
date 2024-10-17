const medicineNames = [
    "Aspirin", "Paracetamol", "Ibuprofen", "Amoxicillin", "Ciprofloxacin", "Metformin", "Lisinopril", "Amlodipine", "Metoprolol", "Atorvastatin",
    "Simvastatin", "Levothyroxine", "Omeprazole", "Pantoprazole", "Furosemide", "Hydrochlorothiazide", "Losartan", "Clopidogrel", "Azithromycin", 
    "Doxycycline", "Cephalexin", "Tamsulosin", "Prednisone", "Montelukast", "Cetirizine", "Albuterol", "Fluticasone", "Loratadine", "Clarithromycin", 
    "Sulfasalazine", "Naproxen", "Gabapentin", "Tramadol", "Codeine", "Morphine", "Diazepam", "Clonazepam", "Sertraline", "Citalopram", 
    "Fluoxetine", "Escitalopram", "Venlafaxine", "Duloxetine", "Bupropion", "Amitriptyline", "Nortriptyline", "Mirtazapine", "Trazodone", 
    "Zolpidem", "Eszopiclone", "Quetiapine", "Olanzapine", "Risperidone", "Aripiprazole", "Lamotrigine", "Carbamazepine", "Topiramate", 
    "Valproic Acid", "Levetiracetam", "Oxcarbazepine", "Phenytoin", "Gabitril", "Phenobarbital", "Warfarin", "Apixaban", "Rivaroxaban", 
    "Dabigatran", "Enoxaparin", "Heparin", "Ticagrelor", "Atenolol", "Propranolol", "Bisoprolol", "Nebivolol", "Carvedilol", "Diltiazem", 
    "Verapamil", "Digoxin", "Spironolactone", "Eplerenone", "Hydralazine", "Isosorbide Mononitrate", "Nitroglycerin", "Ivabradine", 
    "Sacubitril", "Valsartan", "Ezetimibe", "Rosuvastatin", "Pravastatin", "Lovastatin", "Gemfibrozil", "Fenofibrate", "Colesevelam", 
    "Niacin", "Omega-3 Fatty Acids", "Erythromycin", "Levofloxacin", "Moxifloxacin", "Vancomycin", "Clindamycin", "Linezolid", "Amphotericin B", 
    "Fluconazole", "Itraconazole", "Voriconazole", "Posaconazole", "Nystatin", "Griseofulvin", "Acyclovir", "Valacyclovir", "Famciclovir", 
    "Oseltamivir", "Zanamivir", "Ribavirin", "Sofosbuvir", "Ledipasvir", "Velpatasvir", "Daclatasvir", "Tenofovir", "Emtricitabine", 
    "Efavirenz", "Dolutegravir", "Raltegravir", "Elvitegravir", "Bictegravir", "Maraviroc", "Enfuvirtide", "Methotrexate", "Hydroxychloroquine", 
    "Azathioprine", "Leflunomide", "Sulindac", "Meloxicam", "Celecoxib", "Etanercept", "Infliximab", "Adalimumab", "Golimumab", "Certolizumab", 
    "Abatacept", "Rituximab", "Tocilizumab", "Baricitinib", "Tofacitinib", "Anakinra", "Sarilumab", "Anastrozole", "Letrozole", "Exemestane", 
    "Tamoxifen", "Raloxifene", "Fulvestrant", "Trastuzumab", "Pertuzumab", "Bevacizumab", "Rituxan", "Cetuximab", "Pembrolizumab", 
    "Nivolumab", "Ipilimumab", "Cyclophosphamide", "Doxorubicin", "Cisplatin", "Carboplatin", "Oxaliplatin", "Paclitaxel", "Docetaxel", 
    "Vincristine", "Vinblastine", "Bleomycin", "Mitomycin", "Tamoxifen", "Prednisolone", "Dexamethasone", "Methylprednisolone", "Hydrocortisone", 
    "Betamethasone", "Triamcinolone", "Testosterone", "Estradiol", "Medroxyprogesterone", "Progesterone", "Levothyroxine", "Liothyronine", 
    "Propylthiouracil", "Methimazole", "Desmopressin", "Vasopressin", "Somatropin", "Octreotide", "Bromocriptine", "Cabergoline", "Leuprorelin", 
    "Goserelin", "Nafarelin", "Orlistat", "Phentermine", "Liraglutide", "Semaglutide", "Insulin", "Glipizide", "Glyburide", "Glimepiride", 
    "Pioglitazone", "Rosiglitazone", "Sitagliptin", "Saxagliptin", "Linagliptin", "Exenatide", "Liraglutide", "Dulaglutide", "Pramlintide", 
    "Empagliflozin", "Canagliflozin", "Dapagliflozin", "Ertugliflozin", "Sevelamer", "Calcium Acetate", "Sodium Bicarbonate", "Potassium Chloride", 
    "Magnesium Oxide", "Ferrous Sulfate", "Folic Acid", "Cyanocobalamin", "Cholecalciferol", "Ergocalciferol", "Thiamine", "Riboflavin", 
    "Niacinamide", "Pantothenic Acid", "Pyridoxine", "Biotin", "Ascorbic Acid", "Retinol", "Alpha Tocopherol", "Phytomenadione", "Clonidine", 
    "Methyldopa", "Guanfacine", "Prazosin", "Doxazosin", "Terazosin", "Minoxidil", "Hydrochlorothiazide", "Chlorthalidone", "Indapamide", 
    "Acetazolamide", "Dorzolamide", "Brinzolamide", "Bimatoprost", "Latanoprost", "Travoprost", "Pilocarpine", "Timolol", "Betaxolol", 
    "Levobunolol", "Brimonidine", "Apraclonidine", "Acetylcysteine", "Allopurinol", "Febuxostat", "Probenecid", "Pegloticase", "Colchicine", 
    "Sumatriptan", "Zolmitriptan", "Rizatriptan", "Frovatriptan", "Eletriptan", "Topiramate", "Propranolol", "Nadolol", "Verapamil", 
    "Flunarizine", "Buspirone", "Pregabalin", "Propranolol", "Primidone", "Phenelzine", "Tranylcypromine", "Selegiline", "Rasagiline", 
    "Entacapone", "Tolcapone", "Amantadine", "Pramipexole", "Ropinirole", "Rotigotine", "Benztropine", "Trihexyphenidyl", "Carbidopa", 
    "Levodopa", "Lacosamide", "Vigabatrin", "Perampanel", "Zonisamide", "Rufinamide", "Felbamate", "Stiripentol", "Vortioxetine", 
    "Vilazodone", "Levomilnacipran", "Desvenlafaxine", "Milnacipran", "Agomelatine", "Fluvoxamine"
];


function showForm() {
    document.querySelector('.donate-btn').style.display = 'none';
    document.getElementById('donationForm').style.display = 'block';
}

function showMedicineDetails() {
    document.getElementById('personalDetails').style.display = 'none';
    document.getElementById('medicineDetails').style.display = 'block';
}

function submitForm() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const medicineName = document.getElementById('medicineName').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const purchaseDate = document.getElementById('purchaseDate').value;
    const price = document.getElementById('price').value;

    // Validate inputs
    if (!name || !mobile || !address || !pincode || !medicineName || !expiryDate || !purchaseDate || !price) {
        alert("Please fill out all fields.");
        return;
    }

    // Prepare email body with user input data (images cannot be attached via mailto)
    const emailBody = `Name: ${name}\nMobile: ${mobile}\nAddress: ${address}\nPincode: ${pincode}\nMedicine Name: ${medicineName}\nExpiry Date: ${expiryDate}\nPurchase Date: ${purchaseDate}\nPrice: ${price}\n\nNOTE: Please attach the medicine and bill images manually when sending this email.`;

    // Create mailto link with prefilled data
    const mailtoLink = `mailto:pranjalmaithani81822@gmail.com?subject=Medicine Donation&body=${encodeURIComponent(emailBody)}`;

    // Redirect to the mail client
    window.location.href = mailtoLink;

    // Show thank you message after form submission
    document.getElementById('donationForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
}

function goHome() {
    window.location.href = './frontend.html';  // Replace with the URL of the new website
}

// Populate medicine names into the select element
window.onload = () => {
    const medicineSelect = document.getElementById('medicineName');
    medicineNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        medicineSelect.appendChild(option);
    });
};
