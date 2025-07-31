# QCAD ↔ Compass Angle Calculator

A professional web application for converting between QCAD angles and compass bearings, designed specifically for architectural and site planning professionals.

## 🌐 Live Demo

**[Try it now: https://wbxqgcsj.manus.space](https://wbxqgcsj.manus.space)**

## 📋 Overview

This calculator bridges the gap between two different angle measurement systems commonly used in architectural and engineering work:

- **QCAD System**: 0° = East (horizontal right), increases counterclockwise
- **Compass System**: 0° = North, increases clockwise

## ✨ Features

- **Bidirectional Conversion**: Enter angles in either system and get instant conversion
- **Real-time Calculation**: Results update as you type
- **Professional UI**: Clean, modern interface with clear visual indicators
- **Reference Guides**: Built-in angle reference guides for both systems
- **Utility Functions**: Swap Values and Clear All buttons
- **Mathematical Formulas**: Conversion formulas displayed for reference
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **No Dependencies**: Pure client-side calculation, no server required

## 🔧 How It Works

### Conversion Formulas

**QCAD → Compass:**
```
Compass = (90 - QCAD) mod 360
```

**Compass → QCAD:**
```
QCAD = (90 - Compass) mod 360
```

### Angle System Reference

| Direction | QCAD Angle | Compass Bearing |
|-----------|------------|-----------------|
| North     | 90°        | 0°              |
| East      | 0°         | 90°             |
| South     | 270°       | 180°            |
| West      | 180°       | 270°            |

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/qcad-compass-calculator.git
cd qcad-compass-calculator
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
pnpm run build
```

The built files will be in the `dist` directory.

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📱 Usage Examples

### Example 1: QCAD to Compass
- Enter `45` in the QCAD Angle field
- Result: `45.00` appears in the Compass Bearing field
- This represents a northeast direction

### Example 2: Compass to QCAD
- Enter `180` in the Compass Bearing field
- Result: `270.00` appears in the QCAD Angle field
- This represents a south direction

### Example 3: Using Swap Values
- Enter any angle in either field
- Click "Swap Values" to exchange the values between fields
- Useful for quick verification or reverse calculations

## 🎯 Use Cases

- **Architectural Planning**: Converting between CAD software angles and real-world compass bearings
- **Site Planning**: Translating survey data between different coordinate systems
- **Engineering**: Converting technical drawings to field measurements
- **Education**: Teaching angle conversion concepts
- **Surveying**: Converting between different angle measurement standards

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for the QCAD community and architectural professionals
- Inspired by the need for seamless angle conversion in technical workflows
- UI components powered by shadcn/ui and Tailwind CSS

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/qcad-compass-calculator/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide as much detail as possible including browser version and steps to reproduce

---

**Made with ❤️ for the architectural and engineering community**

