# AI Agent Directory

A comprehensive Next.js 14 website for discovering and exploring AI tools and agents, featuring an intelligent chatbot that provides personalized recommendations.

## Features

- 🤖 **AI-Powered Recommendations**: Intelligent chatbot that suggests relevant tools based on user requirements
- 🔍 **Advanced Search & Filtering**: Searchable directory with category filters and URL parameters
- 📱 **Responsive Design**: Mobile-first design that works beautifully on all devices
- 🌙 **Dark/Light Mode**: System-aware theme switching with smooth transitions
- ⚡ **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- 🎨 **Modern UI**: Built with shadcn/ui and Tailwind CSS for a polished interface

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **AI Integration**: Vercel AI SDK
- **Icons**: Lucide React
- **Markdown**: React Markdown
- **Theme**: next-themes

## Getting Started

1. **Clone and Install**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   ```bash
   cp .env.example .env
   ```
   Add your OpenAI API key to the `.env` file.

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

```
├── app/                    # Next.js 14 App Router pages
│   ├── api/chat/          # Chat API endpoint
│   ├── agents/[slug]/     # Dynamic agent detail pages
│   ├── directory/         # Agent directory page
│   ├── chat/             # Full-screen chat interface
│   └── about/            # About page
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   └── ...              # Custom components
├── data/                # JSON data files
│   └── agents.json      # AI agents database
└── lib/                 # Utility functions
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

The app is a static Next.js site and can be deployed to any hosting platform that supports Node.js.

## API Configuration

The chatbot requires an OpenAI API key. Add it to your environment variables:

```
OPENAI_API_KEY=your_openai_api_key_here
```

Alternative AI providers can be configured by modifying `/app/api/chat/route.ts`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add new agents to `data/agents.json`
4. Test your changes
5. Submit a pull request

## License

This project is open source and available under the MIT License.