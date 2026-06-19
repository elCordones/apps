# 🧠 Qui Sabe Què? 2.0 — Edició Jeopardy per a l'Aula

Una aplicació web interactiva de tipus **Jeopardy** dissenyada específicament per a docents i dinamització de grups a l'aula en català. Aquesta eina utilitza la intel·ligència artificial de **Google Gemini** per generar taulers de preguntes a mida basats en fins a 5 temes o unitats didàctiques en qüestió de segons, a més d'oferir un mode de cultura general estàndard de manera instantània offline.

---

## ✨ Característiques Principals

### 🎓 Disseny Tecno-Pedagògic Avançat
*   **Avaluació Formativa:** Cada pregunta inclou una **explicació didàctica** que es revela després de respondre per tal de consolidar els continguts estudiats.
*   **Interfície Dinàmica:** Sistema visual adaptat per a projectors i pantalles digitals d'aula amb suport per a **Pantalla Completa Nativa i Virtual**.
*   **Podium 3D i Confetti:** Al final de la partida es genera una cerimònia de podi animat amb efecte de confetti en un llenç (`canvas`) per motivar la participació de l'alumnat.
*   **Marcador en temps real:** Suporta fins a 5 equips amb edició de puntuació manual i marcador interactiu d'assignació/resta de punts.

### 🕹️ Gamificació i Regles Estratègiques
*   **Comodins d'Equip:** Cada equip disposa d'un comodí de **Duplicador (x2)** i un **Escut Protector** (per evitar la penalització de punts).
*   **Preguntes Especials (Daily Double):** Dues caselles secretes del tauler que dupliquen automàticament el seu valor si són escollides.
*   **Efectes de So Integrats:** Sintetitzador d'àudio autònom (sense dependències externes mitjançant la `Web Audio API` del navegador) per a encerts, errors, temporitzador, suspens de Daily Double i aplaudiments finals.
*   **Penalitzacions Configurables:** Mode clàssic de rebot (resta el 50% del valor) o penalització total.

### 🤖 Generació Intel·ligent amb Gemini IA
*   **D'1 a 5 Temes Personalitzats:** El docent pot introduir múltiples temes o conceptes. La IA s'encarrega de distribuir i equilibrar les 5 categories del tauler de manera proporcional entre els temes donats.
*   **Adaptació al Curs Acadèmic:** Personalització del to i nivell del llenguatge (de Primària fins a Batxillerat/Cicles).
*   **Format d'Esquema JSON:** L'API es comunica utilitzant esquemes estructurats estrictes per evitar talls de text o formats inacceptables.

---

## 🛠️ Com Funciona Localment (Sense Servidor)

El joc s'ha dissenyat com a **Single Page Application (SPA)** autònoma. Això vol dir que només necessites el fitxer HTML i el seu favicon per jugar.

1.  Descarrega o clona el fitxer [qui_sabe_qu_jeopardy.html](qui_sabe_qu_jeopardy.html) i el seu [favicon.svg](favicon.svg) (col·locats a la mateixa carpeta).
2.  Fes doble clic sobre el fitxer HTML per obrir-lo en qualsevol navegador web modern (Chrome, Firefox, Safari, Edge).
3.  **Així de fàcil!** No requereix cap instal·lació de Node.js, Python ni bases de dades externes.

---

## 🚀 Com Pujar el Joc a GitHub (GitHub Pages)

Si vols que estigui disponible a Internet perquè altres docents o tu mateix pugueu accedir-hi des de qualsevol dispositiu sense descarregar el fitxer, pots allotjar-lo de manera **gratuïta** a **GitHub Pages**:

1.  **Crea un compte a GitHub** (si no en tens cap a [github.com](https://github.com)).
2.  **Crea un nou repositori** públic (per exemple, anomenat `qui-sap-que`).
3.  Puja-hi els fitxers `qui_sabe_qu_jeopardy.html` i `favicon.svg` a la mateixa carpeta. **Important:** Canvia el nom del fitxer HTML a `index.html` perquè GitHub Pages el reconegui com a pàgina d'inici per defecte.
4.  Vés a la pestanya **Settings** (Configuració) del teu repositori a GitHub.
5.  Al menú de l'esquerra, fes clic a **Pages**.
6.  A la secció *Build and deployment*, sota **Source**, selecciona `Deploy from a branch`.
7.  A sota, tria la branca `main` (o `master`) i la carpeta `/ (root)`, i fes clic a **Save**.
8.  Espera un minut. GitHub et proporcionarà un enllaç públic semblant a aquest:
    `https://el-teu-usuari.github.io/qui-sap-que/`

> [!IMPORTANT]
> **Seguretat de la Clau API:** Pots compartir aquest enllaç amb tota seguretat. La Clau API de Gemini **no es desa al codi font** del repositori, sinó que s'emmagatzema localment al propi navegador del docent que fa servir l'aplicació (`localStorage`), de manera que és completament privada i segura.

---

## 🔑 Com aconseguir la Clau API de Gemini de franc

Per utilitzar la generació de taulers temàtics amb IA, has d'introduir una clau API a la finestra de configuració (icona de l'engranatge ⚙️):

1.  Entra a [Google AI Studio](https://aistudio.google.com/).
2.  Inicia sessió amb el teu compte personal de Google (Gmail).
3.  Prem el botó blau **"Get API key"** a la barra lateral esquerra.
4.  Fes clic a **"Create API key"** i selecciona un projecte de Google Cloud o crea'n un de nou.
5.  Copia el codi generat (un text llarg que comença per `AIzaSy`).
6.  Obre la **Configuració** al joc, enganxa el codi al camp **Clau API de Gemini** i desa. Aquesta clau es desarà al teu navegador per a futures sessions.

---

## 🎨 Personalització

Pots modificar el fitxer al teu gust! El codi fa servir:
*   [Tailwind CSS](https://tailwindcss.com) per a una estètica moderna amb suport de Mode Fosc/Clar automàtic.
*   [FontAwesome](https://fontawesome.com) per a un disseny ple d'icones atractives i intuïtives per a l'alumnat.
*   [Canvas Confetti](qui_sabe_qu_jeopardy.html) integrat de forma nativa per a una experiència lúdica sense carregar paquets pesants.

---

## 📄 Llicència

Aquest projecte està subjecte a dues llicències segons el tipus de recurs:

*   **Llicència del Codi:** El codi font d'aquesta aplicació està publicat sota la llicència **GNU Affero General Public License v3 (AGPL v3)**. Pots veure el text complet al fitxer [LICENSE.txt](LICENSE.txt).
*   **Llicència dels Continguts:** Tots els continguts educatius integrats o generats es distribueixen sota la llicència **Creative Commons Reconeixement-CompartirIgual 4.0 Internacional (CC BY-SA 4.0)**. Pots consultar els termes al [lloc oficial de Creative Commons](https://creativecommons.org/licenses/by-sa/4.0/).

**Dades per a l'atribució:**
*   **Títol:** Qui Sabe Què? 2.0 - Edició Jeopardy
*   **Autoria:** David Cordones
*   **Any:** 2026

---

*Creat amb 💜 per a docents que busquen transformar l'avaluació en una experiència engrescadora.*
