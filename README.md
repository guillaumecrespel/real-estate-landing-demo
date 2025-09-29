# 🏠 Real Estate Landing Demo

A modern, responsive real estate landing page built with **Next.js 15**, **Tailwind CSS**, and **Radix UI** components. This project demonstrates best practices for building performant, accessible, and SEO-friendly landing pages.

## ✨ Features

- 🚀 **Next.js 15** with App Router for optimal performance
- 🎨 **Tailwind CSS** for utility-first styling
- 🧩 **Radix UI** components for accessibility
- 📱 **Fully responsive** design
- 🌙 **Dark/Light mode** support
- ⚡ **Optimized for Vercel** deployment
- 📦 **pnpm** for fast package management
- 🔧 **TypeScript** for type safety

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Language**: TypeScript
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd real-estate-landing-demo
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── ...           # Feature components
│   └── lib/              # Utility functions
├── public/               # Static assets
└── ...config files
```

## 🎨 Components

The project includes a comprehensive set of UI components:

- **Layout**: Header, Footer, Hero sections
- **Property**: Property cards, grid, filters
- **Forms**: Contact forms with validation
- **UI**: Buttons, inputs, modals, and more

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
3. **Deploy** with automatic deployments on push

### Manual Deployment

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Tailwind CSS

The project uses Tailwind CSS with custom configuration in `tailwind.config.ts`. You can customize:

- Colors and themes
- Typography
- Spacing and sizing
- Breakpoints

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

Built with accessibility in mind:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast support

## 🎯 Performance

Optimized for performance:

- Next.js Image optimization
- Code splitting and lazy loading
- Optimized bundle size
- Fast refresh in development
- Static generation where possible

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for seamless deployment

---

Built with ❤️ using modern web technologies