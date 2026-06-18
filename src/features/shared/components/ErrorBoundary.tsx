import { Component, type ReactNode, type ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Catches component crashes (especially WebGL failures on unsupported GPUs)
 * and renders a styled fallback instead of a blank screen.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "40vh",
            padding: "2rem",
            color: "var(--bone, #f4f1ea)",
            fontFamily: "'Inter Tight', sans-serif",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "400px" }}>
            <div
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--acid, #c6ff3d)",
                marginBottom: "1rem",
              }}
            >
              ◉ Runtime Error
            </div>
            <p style={{ fontSize: "0.875rem", opacity: 0.6, lineHeight: 1.6 }}>
              Something went wrong rendering this section. Try refreshing the page.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
