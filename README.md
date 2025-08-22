# Blog Boilerplate

A modern blog application built with React, TypeScript, and microservices architecture.

## 🚀 Features

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Microservices architecture
- **Posts**: Create and manage blog posts
- **Comments**: Add comments to posts
- **Real-time**: Event-driven communication between services
- **Moderation**: Content moderation system
- **Query**: Advanced search and filtering

## 🏗️ Architecture

```
blog-boilerplate/
├── client/          # React frontend application
├── posts/           # Posts microservice
├── comments/        # Comments microservice
├── event-bus/       # Event bus for inter-service communication
├── moderation/      # Content moderation service
└── query/           # Search and query service
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client for API calls
- **ESLint** - Code quality and consistency

### Backend
- **Node.js** - JavaScript runtime
- **Microservices** - Scalable architecture
- **Event Bus** - Inter-service communication

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blog-boilerplate.git
   cd blog-boilerplate
   ```

2. **Install dependencies for all services**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client && npm install
   
   # Install other service dependencies
   cd ../posts && npm install
   cd ../comments && npm install
   cd ../event-bus && npm install
   cd ../moderation && npm install
   cd ../query && npm install
   ```

3. **Environment Setup**
   Create `.env` files in each service directory if needed:
   ```bash
   # Example .env structure
   PORT=4000
   DATABASE_URL=your_database_url
   ```

## 🚀 Running the Application

### Development Mode

1. **Start all services** (in separate terminals):
   ```bash
   # Terminal 1 - Posts service
   cd posts && npm run dev
   
   # Terminal 2 - Comments service  
   cd comments && npm run dev
   
   # Terminal 3 - Event bus
   cd event-bus && npm run dev
   
   # Terminal 4 - Moderation service
   cd moderation && npm run dev
   
   # Terminal 5 - Query service
   cd query && npm run dev
   ```

2. **Start the frontend**:
   ```bash
   cd client && npm run dev
   ```

3. **Open your browser**:
   - Frontend: http://localhost:5173
   - Posts API: http://localhost:4000
   - Comments API: http://localhost:4001

### Production Build

```bash
# Build frontend
cd client && npm run build

# Start production server
npm run preview
```

## 📁 Project Structure

```
client/
├── src/
│   ├── components/     # React components
│   │   ├── PostCreate.tsx
│   │   ├── PostsSection.tsx
│   │   ├── Post.tsx
│   │   ├── CommentCreate.tsx
│   │   └── CommentsList.tsx
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── package.json        # Frontend dependencies

posts/                  # Posts microservice
comments/               # Comments microservice
event-bus/              # Event bus service
moderation/             # Moderation service
query/                  # Query service
```

## 🔧 Available Scripts

### Frontend (client/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend Services
- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm test` - Run tests (if configured)

## 🌐 API Endpoints

### Posts Service (Port 4000)
- `GET /posts` - Get all posts
- `POST /posts` - Create a new post

### Comments Service (Port 4001)
- `GET /posts/:postId/comments` - Get comments for a post
- `POST /posts/:postId/comments` - Add a comment to a post

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help, please open an issue on GitHub.

## 🔮 Roadmap

- [ ] User authentication
- [ ] Rich text editor
- [ ] Image uploads
- [ ] Categories and tags
- [ ] Search functionality
- [ ] Admin dashboard
- [ ] API documentation
- [ ] Unit tests
- [ ] E2E tests
