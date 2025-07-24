import React from "react";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { hasError: boolean; error: any }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error("Error Boundary Caught:", error, errorInfo);
  }

  render() {
    const { error, hasError } = this.state;

    if (hasError) {
      return error ? (
        error?.message
      ) : (
        <h2>Something went wrong in this page.</h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
