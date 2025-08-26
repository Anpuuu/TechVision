const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Statische Dateien servieren
app.use(express.static(path.join(__dirname)))

// Dummy-Produktdatenbank
const products = [
  {
    id: 1,
    name: "Gaming Laptop RTX 4080",
    price: 2499.99,
    category: "laptops",
    image: "/placeholder.svg?height=300&width=400",
    description: "Hochleistungs-Gaming-Laptop mit RTX 4080, 32GB RAM und 1TB SSD",
    specs: ["Intel i9-13900H", "RTX 4080 16GB", "32GB DDR5", "1TB NVMe SSD", '17.3" 240Hz Display'],
    inStock: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Workstation Desktop i9",
    price: 3299.99,
    category: "desktops",
    image: "/placeholder.svg?height=300&width=400",
    description: "Professionelle Workstation für CAD, Rendering und Entwicklung",
    specs: ["Intel i9-13900K", "RTX 4090 24GB", "64GB DDR5", "2TB NVMe SSD", "Custom Wasserkühlung"],
    inStock: true,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Ultrabook Business Pro",
    price: 1899.99,
    category: "laptops",
    image: "/placeholder.svg?height=300&width=400",
    description: "Leichtes Business-Ultrabook mit langer Akkulaufzeit",
    specs: ["Intel i7-1360P", "Intel Iris Xe", "16GB LPDDR5", "512GB SSD", '14" 2.8K OLED'],
    inStock: true,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Gaming PC RGB Edition",
    price: 2799.99,
    category: "desktops",
    image: "/placeholder.svg?height=300&width=400",
    description: "RGB-Gaming-PC mit Tempered Glass und Premium-Komponenten",
    specs: ["AMD Ryzen 9 7900X", "RTX 4070 Ti", "32GB DDR5", "1TB Gen4 SSD", "RGB Beleuchtung"],
    inStock: true,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Server Rack 2U",
    price: 4999.99,
    category: "servers",
    image: "/placeholder.svg?height=300&width=400",
    description: "Enterprise Server für Rechenzentren und Unternehmen",
    specs: ["Dual Xeon Gold", "128GB ECC RAM", "8x 2TB SSD RAID", "Redundante Netzteile", "IPMI Management"],
    inStock: true,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Mini PC Office",
    price: 699.99,
    category: "mini-pcs",
    image: "/placeholder.svg?height=300&width=400",
    description: "Kompakter Mini-PC für Büroarbeiten und Home Office",
    specs: ["Intel i5-1240P", "Intel Iris Xe", "16GB DDR4", "512GB SSD", "WiFi 6E"],
    inStock: true,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Creator Laptop 4K",
    price: 2199.99,
    category: "laptops",
    image: "/placeholder.svg?height=300&width=400",
    description: "Content Creator Laptop mit 4K Display und Profi-Grafik",
    specs: ["Intel i7-13700H", "RTX 4060 8GB", "32GB DDR5", "1TB SSD", '16" 4K OLED 100% Adobe RGB'],
    inStock: false,
    rating: 4.8,
  },
  {
    id: 8,
    name: "NAS Storage 8-Bay",
    price: 1299.99,
    category: "storage",
    image: "/placeholder.svg?height=300&width=400",
    description: "Network Attached Storage für Backup und Datenspeicherung",
    specs: ["8-Bay Hot-Swap", "Quad-Core ARM", "8GB RAM", "2x 10GbE", "RAID 0/1/5/6/10"],
    inStock: true,
    rating: 4.7,
  },
]

// API Routes
app.get("/api/products", (req, res) => {
  const { category, search, sort } = req.query
  let filteredProducts = [...products]

  // Kategorie-Filter
  if (category && category !== "all") {
    filteredProducts = filteredProducts.filter((p) => p.category === category)
  }

  // Suchfilter
  if (search) {
    const searchTerm = search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (p) => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm),
    )
  }

  // Sortierung
  if (sort) {
    switch (sort) {
      case "price-low":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "name":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break
    }
  }

  res.json(filteredProducts)
})

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number.parseInt(req.params.id))
  if (!product) {
    return res.status(404).json({ error: "Produkt nicht gefunden" })
  }
  res.json(product)
})

// Kontaktformular API
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, message, subject, company, newsletter } = req.body

    // Validierung
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, E-Mail und Nachricht sind erforderlich.",
      })
    }

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      })
    }

    // Hier würde normalerweise die E-Mail versendet werden
    console.log("Kontaktformular erhalten:", {
      name,
      email,
      company,
      subject,
      message,
      newsletter,
      timestamp: new Date().toISOString(),
    })

    res.json({
      success: true,
      message: "Ihre Nachricht wurde erfolgreich gesendet! Wir melden uns bald bei Ihnen.",
    })
  } catch (error) {
    console.error("Fehler beim Verarbeiten des Kontaktformulars:", error)
    res.status(500).json({
      success: false,
      message: "Ein Serverfehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
    })
  }
})

// Bestellungs-API (Dummy)
app.post("/api/orders", (req, res) => {
  try {
    const { items, customerInfo, totalAmount } = req.body

    // Validierung
    if (!items || !items.length || !customerInfo || !totalAmount) {
      return res.status(400).json({
        success: false,
        message: "Unvollständige Bestelldaten.",
      })
    }

    // Bestellung verarbeiten (Dummy)
    const orderId = "ORD-" + Date.now()

    console.log("Neue Bestellung erhalten:", {
      orderId,
      items,
      customerInfo,
      totalAmount,
      timestamp: new Date().toISOString(),
    })

    res.json({
      success: true,
      orderId,
      message: "Bestellung erfolgreich aufgegeben!",
    })
  } catch (error) {
    console.error("Fehler beim Verarbeiten der Bestellung:", error)
    res.status(500).json({
      success: false,
      message: "Fehler beim Verarbeiten der Bestellung.",
    })
  }
})

// Alle anderen Routen zu index.html weiterleiten (SPA)
app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// Server starten
app.listen(PORT, () => {
  console.log(`🚀 HardwareTech Server läuft auf http://localhost:${PORT}`)
  console.log(`📦 ${products.length} Produkte verfügbar`)
  console.log("🛒 Warenkorb-System aktiviert")
})

module.exports = app
