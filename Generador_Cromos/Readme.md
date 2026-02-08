# 🌿 Eco-Duel: Generador de Cromos Educatius

![Llicència Codi](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)
![Llicència Contingut](https://img.shields.io/badge/Content-CC%20BY--SA%204.0-green.svg)
![Status](https://img.shields.io/badge/Status-Educational-orange)

Una aplicació web interactiva dissenyada per a l'aula, que permet als alumnes crear cromos personalitzats de flora i fauna amb aspecte professional. Aquesta eina fomenta la **gamificació** en l'aprenentatge de les Ciències Naturals.

![Captura de pantalla de l'aplicació](./screenshot_app.png)

## ✨ Funcionalitats Clau

Aquesta versió inclou millores tècniques per garantir una experiència fluida a l'aula:

* **💾 Auto-Guardat (Persistència):** L'aplicació desa automàticament el progrés al navegador. Si l'alumne tanca la pestanya per error, **no perd la feina**; quan torni a obrir l'app, tot estarà com ho va deixar.
* **🗑️ Reinici Ràpid:** Botó de "Paperera" per netejar tot el formulari i començar un cromo nou des de zero.
* **🧠 Taxonomia Intel·ligent:** Els grups (Mamífer, Aràcnid, Arbre, etc.) es seleccionen des d'un desplegable que assigna automàticament la icona correcta (ex: Aràcnid = 🕷️).
* **🏫 Escalabilitat Total:** Adaptable a qualsevol etapa (Primària, ESO, Batxillerat). Els desplegables de "Curs" i "Grup" inclouen una opció **Personalitzada** per escriure text lliure.
* **📸 Exportació d'Alta Qualitat:**
    * **Descarregar:** Genera un fitxer PNG.
    * **Copiar:** Posa la imatge al porta-retalls per fer "Enganxar" (Ctrl+V) directament a Google Slides o Docs.
* **🎨 Disseny Modern:** Estil "Glassmorphism", mode fosc automàtic (Dark Mode) i interfície *responsive*.
* **🌍 Multi-idioma:** Disponible en Català, Castellà i Anglès.

## 🛠️ Tecnologies Utilitzades

Projecte lleuger, sense instal·lacions complexes:

* **HTML5 / CSS3:** Variables CSS per a la gestió de temes i disseny flexible.
* **JavaScript (ES6+):** Lògica del DOM, `localStorage` per a la persistència i gestió d'estats.
* **Llibreries Externes:**
    * [FontAwesome](https://fontawesome.com): Icones vectorials.
    * [Google Fonts (Nunito)](https://fonts.google.com): Tipografia escolar moderna.
    * [html2canvas](https://html2canvas.hertzen.com/): Motor de renderitzat d'imatges.

## 📦 Instal·lació i Ús

No cal instal·lar res! Aquesta aplicació s'executa directament al navegador (Chrome, Firefox, Edge, Safari).

1.  **Descarrega** el codi o clona aquest repositori.
2.  Obre l'arxiu `index.html`.
3.  Comença a crear!

## 📂 Estructura del Projecte

```text
/
├── index.html      # L'estructura i interfície
├── style.css       # El disseny visual i animacions
├── app.js          # La lògica (Auto-save, traduccions, icones)
├── LICENSE.txt     # La llicència completa AGPL v3
└── README.md       # Documentació del projecte
🎓 Objectius Pedagògics
Eina transversal ideal per treballar:

Classificació dels éssers vius: Regne animal i vegetal, famílies i espècies.

Nivells tròfics: Productors, consumidors i descomponedors.

Competència Digital: Creació de contingut digital, respecte per les llicències i ús d'interfícies.

Adaptabilitat: Gràcies als camps personalitzables, es pot fer servir des de 5è de Primària fins a l'ESO.

📄 Llicències i Autoria
Aquest projecte promou el coneixement obert i l'ús ètic de la tecnologia a l'escola.

Autoria: David Cordones (2025).

Codi Font: Sota llicència GNU AGPL v3. Pots modificar-lo i redistribuir-lo, però has de mantenir la mateixa llicència i compartir els canvis. Llegir LICENSE.txt.

Continguts i Disseny: Sota llicència Creative Commons BY-SA 4.0. Pots compartir i adaptar el material citant l'autor i compartint-lo igual.

Creat amb ❤️ per a l'educació.
