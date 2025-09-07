# Microfrontend Application

This repository contains a **Microfrontend application** consisting of three independent apps:

1. **Home** – exposes shared components and state
2. **Cart** – imports shared state from Home and exports a Counter component
3. **Products** – imports components and state from Home and Cart and composes the complete page

Each app runs independently and is also deployed separately.

---

## 🔗 Deployed Apps

- **Home App**: [https://microfrontend-app-home-lovat.vercel.app/](https://microfrontend-app-home-lovat.vercel.app/)
- **Cart App**: [https://microfrontend-app-counter.vercel.app/](https://microfrontend-app-counter.vercel.app/)
- **Products App**: [https://microfrontend-app-teal.vercel.app/](https://microfrontend-app-teal.vercel.app/)

---

## 🏗 Project Structure

```
root/
├─ home/        # Host application
├─ cart/        # Cart microfrontend
└─ products/    # Products microfrontend
```

---

## 📝 App Details

- **Home App**
  - Exports: Header, Footer, SharedContext (count state), Utility function to capitalize words
- **Cart App**
  - Uses the count state and update functions from Home App
  - Exports Counter component
- **Products App**
  - Imports Header, Footer, SharedContext from Home
  - Imports Counter from Cart
  - Composes the full UI using these imported modules

---

## ⚡ Features

- Fully independent apps running via Webpack Module Federation
- Shared state management across microfrontends using React Context
- Utility function shared from Home app
- All apps can run independently or together

---

## 💻 Installation & Local Development

### 1. Clone the repository

```bash
git clone https://github.com/Afzal95/microfrontend-app.git
```

### 2. Install dependencies for each app

```bash
cd home
npm install

cd ../cart
npm install

cd ../products
npm install
```

### 3. Start each app individually (open separate terminals)

```bash
cd home && npm run start
cd cart && npm run start
cd products && npm run start
```

### 4. Configure Module Federation for local development

Open `webpack.config.js` for each app and replace deployed URLs in `remotes` with local URLs:

```js
remotes: {
  home: "home@http://localhost:3000/remoteEntry.js",
  cart: "cart@http://localhost:3002/remoteEntry.js",
}
```

### 5. Verify apps are connected

- Home app provides shared components and state
- Cart app counter updates using Home app state
- Products app displays Header, Footer, and Counter

---

## 📦 Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm install`   | Install dependencies     |
| `npm run start` | Start development server |
| `npm run build` | Build app for production |

---

## 🌐 Notes

- Each app is deployed separately on Vercel
- They are fully independent, but communicate via Module Federation
- Replace URLs in `webpack.config.js` for production vs local development

---

## 📝 License

MIT License
