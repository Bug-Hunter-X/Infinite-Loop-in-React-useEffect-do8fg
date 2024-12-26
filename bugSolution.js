```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Only runs once on mount
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div>Count: {count}</div>;
}
```