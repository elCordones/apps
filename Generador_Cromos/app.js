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
    // 1. Detectar tema fosc del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.setAttribute('data-theme', 'dark');
        const icon = document.querySelector('.theme-btn i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    // 2. Inicialitzem llistes i carta
    populateGroupSelector();
    
    // 3. CARREGUEM DADES DE LA MEMÒRIA (Auto-save)
    loadFromLocal();
    
    // 4. Actualitzem la vista final
    updateCard();
});

/* --- FUNCIONS DE LÒGICA (UI) --- */
function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) el.textContent = translations[lang][key];
    });

    const type = document.getElementById('card-preview').getAttribute('data-type');
    updateDynamicLabels(type);
    populateGroupSelector();
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
    
    // 2. Grup / Subtítol
    const groupSelect = document.getElementById('inp-sub');
    let subText = groupSelect.value;
    
    if (subText === 'custom') {
        subText = document.getElementById('inp-sub-custom').value || "Grup";
    }

    // --- LÒGICA D'ICONES OPTIMITZADA ---
    let icon = "✨ "; 
    const lowerSub = subText.toLowerCase();

    // Diccionari de paraules clau -> Icones
    const iconMap = {
        "mam": "🐾 ", "man": "🐾 ",
        "ocell": "🦅 ", "pajar": "🦅 ", "bird": "🦅 ", "ave": "🦅 ",
        "rèptil": "🦎 ", "reptil": "🦎 ",
        "amfibi": "🐸 ", "anfibi": "🐸 ", "amphibian": "🐸 ",
        "peix": "🐟 ", "fish": "🐟 ", "pez": "🐟 ",
        "insect": "🐞 ", "bug": "🐞 ",
        "aràcnid": "🕷️ ", "arácnido": "🕷️ ", "arachnid": "🕷️ ",
        "mol·lusc": "🐌 ", "molusco": "🐌 ", "mollusk": "🐌 ",
        "arbre": "🌲 ", "tree": "🌲 ", "arbol": "🌲 ",
        "arbust": "🌳 ", "shrub": "🌳 ",
        "flor": "🌻 ", "flower": "🌻 ",
        "fong": "🍄 ", "fung": "🍄 ", "hongo": "🍄 ",
        "alga": "🪸 ",
        "herb": "🌿 ", "grass": "🌿 ", "falguera": "🌿 ", "molsa": "🌿 "
    };

    // Busquem si alguna clau està dins del text
    for (const [key, value] of Object.entries(iconMap)) {
        if (lowerSub.includes(key)) {
            icon = value;
            break; 
        }
    }

    document.getElementById('out-sub').textContent = icon + subText;
    document.getElementById('out-desc').textContent = '"' + document.getElementById('inp-desc').value + '"';
    
    // 3. Peu de Carta
    const selector = document.getElementById('sel-collection');
    let collectionText = selector.value;
    
    if (collectionText === 'custom') {
        collectionText = document.getElementById('inp-collection-custom').value || "Col·lecció";
    }

    let number = document.getElementById('inp-number').value;
    number = number.toString().padStart(2, '0');
    
    document.getElementById('out-footer').textContent = `${collectionText} - #${number}`;

    // 4. Stats
    const sizeVal = document.getElementById('rng-size').value;
    document.getElementById('val-size').textContent = sizeVal;
    document.getElementById('out-size').textContent = sizeVal;

    const speedVal = document.getElementById('rng-speed').value;
    document.getElementById('val-speed').textContent = speedVal;
    document.getElementById('out-speed').textContent = speedVal;

    // 5. Raresa i Nivell
    document.getElementById('out-rarity').textContent = document.getElementById('sel-rarity').value;
    
    const trophicVal = document.getElementById('sel-trophic').value;
    const trophicCircle = document.getElementById('out-trophic');
    trophicCircle.textContent = trophicVal;
    trophicCircle.className = `trophic-circle bg-t-${trophicVal}`;

    // 6. Icones
    document.getElementById('out-icon-1').className = 'fas ' + document.getElementById('icon-1').value;
    document.getElementById('out-icon-2').className = 'fas ' + document.getElementById('icon-2').value;
    document.getElementById('out-icon-3').className = 'fas ' + document.getElementById('icon-3').value;

    // --- GUARDEM DADES (AUTO-SAVE) ---
    saveToLocal();
}

