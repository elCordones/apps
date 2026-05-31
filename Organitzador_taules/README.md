# 🏫 Organitzador de Taules de Classe Pro

Una aplicació web **100% local, privada i dissenyada per a dispositius mòbils (PWA)** que ajuda els docents a organitzar els grups i taules dels alumnes a l'aula de forma ràpida i optimitzada.

L'algorisme genera distribucions automàtiques respectant els vetos d'incompatibilitat entre alumnes, barrejant gèneres i evitant repetir parelles de sessions anteriors.

---

## ✨ Característiques Principals

* 🔒 **Privacitat Absoluta (100% Local):** No requereix cap backend. Totes les dades dels alumnes i l'historial de sessions es guarden exclusivament al teu dispositiu (`localStorage` del navegador). Cap dada es comparteix amb tercers ni es puja a cap servidor.
* 📱 **Optimitzat per a iPhone / Mòbil (PWA):**
  * Interfície tàctil estil iOS adaptada a Light i Dark Mode.
  * Suport offline gràcies al Service Worker. Pots utilitzar-la al teu iPhone en mode avió o sense cobertura una vegada s'ha instal·lat.
* ⚙️ **Algorisme d'Optimització Intel·ligent (Hill Climbing):**
  * Respecta incompatibilitats (alumnes que no poden anar junts).
  * Distribueix equilibradament nois i noies (Taules Mixtes).
  * Evita repetir combinacions de companys seleccionant sessions passades de l'historial.
* 🖱️ **Edició Manual Interactiva:** Selecciona i intercanvia alumnes de taula amb un sol toc a la pantalla.
* 📂 **Historial i Còpies de Seguretat:** Guarda les teves sessions de taules, consulta-les en qualsevol moment i exporta/importa còpies de seguretat en fitxers JSON de forma local.
* 💬 **Exportació Fàcil:** Genera text automàtic formatat amb emojis per a WhatsApp per compartir la distribució a l'instant o imprimeix les targetes de taules directament en PDF.

---

## 🛠️ Tecnologies Utilitzades

Aquesta aplicació s'ha construït com un projecte minimalista d'un sol fitxer de codi executat al costat del client:
* **HTML5** per a l'estructura.
* **Vanilla CSS3** amb suport per a Light/Dark Mode i adaptabilitat per a pantalles tàctils.
* **Vanilla JavaScript** per a la lògica de l'algorisme de cerca local (Hill Climbing) i emmagatzematge local.
* **PWA Web Manifest & Service Worker** per al mode d'aplicació nativa offline.

---

## 🚀 Com Executar i Instal·lar

Com que és una aplicació client estàtica, pots utilitzar-la directament de dues maneres:

### Opció 1: En línia mitjançant GitHub Pages (Molt recomanat per a iPhone)
Si has allotjat aquest repositori a GitHub:
1. Activa **GitHub Pages** des de la secció *Settings > Pages* seleccionant la branca `main`.
2. Obre la teva adreça personalitzada de GitHub Pages al navegador **Safari** del teu iPhone (ex: `https://el-teu-usuari.github.io/organitzador-taules/`).
3. Prem el botó **Compartir** de Safari (la fletxa cap amunt) i tria l'opció **"Afegir a la pantalla d'inici"** (Add to Home Screen).
4. L'aplicació s'instal·larà a la teva pantalla d'inici amb la seva icona dedicada i funcionarà **100% offline**.

### Opció 2: En local des de l'ordinador
1. Descarrega el projecte.
2. Fes doble clic sobre el fitxer `index.html` per obrir-lo directament al teu navegador, o bé executa un servidor senzill de desenvolupament:
   ```bash
   # Si tens Python instal·lat
   python -m http.server 8000
   ```

---

## 📁 Estructura del Projecte

El repositori consta de:
* `index.html` - El fitxer principal que conté l'estructura, disseny CSS i lògica de l'aplicació.
* `manifest.webmanifest` - Fitxer de metadades PWA per a la instal·lació en dispositius mòbils.
* `sw.js` - Service Worker per gestionar la memòria cau i habilitar l'ús sense internet.
* `icon-192.png` & `icon-512.png` - Icones de l'aplicació.

---

## 📄 Llicència

Aquest projecte és de codi obert i lliure d'ús. Surt del teu propi dispositiu i hi roman per a sempre!
