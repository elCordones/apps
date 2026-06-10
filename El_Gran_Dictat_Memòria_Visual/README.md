# 📝 **El Gran Dictat - Mètode Gabarró**

[![Llicència del Codi](https://img.shields.io/badge/Llic%C3%A8ncia_Codi-GNU_AGPL_v3-blue.svg)](LICENSE.txt)
[![Llicència del Contingut](https://img.shields.io/badge/Contingut-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![GitHub Pages](https://img.shields.io/badge/Allotjat_a-GitHub_Pages-orange.svg)](#-desplegament-a-github-pages)

**El Gran Dictat** és una aplicació web interactiva i gamificada dissenyada per a l'aula, ideal per a ser projectada en una Pissarra Digital Interactiva (PDI). Està directament inspirada en el conegut concurs de televisió i adaptada per treballar amb les llistes de paraules del **Mètode Gabarró** (millora de l'ortografia mitjançant la memòria visual).

El joc divideix la classe en dos equips que competeixen al llarg de tres fases de dificultat creixent, per acabar en un repàs formatiu de les paraules fallades.

---

## 🌟 **Característiques i Millores**

El projecte conté dues versions adaptables a les necessitats de l'aula:

### 1️⃣ **Versió Original (`el_gran_dictat_original.html`)**
La versió clàssica de l'aplicació amb el banc fix de 116 paraules del mètode Gabarró integrat directament en el codi.

### 2️⃣ **Versió Personalitzable (`el_gran_dictat_custom.html`)**
Una versió expandida amb criteris tecnopedagògics que afegeix grans millores de control, personalització i avaluació per al docent:
*   📈 **Dificultat Escalonada per Fases:**
    *   **Fase 1 (La Pluja de Lletres):** Es juguen exclusivament les paraules **fàcils**.
    *   **Fase 2 (El Rebot):** Es juguen exclusivament les paraules **mitjanes**.
    *   **Fase 3 (La Gran Final):** Es juguen les paraules **difícils** a la pissarra.
*   📥 **Importació i Exportació de Paraules (CSV/Excel):**
    *   Permet pujar un llistat propi mitjançant un fitxer CSV de fins a 4 columnes (`facil`, `mitja`, `dificil`, `auto`).
    *   Si s'utilitza la columna `auto`, l'aplicació calcula automàticament la dificultat lingüística (segons la longitud, accents, dièresis, geminades `l·l`, ce trencada `ç` o la presència de la `h` muda).
    *   Opció de descarregar una plantilla de mostra en CSV o exportar el llistat actiu.
*   ✍️ **Editor Visual integrat:** Permet cercar, afegir manualment i esborrar paraules una a una, indicant visualment la seva dificultat i origen mitjançant insígnies de colors.
*   🔊 **Dictat per Síntesi de Veu (Text-to-Speech):** 
    *   Permet triar la veu de síntesi catalana preferida i realitzar una prova d'entonació.
    *   Control lliscant de velocitat de lectura (per defecte a `0.85x` per fer un dictat clar i pausat).
    *   *Nota:* En sistemes com Windows/Chrome, es recomana obrir l'aplicació en línia o en un servidor per aprofitar la veu d'alta qualitat **Google català**.
*   🎵 **Efectes de so sintètics (Web Audio API):** Feedback sonor (encert, error, rebot, temps esgotat i celebració) generat a temps real pel navegador, evitant dependències de fitxers externs.
*   📊 **Avaluació i Repàs d'Errors:** Guarda els errors comesos per repassar-los en una darrera fase de memòria visual. Permet exportar els errors directament a un CSV per fer fitxes de reforç personalitzades.
*   🛠️ **Barra de Control del Docent:** Un menú de dreceres discret a la base de la pantalla que permet al professorat reiniciar la partida o moure's directament de forma instantània entre qualsevol fase de la sessió.

---

## 🛠️ **Com està fet? (Tecnologies)**

L'aplicació utilitza una arquitectura de **fitxer únic (Single-File App)** de tipus "Zero Configuració", de manera que no requereix servidors, bases de dades ni processos de compilació previs. Només obrint el fitxer `.html` en un navegador, funciona.

*   **Front-end:** [React 18](https://react.dev/) i [ReactDOM](https://reactjs.org/) carregats mitjançant CDN.
*   **Compilador JSX:** [Babel Standalone](https://babeljs.io/) per transpilació en temps d'execució directa al navegador.
*   **Estils:** [Tailwind CSS v3](https://tailwindcss.com/) per a un disseny responsive, modern i amb transicions fluides.
*   **Àudio:** [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) per als sons sintètics del joc.
*   **Veu:** [Web Speech API (SpeechSynthesis)](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) per al dictat de paraules en català.

---

## 📂 **Estructura del Projecte**

El repositori es compon dels següents fitxers principals:

*   `el_gran_dictat_custom.html`: Fitxer principal del joc millorat amb totes les característiques tecnopedagògiques, editor, control de temps, barres de navegació i TTS.
*   `el_gran_dictat_original.html`: Versió estàndard del joc amb el vocabulari clàssic per defecte.
*   `iniciar_joc.bat`: Script d'inici ràpid per a entorns locals Windows que aixeca un servidor web provisional (`http://localhost:8080`) per saltar-se les restriccions del protocol `file://` i forçar la càrrega de les veus en línia de Google a Chrome.
*   `Documentació del projecte.md`: Guia d'ús pedagògic a l'aula.
*   `README.md`: Aquest fitxer de presentació i instruccions del repositori.

---

## 📜 **Llicències i Autoria**

**© 2026 David Cordones**

Aquest projecte es distribueix sota una llicència doble per protegir tant el codi informàtic com el valor educatiu:

*   💻 **Codi font:** Distribuït sota la llicència [GNU AGPL v3](LICENSE.txt). Ets lliure d'utilitzar, modificar i redistribuir l'aplicació sempre que es mantinguin els crèdits, s'indiquin els canvis i qualsevol obra derivada es distribueixi sota la mateixa llicència de codi obert.
*   📖 **Contingut i Dinàmica de Joc:** Distribuït sota la llicència [Creative Commons Attribution-ShareAlike 4.0 Internacional (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/). Això inclou les llistes de paraules basades en el mètode de memòria visual de Gabarró i l'estructura instruccional del concurs.
