# Figma MCP Implementation Framework

This project demonstrates high-fidelity, accessible implementations of Figma designs using Figma Dev Mode MCP Server with TypeScript and Tailwind CSS.

## Project Structure

```
figma-mcp-frame/
├── A/                    # Implementation A (node-id: 108-1457)
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── assets/       # Images and SVG assets
│   │   └── index.css     # Tailwind + Design System tokens
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── B/                    # Implementation B (node-id: 108-1885)
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── assets/       # Images and SVG assets
│   │   └── index.css     # Tailwind + Design System tokens
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
└── README.md
```

## Figma Designs

### Implementation A
- **Figma URL**: https://www.figma.com/design/7oHnUCPrERFgJeDfp7yLbq/2025-10-01Simple-Design-System?node-id=108-1457
- **Node ID**: 108-1457
- **Local URL**: http://localhost:3000

### Implementation B  
- **Figma URL**: https://www.figma.com/design/7oHnUCPrERFgJeDfp7yLbq/2025-10-01Simple-Design-System?node-id=108-1885
- **Node ID**: 108-1885
- **Local URL**: http://localhost:3001
- **Features**: Enhanced with Figma annotations (interaction/content annotations)

## Quick Start

### Setup Implementation A
```bash
cd A
npm install
npm run dev  # Starts on http://localhost:3000
```

### Setup Implementation B
```bash
cd B
npm install  
npm run dev  # Starts on http://localhost:3001
```

### Run Both Simultaneously
```bash
# Terminal 1
cd A && npm run dev

# Terminal 2  
cd B && npm run dev
```

## Design System Integration

Both implementations use consistent design tokens derived from Figma variables:

### Typography Tokens
- **Heading**: Inter, 24px, Semi Bold, line-height: 1.2
- **Subheading**: Inter, 20px, Regular, line-height: 1.2  
- **Body Base**: Inter, 16px, Regular, line-height: 1.4
- **Body Strong**: Inter, 16px, Semi Bold, line-height: 1.4
- **Single Line Body**: Inter, 16px, Regular, line-height: 1.0

### Implementation Standards
- ✅ No inline styles - Tailwind classes only
- ✅ No hardcoded colors/spacing/fonts - Design tokens used
- ✅ Flex/Grid layouts - No absolute positioning
- ✅ Full accessibility compliance (ARIA, semantic HTML, focus management)
- ✅ Figma variable synchronization
- ✅ Annotation implementation (hover states, alt text, CMS content)

## Quality Assurance

### Precision Standards
- Typography sizes: ±0.1rem tolerance
- Spacing/margins: ±2px tolerance
- Perfect Figma design fidelity

### Accessibility Features
- Semantic HTML structure (header, main, section, article, footer)
- ARIA labels and landmarks
- Keyboard navigation support
- Screen reader optimization
- Focus visible styling

## Figma MCP Integration

Generated using:
1. `get_variable_defs` - Extract design tokens
2. `get_code` - Generate React/TSX + Tailwind implementation  
3. `get_assets` - Download referenced images/SVGs
4. Annotation processing for enhanced UX

## Development Workflow

### Branch Strategy (Recommended)
```bash
git checkout -b feature/new-implementation
# Make changes
git commit -m "feat: add new component implementation"
git push origin feature/new-implementation
```

### Version Management
- `main` branch: Stable implementations
- Feature branches: Experimental changes
- Tags for major milestones