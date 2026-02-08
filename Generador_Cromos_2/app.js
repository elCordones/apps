/* --- DADES D'IDIOMA --- */
const translations = {
    ca: {
        title: "🛠️ Editor Eco-Duel",
        typeLabel: "Tipus de Cromo:",
        nameLabel: "Nom de l'espècie:",
        groupLabel: "Grup / Família:",
        imageLabel: "Fotografia:",
        sizeLabel: "Mida / Pes (1-10):",
        trophicLabel: "Nivell Tròfic:",
        rarityLabel: "Estat de Conservació (UICN):",
        curiosityLabel: "Dada curiosa:",
        icon1Label: "Dieta / Tipus:",
        icon2Label: "Hàbitat:",
        icon3Label: "Activitat:",
        collectionLabel: "Col·lecció del curs:",
        numberLabel: "Número:",
        instructions: "Fes una captura quan acabis!",
        statSize: "Mida",
        statLevel: "Nivell",
        statSpeed: "Velocitat",
        statDispersion: "Dispersió",
        labelSpeed: "Velocitat",
        labelDispersion: "Dispersió"
    },
    es: {
        title: "🛠️ Editor Eco-Duel",
        typeLabel: "Tipo de Cromo:",
        nameLabel: "Nombre de la especie:",
        groupLabel: "Grupo / Familia:",
        imageLabel: "Fotografía:",
        sizeLabel: "Tamaño / Peso (1-10):",
        trophicLabel: "Nivel Trófico:",
        rarityLabel: "Estado de Conservación (UICN):",
        curiosityLabel: "Dato curioso:",
        icon1Label: "Dieta / Tipo:",
        icon2Label: "Hábitat:",
        icon3Label: "Actividad:",
        collectionLabel: "Colección del curso:",
        numberLabel: "Número:",
        instructions: "¡Haz una captura al terminar!",
        statSize: "Tamaño",
        statLevel: "Nivel",
        statSpeed: "Velocidad",
        statDispersion: "Dispersión",
        labelSpeed: "Velocidad",
        labelDispersion: "Dispersión"
    },
    en: {
        title: "🛠️ Eco-Duel Editor",
        typeLabel: "Card Type:",
        nameLabel: "Species Name:",
        groupLabel: "Group / Family:",
        imageLabel: "Photograph:",
        sizeLabel: "Size / Weight (1-10):",
        trophicLabel: "Trophic Level:",
        rarityLabel: "Conservation Status (IUCN):",
        curiosityLabel: "Fun Fact:",
        icon1Label: "Diet / Type:",
        icon2Label: "Habitat:",
        icon3Label: "Activity:",
        collectionLabel: "Class Collection:",
        numberLabel: "Number:",
        instructions: "Take a screenshot when done!",
        statSize: "Size",
        statLevel: "Level",
        statSpeed: "Speed",
        statDispersion: "Dispersion",
        labelSpeed: "Speed",
        labelDispersion: "Dispersion"
    }
};

let currentLang = 'ca';

/* --- FUNCIONS D'INICIALITZACIÓ --- */
window.addEventListener('DOMContentLoaded', () => {
    // Detectar tema fosc del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.setAttribute('data-theme', 'dark');
        const icon = document.querySelector('.theme-btn i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    updateCard();
});

/* --- FUNCIONS DE LÒGICA (UI) --- */
function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Actualitzar textos estàtics de la UI
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) el.textContent = translations[lang][key];
    });

    // Actualitzar etiquetes dinàmiques (Sliders)
    const type = document.getElementById('card-preview').getAttribute('data-type');
    updateDynamicLabels(type);
}

function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-btn i');

    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

function setType(type) {
    const card = document.getElementById('card-preview');
    const btnFauna = document.getElementById('btn-fauna');
    const btnFlora = document.getElementById('btn-flora');

    card.setAttribute('data-type', type);
    updateDynamicLabels(type);

    if (type === 'fauna') {
        btnFauna.classList.add('active-fauna');
        btnFlora.classList.remove('active-flora');
    } else {
        btnFlora.classList.add('active-flora');
        btnFauna.classList.remove('active-fauna');
    }
    updateCard();
}

function updateDynamicLabels(type) {
    const t = translations[currentLang];
    const lblSpeed = document.getElementById('lbl-speed');
    const lblOutSpeed = document.getElementById('lbl-out-speed');

    if (type === 'fauna') {
        lblSpeed.textContent = t.labelSpeed;
        lblOutSpeed.textContent = t.statSpeed;
    } else {
        lblSpeed.textContent = t.labelDispersion;
        lblOutSpeed.textContent = t.statDispersion;
    }
}

/* --- FUNCIÓ PRINCIPAL D'ACTUALITZACIÓ --- */
function updateCard() {
    // 1. Textos Bàsics
    document.getElementById('out-name').textContent = document.getElementById('inp-name').value;
    const subText = document.getElementById('inp-sub').value;
    
    // Icona automàtica simple al subtítol
    let icon = "";
    const lowerSub = subText.toLowerCase();
    if(lowerSub.includes("mam") || lowerSub.includes("man")) icon = "🐾 ";
    else if(lowerSub.includes("ocell") || lowerSub.includes("pajar") || lowerSub.includes("bird")) icon = "🦅 ";
    else if(lowerSub.includes("arbre") || lowerSub.includes("tree") || lowerSub.includes("arbol")) icon = "🌲 ";
    else if(lowerSub.includes("herb") || lowerSub.includes("grass")) icon = "🌿 ";
    else if(lowerSub.includes("insect") || lowerSub.includes("bug")) icon = "🐞 ";
    else if(lowerSub.includes("peix") || lowerSub.includes("fish")) icon = "🐟 ";
    
    document.getElementById('out-sub').textContent = icon + subText;
    document.getElementById('out-desc').textContent = '"' + document.getElementById('inp-desc').value + '"';
    
    // 2. Peu de Carta (Col·lecció i Número)
    const collection = document.getElementById('sel-collection').value;
    let number = document.getElementById('inp-number').value;
    // Format "01"
    number = number.toString().padStart(2, '0');
    document.getElementById('out-footer').textContent = `${collection} - #${number}`;

    // 3. Sliders (Stats)
    const sizeVal = document.getElementById('rng-size').value;
    document.getElementById('val-size').textContent = sizeVal;
    document.getElementById('out-size').textContent = sizeVal;

    const speedVal = document.getElementById('rng-speed').value;
    document.getElementById('val-speed').textContent = speedVal;
    document.getElementById('out-speed').textContent = speedVal;

    // 4. Selectors (Raresa i Nivell)
    document.getElementById('out-rarity').textContent = document.getElementById('sel-rarity').value;
    
    const trophicVal = document.getElementById('sel-trophic').value;
    const trophicCircle = document.getElementById('out-trophic');
    trophicCircle.textContent = trophicVal;
    // Resetegem classes i afegim la nova
    trophicCircle.className = `trophic-circle bg-t-${trophicVal}`;

    // 5. Icones FontAwesome
    document.getElementById('out-icon-1').className = 'fas ' + document.getElementById('icon-1').value;
    document.getElementById('out-icon-2').className = 'fas ' + document.getElementById('icon-2').value;
    document.getElementById('out-icon-3').className = 'fas ' + document.getElementById('icon-3').value;
}

/* --- CÀRREGA D'IMATGES --- */
function loadImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgContainer = document.getElementById('img-container');
            imgContainer.style.backgroundImage = `url(${e.target.result})`;
            // Amaguem la icona de la càmera
            document.getElementById('img-placeholder').style.display = 'none';
        }
        reader.readAsDataURL(file);
    }
}
