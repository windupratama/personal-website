/**
 * Application related authentication UI layout
 */

interface AuthLayoutProps {
    children?: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="flex h-[100svh] w-full justify-between">
            <div className="bg-primary hidden h-full w-full items-center justify-center lg:flex">
                <div className="flex flex-col gap-4">
                    <h3 className="text-primary w-fit bg-white px-3 py-1 text-3xl text-nowrap lg:text-5xl">
                        AUTHORIZED ⛨
                    </h3>
                    <h3 className="text-primary w-fit bg-white px-3 py-1 text-3xl text-nowrap lg:text-5xl">
                        (▀̿Ĺ̯▀̿ ̿) PERSON
                    </h3>
                    <h3 className="text-primary w-fit bg-white px-3 py-1 text-3xl text-nowrap lg:text-5xl">
                        ONLY 🗝
                    </h3>
                </div>
            </div>
            <div className="flex h-full w-full items-center justify-center">
                {children}
            </div>
        </div>
    );
}
