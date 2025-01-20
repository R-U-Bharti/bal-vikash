import { Bug } from 'lucide-react';
import React from 'react'

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };

    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }


    render() {

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function backAndReload() {
            window.history.back();
            await delay(50);
            window.location.reload();
        }

        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-t from-red-950 to-black">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <Bug size={'100px'} color="#575757" />
                            <h1 className="text-4xl font-bold text-white/80">Error</h1>
                            <div className="flex items-center gap-2 mt-3">
                                <button onClick={() => backAndReload()} className="px-4 text-white py-1.5 text-sm rounded cursor-pointer bg-blue-800 hover:bg-blue-700">Go Back</button>
                                <button onClick={() => (window.sessionStorage.clear(), window.location.replace('/'))} className="px-4 bg-red-800 text-white py-1.5 text-sm rounded cursor-pointer hover:bg-red-700">Log Out</button>
                                <button onClick={() => window.location.reload()} className="px-4 py-1.5 text-sm rounded cursor-pointer bg-teal-800 text-white hover:bg-teal-700">Reload</button>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

        return this.props.children;
    }
}
export default ErrorBoundary