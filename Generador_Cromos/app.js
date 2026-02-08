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
        rarityLabel: "Estat de Conservació:",
        curiosityLabel: "Dada curiosa:",
        icon1Label: "Dieta / Tipus:",
        icon2Label: "Hàbitat:",
        icon3Label: "Activitat:",
        collectionLabel: "Col·lecció del curs:",
        numberLabel: "Número:",
        statSize: "Mida",
        statLevel: "Nivell",
        statSpeed: "Velocitat",
        statDispersion: "Dispersió",
        labelSpeed: "Velocitat",
        labelDispersion: "Dispersió",
        btnDownload: "Descarregar PNG",
        btnCopy: "Copiar Imatge",
        copySuccess: "✅ Cromo copiat! Ara fes Ctrl+V on vulguis.",
        copyError: "❌ No s'ha pogut copiar automàticament. Fes servir 'Descarregar'.",
        // Llistes de Grups
        groupsFauna: ["Mamífer", "Ocell", "Rèptil", "Amfibi", "Peix", "Insecte", "Aràcnid", "Mol·lusc", "Altres..."],
        groupsFlora: ["Arbre", "Arbust", "Herba", "Flor", "Falguera", "Molsa", "Fong", "Alga", "Altres..."],
        customGroupPlaceholder: "Escriu el grup..."
    },
    es: {
        title: "🛠️ Editor Eco-Duel",
        typeLabel: "Tipo de Cromo:",
        nameLabel: "Nombre de la especie:",
        groupLabel: "Grupo / Familia:",
        imageLabel: "Fotografía:",
        sizeLabel: "Tamaño / Peso (1-10):",
        trophicLabel: "Nivel Trófico:",
        rarityLabel: "Estado de Conservación:",
        curiosityLabel: "Dato curioso:",
        icon1Label: "Dieta / Tipo:",
        icon2Label: "Hábitat:",
        icon3Label: "Actividad:",
        collectionLabel: "Colección del curso:",
        numberLabel: "Número:",
        statSize: "Tamaño",
        statLevel: "Nivel",
        statSpeed: "Velocidad",
        statDispersion: "Dispersión",
        labelSpeed: "Velocidad",
        labelDispersion: "Dispersión",
        btnDownload: "Descargar PNG",
        btnCopy: "Copiar Imagen",
        copySuccess: "✅ ¡Cromo copiado! Haz Ctrl+V donde quieras.",
        copyError: "❌ No se pudo copiar. Usa 'Descargar'.",
        // Listas de Grupos
        groupsFauna: ["Mamífero", "Ave", "Reptil", "Anfibio", "Pez", "Insecto", "Arácnido", "Molusco", "Otros..."],
        groupsFlora: ["Árbol", "Arbusto", "Hierba", "Flor", "Helecho", "Musgo", "Hongo", "Alga", "Otros..."],
        customGroupPlaceholder: "Escribe el grupo..."
    },
    en: {
        title: "🛠️ Eco-Duel Editor",
        typeLabel: "Card Type:",
        nameLabel: "Species Name:",
        groupLabel: "Group / Family:",
        imageLabel: "Photograph:",
        sizeLabel: "Size / Weight (1-10):",
        trophicLabel: "Trophic Level:",
        rarityLabel: "Conservation Status:",
        curiosityLabel: "Fun Fact:",
        icon1Label: "Diet / Type:",
        icon2Label: "Habitat:",
        icon3Label: "Activity:",
        collectionLabel: "Class Collection:",
        numberLabel: "Number:",
        statSize: "Size",
        statLevel: "Level",
        statSpeed: "Speed",
        statDispersion: "Dispersion",
        labelSpeed: "Speed",
        labelDispersion: "Dispersion",
        btnDownload: "Download PNG",
        btnCopy: "Copy Image",
        copySuccess: "✅ Card copied! Press Ctrl+V to paste.",
        copyError: "❌ Copy failed. Please use 'Download'.",
        // Group Lists
        groupsFauna: ["Mammal", "Bird", "Reptile", "Amphibian", "Fish", "Insect", "Arachnid", "Mollusk", "Other..."],
        groupsFlora: ["Tree", "Shrub", "Herb", "Flower", "Fern", "Moss", "Fungus", "Algae", "Other..."],
        customGroupPlaceholder: "Type the group..."
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
    
    // Inicialitzem llistes i carta
    populateGroupSelector();
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

    // Actualitzar etiquetes dinàmiques (Sliders i Grups)
    const type = document.getElementById('card-preview').getAttribute('data-type');
    updateDynamicLabels(type);
    populateGroupSelector(); // Retraduir la llista de grups
    updateCard();
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
    
    // Actualitzem llistes de grups
    populateGroupSelector();
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
    
    // 2. Grup / Subtítol (Nou desplegable)
    const groupSelect = document.getElementById('inp-sub');
    let subText = groupSelect.value;
    
    // Si és "custom", agafem l'input manual
    if (subText === 'custom') {
        subText = document.getElementById('inp-sub-custom').value || "Grup";
    }

    // Icona automàtica basada en el text
    let icon = "";
    const lowerSub = subText.toLowerCase();
    if(lowerSub.includes("mam") || lowerSub.includes("man")) icon = "🐾 ";
    else if(lowerSub.includes("ocell") || lowerSub.includes("pajar") || lowerSub.includes("bird") || lowerSub.includes("ave")) icon = "🦅 ";
    else if(lowerSub.includes("arbre") || lowerSub.includes("tree") || lowerSub.includes("arbol")) icon = "🌲 ";
    else if(lowerSub.includes("herb") || lowerSub.includes("grass")) icon = "🌿 ";
    else if(lowerSub.includes("insect") || lowerSub.includes("bug")) icon = "🐞 ";
    else if(lowerSub.includes("peix") || lowerSub.includes("fish")) icon = "🐟 ";
    else if(lowerSub.includes("rèptil") || lowerSub.includes("reptil")) icon = "🦎 ";
    else if(lowerSub.includes("amfibi") || lowerSub.includes("anfibi")) icon = "🐸 ";
    
    document.getElementById('out-sub').textContent = icon + subText;
    document.getElementById('out-desc').textContent = '"' + document.getElementById('inp-desc').value + '"';
    
    // 3. Peu de Carta (Col·lecció i Número)
    const selector = document.getElementById('sel-collection');
    let collectionText = selector.value;
    
    if (collectionText === 'custom') {
        collectionText = document.getElementById('inp-collection-custom').value || "Col·lecció";
    }

    let number = document.getElementById('inp-number').value;
    number = number.toString().padStart(2, '0');
    
    document.getElementById('out-footer').textContent = `${collectionText} - #${number}`;

    // 4. Sliders (Stats)
    const sizeVal = document.getElementById('rng-size').value;
    document.getElementById('val-size').textContent = sizeVal;
    document.getElementById('out-size').textContent = sizeVal;

    const speedVal = document.getElementById('rng-speed').value;
    document.getElementById('val-speed').textContent = speedVal;
    document.getElementById('out-speed').textContent = speedVal;

    // 5. Selectors (Raresa i Nivell)
    document.getElementById('out-rarity').textContent = document.getElementById('sel-rarity').value;
    
    const trophicVal = document.getElementById('sel-trophic').value;
    const trophicCircle = document.getElementById('out-trophic');
    trophicCircle.textContent = trophicVal;
    trophicCircle.className = `trophic-circle bg-t-${trophicVal}`;

    // 6. Icones FontAwesome
    document.getElementById('out-icon-1').className = 'fas ' + document.getElementById('icon-1').value;
    document.getElementById('out-icon-2').className = 'fas ' + document.getElementById('icon-2').value;
    document.getElementById('out-icon-3').className = 'fas ' + document.getElementById('icon-3').value;
}

