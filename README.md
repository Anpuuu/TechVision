# HardwareTech - Premium Computer Hardware Shop

Eine vollständige E-Commerce-Website für Computer-Hardware mit Warenkorb-Funktionalität.

## 🚀 Features

- **Responsive Design** - Optimiert für Desktop, Tablet und Mobile
- **Produktkatalog** - Filterung, Sortierung und Suche
- **Warenkorb-System** - Vollständig funktionsfähiger Warenkorb mit localStorage
- **Checkout-Prozess** - Bestellabwicklung mit Formular-Validierung
- **Hardware-Fokus** - Speziell für Computer-Hardware optimiert
- **Express.js Backend** - Lokaler Server für API-Endpunkte
- **Moderne UI/UX** - Sauberes, professionelles Design

## 📦 Installation

### Voraussetzungen
- Node.js (Version 16 oder höher)
- npm oder yarn

### Setup

1. **Repository klonen oder Dateien herunterladen**

2. **Dependencies installieren**
\`\`\`bash
npm install
\`\`\`

3. **Server starten**
\`\`\`bash
# Entwicklungsmodus mit Auto-Reload
npm run dev

# Oder normaler Start
npm start
\`\`\`

4. **Website öffnen**
Öffnen Sie Ihren Browser und gehen Sie zu: `http://localhost:3000`

## 🛠️ Verwendung

### Produktverwaltung
- Produkte werden in `server.js` in der `products` Array definiert
- Neue Produkte können einfach hinzugefügt werden
- Kategorien: Laptops, Desktops, Server, Mini PCs, Storage

### Warenkorb
- Automatische Speicherung im localStorage
- Mengenänderung und Artikelentfernung
- Berechnung von Versandkosten und MwSt
- Kostenloser Versand ab 500€

### API-Endpunkte

#### Produkte
- `GET /api/products` - Alle Produkte (mit Filtern)
- `GET /api/products/:id` - Einzelnes Produkt

#### Bestellungen
- `POST /api/orders` - Neue Bestellung erstellen

#### Kontakt
- `POST /api/contact` - Kontaktformular verarbeiten

### Filter-Parameter
- `category` - Produktkategorie filtern
- `search` - Textsuche in Name und Beschreibung
- `sort` - Sortierung (price-low, price-high, name, rating)

## 📁 Projektstruktur

\`\`\`
├── server.js              # Express.js Server
├── package.json           # Dependencies
├── index.html             # Startseite
├── products.html          # Produktkatalog
├── cart.html              # Warenkorb
├── contact.html           # Kontaktformular
├── news.html              # News/Blog
├── gallery.html           # Bildergalerie
├── blog.html              # Blog
├── login.html             # Login/Geschützter Bereich
├── impressum.html         # Impressum
├── styles/
│   ├── main.css           # Haupt-Styles
│   └── responsive.css     # Responsive Design
└── scripts/
    ├── main.js            # Haupt-JavaScript
    ├── cart.js            # Warenkorb-Logik
    ├── products.js        # Produktseite
    ├── checkout.js        # Checkout-Prozess
    └── gallery.js         # Galerie-Funktionen
\`\`\`

## 🎨 Anpassungen

### Neue Produkte hinzufügen
Bearbeiten Sie die `products` Array in `server.js`:

\`\`\`javascript
{
  id: 9,
  name: "Neues Produkt",
  price: 999.99,
  category: "laptops",
  image: "/placeholder.svg?height=300&width=400",
  description: "Produktbeschreibung",
  specs: ["Spec 1", "Spec 2", "Spec 3"],
  inStock: true,
  rating: 4.5
}
\`\`\`

### Design anpassen
- Farben in `styles/main.css` unter `:root` ändern
- Logo in Header ersetzen
- Bilder durch echte Produktfotos ersetzen

### Funktionen erweitern
- Benutzerverwaltung hinzufügen
- Echte Zahlungsintegration (PayPal, Stripe)
- Produktbewertungen
- Wunschliste
- Lagerbestandsverwaltung

## 🔧 Entwicklung

### Scripts
- `npm start` - Server starten
- `npm run dev` - Entwicklungsmodus mit nodemon

### Debugging
- Server-Logs in der Konsole
- Browser-Entwicklertools für Frontend
- Network-Tab für API-Aufrufe

## 📱 Browser-Unterstützung

- Chrome (empfohlen)
- Firefox
- Safari
- Edge
- Mobile Browser (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Lokale Produktion
\`\`\`bash
npm start
\`\`\`

### Cloud-Deployment
Die Anwendung kann auf verschiedenen Plattformen deployed werden:
- Heroku
- Vercel (mit Anpassungen)
- DigitalOcean
- AWS

## 📄 Lizenz

MIT License - Siehe LICENSE Datei für Details.

## 🤝 Beitragen

1. Fork das Repository
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

## 📞 Support

Bei Fragen oder Problemen:
- GitHub Issues erstellen
- E-Mail: support@hardwaretech.de
- Dokumentation lesen

---

**HardwareTech** - Premium Computer Hardware für Profis und Enthusiasten! 🖥️⚡
