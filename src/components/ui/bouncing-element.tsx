"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

/**
 * bouncing element view related components and configurations
 **/

interface BouncingElementViewProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

/**
 * BouncingElementView contains a wrapper that provides bouncing element view to its children
 **/
function BouncingElementView({
    children,
    className,
    ...props
}: BouncingElementViewProps) {
    return (
        <div className={cn("flex h-screen w-full", className)} {...props}>
            {children}
        </div>
    );
}

/**
 * BouncingELementLayer is a layer for bouncing element space
 **/
function BouncingElementLayer({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">{children}</div>
    );
}

/**
 * BouncingElement is a element that will bounce when hit the browser window corner
 **/
function BouncingElement({ children }: { children: React.ReactNode }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [velocity, setVelocity] = useState({ x: 2, y: 2 });
    const bouncingElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setPosition(() => {
            return {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
            };
        });
    }, []);

    useEffect(() => {
        if (!bouncingElementRef.current) {
            return;
        }

        const bouncingElement = bouncingElementRef.current;
        const bouncingElementRect = bouncingElement.getBoundingClientRect();

        function updatePosition() {
            const maxPosX = window.innerWidth - bouncingElementRect.width;
            const maxPosY = window.innerHeight - bouncingElementRect.height;

            setPosition((prev) => {
                const newPostX = prev.x + velocity.x;
                const newPostY = prev.y + velocity.y;

                let newVelocityX = velocity.x;
                let newVelocityY = velocity.y;

                if (newPostX >= maxPosX || newPostX <= 0) {
                    newVelocityX *= -1;
                } else if (newPostY >= maxPosY || newPostY <= 0) {
                    newVelocityY *= -1;
                }

                setVelocity({
                    x: newVelocityX,
                    y: newVelocityY
                });

                return {
                    x: Math.max(0, Math.min(maxPosX, newPostX)),
                    y: Math.max(0, Math.min(maxPosY, newPostY))
                };
            });
        }

        const animation = setInterval(updatePosition, 16);

        return () => clearInterval(animation);
    }, [velocity]);

    return (
        <div
            ref={bouncingElementRef}
            className="absolute h-fit w-fit"
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`
            }}
        >
            {children}
        </div>
    );
}

export { BouncingElementView, BouncingElementLayer, BouncingElement };