/* --- GESTIÓ DEL SELECTOR DE GRUP (TAXONOMIA) --- */
function populateGroupSelector() {
    const type = document.getElementById('card-preview').getAttribute('data-type');
    const select = document.getElementById('inp-sub');
    const t = translations[currentLang];
    
    // Guardem el valor actual per intentar mantenir-lo
    const previousValue = select.value;
    
    select.innerHTML = ""; // Netejem

    // Triem la llista correcta
    const list = (type === 'fauna') ? t.groupsFauna : t.groupsFlora;

    // Creem les opcions
    list.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        
        // Si és "Altres...", li posem un valor especial 'custom'
        if (item.includes("Altres") || item.includes("Otros") || item.includes("Other")) {
            option.value = 'custom';
        }
        
        select.appendChild(option);
    });

    // Restaurem selecció o posem la primera per defecte
    // Nota: 'previousValue' pot no existir en la nova llista si hem canviat de Fauna a Flora
    // Així que verifiquem si existeix a la llista textual o si era 'custom'
    let exists = false;
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === previousValue) exists = true;
    }

    if (exists) {
        select.value = previousValue;
    } else {
        select.selectedIndex = 0;
    }
    
    toggleCustomGroup();
}

/* --- GESTIÓ D'INPUTS PERSONALITZATS --- */

function toggleCustomGroup() {
    const select = document.getElementById('inp-sub');
    const customInput = document.getElementById('inp-sub-custom');
    
    if (select.value === 'custom') {
        customInput.style.display = 'block';
        customInput.placeholder = translations[currentLang].customGroupPlaceholder || "...";
    } else {
        customInput.style.display = 'none';
    }
    updateCard();
}

function toggleCustomCollection() {
    const selector = document.getElementById('sel-collection');
    const customInput = document.getElementById('inp-collection-custom');
    
    if (selector.value === 'custom') {
        customInput.style.display = 'block';
        customInput.focus();
    } else {
        customInput.style.display = 'none';
    }
    updateCard();
}

/* --- CÀRREGA D'IMATGES --- */
function loadImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgContainer = document.getElementById('img-container');
            imgContainer.style.backgroundImage = `url(${e.target.result})`;
            document.getElementById('img-placeholder').style.display = 'none';
        }
        reader.readAsDataURL(file);
    }
}

/* --- FUNCIONS DE DESCÀRREGA I CÒPIA (html2canvas) --- */
function getCanvasOptions() {
    return {
        scale: 2, // Millor resolució
        backgroundColor: null,
        logging: false,
        useCORS: true
    };
}

// 1. DESCARREGAR IMATGE
function downloadCard() {
    const cardElement = document.getElementById('card-preview');
    const name = document.getElementById('inp-name').value || 'cromo';
    
    document.body.style.cursor = 'wait';

    html2canvas(cardElement, getCanvasOptions()).then(canvas => {
        const link = document.createElement('a');
        link.download = `EcoDuel_${name.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        document.body.style.cursor = 'default';
    });
}

// 2. COPIAR AL PORTA-RETALLS
function copyCard() {
    const cardElement = document.getElementById('card-preview');
    const t = translations[currentLang];

    document.body.style.cursor = 'wait';

    html2canvas(cardElement, getCanvasOptions()).then(canvas => {
        canvas.toBlob(blob => {
            try {
                const item = new ClipboardItem({ 'image/png': blob });
                navigator.clipboard.write([item]).then(() => {
                    alert(t.copySuccess);
                });
            } catch (err) {
                console.error(err);
                alert(t.copyError);
            } finally {
                document.body.style.cursor = 'default';
            }
        });
    });
}
