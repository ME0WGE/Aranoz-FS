import AppLayout from './AppLayout';

export default function AuthenticatedLayout({ header, children }) {
    return (
        <AppLayout>
            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}
            {children}
        </AppLayout>
    );
}