/* --- GESTIÓ DEL SELECTOR DE GRUP --- */
function populateGroupSelector() {
    const type = document.getElementById('card-preview').getAttribute('data-type');
    const select = document.getElementById('inp-sub');
    const t = translations[currentLang];
    
    const previousValue = select.value;
    select.innerHTML = "";

    const list = (type === 'fauna') ? t.groupsFauna : t.groupsFlora;

    list.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        if (item.includes("Altres") || item.includes("Otros") || item.includes("Other")) {
            option.value = 'custom';
        }
        select.appendChild(option);
    });

    let exists = false;
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === previousValue) exists = true;
    }

    if (exists) select.value = previousValue;
    else select.selectedIndex = 0;
    
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

/* --- DESCÀRREGA I CÒPIA --- */
function getCanvasOptions() {
    return {
        scale: 2,
        backgroundColor: null,
        logging: false,
        useCORS: true
    };
}

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

/* --- PERSISTÈNCIA (AUTO-SAVE) I RESET --- */

function saveToLocal() {
    const data = {
        name: document.getElementById('inp-name').value,
        sub: document.getElementById('inp-sub').value,
        subCustom: document.getElementById('inp-sub-custom').value,
        desc: document.getElementById('inp-desc').value,
        size: document.getElementById('rng-size').value,
        speed: document.getElementById('rng-speed').value,
        trophic: document.getElementById('sel-trophic').value,
        rarity: document.getElementById('sel-rarity').value,
        collection: document.getElementById('sel-collection').value,
        collectionCustom: document.getElementById('inp-collection-custom').value,
        number: document.getElementById('inp-number').value,
        icon1: document.getElementById('icon-1').value,
        icon2: document.getElementById('icon-2').value,
        icon3: document.getElementById('icon-3').value,
        // Guardem també el tipus (Fauna/Flora)
        type: document.getElementById('card-preview').getAttribute('data-type')
    };
    localStorage.setItem('ecoDuelData', JSON.stringify(data));
}

function loadFromLocal() {
    const data = JSON.parse(localStorage.getItem('ecoDuelData'));
    if (!data) return;

    // Restaurar Tipus (Important fer-ho primer)
    if (data.type) setType(data.type);

    document.getElementById('inp-name').value = data.name || "Senglar";
    document.getElementById('inp-sub').value = data.sub;
    document.getElementById('inp-sub-custom').value = data.subCustom || "";
    document.getElementById('inp-desc').value = data.desc || "";
    document.getElementById('rng-size').value = data.size || 7;
    document.getElementById('rng-speed').value = data.speed || 5;
    document.getElementById('sel-trophic').value = data.trophic || 3;
    document.getElementById('sel-rarity').value = data.rarity || "⭐";
    document.getElementById('sel-collection').value = data.collection || "5è Primària";
    document.getElementById('inp-collection-custom').value = data.collectionCustom || "";
    document.getElementById('inp-number').value = data.number || 1;
    
    if(data.icon1) document.getElementById('icon-1').value = data.icon1;
    if(data.icon2) document.getElementById('icon-2').value = data.icon2;
    if(data.icon3) document.getElementById('icon-3').value = data.icon3;

    // Actualitzem l'estat dels inputs personalitzats
    toggleCustomGroup();
    toggleCustomCollection();
}

function resetCard() {
    if(!confirm("Segur que vols esborrar tot i començar de nou?")) return;
    localStorage.removeItem('ecoDuelData');
    location.reload();
}
