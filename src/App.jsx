import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import WorkDetail from "./pages/WorkDetail";
import About from "./pages/About";
import Contact from "./pages/SimpleContact";

// ── Error boundary — shows a readable message instead of blank screen ─────────
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <main style={{ padding: "6rem 5vw", fontFamily: "sans-serif" }}>
          <h1 style={{ color: "#7B5EA7", marginBottom: "1rem" }}>
            Something went wrong
          </h1>
          <pre
            style={{
              background: "#f3eef9",
              padding: "1.5rem",
              borderRadius: "8px",
              overflowX: "auto",
              fontSize: "0.85rem",
              color: "#1a1225",
            }}
          >
            {this.state.error.message}
            {"\n\n"}
            {this.state.error.stack}
          </pre>
        </main>
      );
    }
    return this.props.children;
  }
}

// ── Layout wrapper — Nav + page content + conditional Footer ──────────────────
function Layout({ children, showFooter = true }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <ErrorBoundary>{children}</ErrorBoundary>
      {showFooter && <Footer />}
    </>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/work"
          element={
            <Layout>
              <Work />
            </Layout>
          }
        />
        <Route
          path="/work/:id"
          element={
            <Layout>
              <WorkDetail />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        {/* Contact has its own Footer inside the page */}
        <Route
          path="/simplecontact"
          element={
            <Layout showFooter={false}>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <main
                id="main-content"
                style={{ padding: "8rem 5vw", textAlign: "center" }}
              >
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  404 — Page not found
                </h1>
                <a href="/" className="btn btn-primary">
                  Back to home
                </a>
              </main>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
