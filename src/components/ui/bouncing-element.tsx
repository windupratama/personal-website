/**
 * bouncing element related components and configurations
 **/

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { BouncingElementProvider } from "@/providers/bouncing-element-provider";
import { useBouncingElement } from "@/hooks/useBouncingElement";

interface BouncingElementViewProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

interface BouncingElementContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

type BouncingElementPosition = "start" | "center" | "end";

interface BouncingElementProps {
    children?: React.ReactNode;
    position?: BouncingElementPosition;
    velocity?: { x: number; y: number };
}

/**
 * BouncingElementView contains a wrapper that provides bouncing element view to its children
 **/
function BouncingElementView({ children, ...props }: BouncingElementViewProps) {
    return (
        <BouncingElementProvider>
            <BouncingElementContainer {...props}>
                {children}
            </BouncingElementContainer>
        </BouncingElementProvider>
    );
}

/**
 * BouncingElementContainer is a main layer that control the bouncing element boundary.
 **/
function BouncingElementContainer({
    children,
    className,
    ...props
}: BouncingElementContainerProps) {
    const { containerRef } = useBouncingElement();

    return (
        <div
            ref={containerRef}
            className={cn("flex h-screen w-full", className)}
            {...props}
        >
            {children}
        </div>
    );
}

/**
 * BouncingELementLayer is a layer for bouncing element space
 **/
function BouncingElementLayer({ children }: { children: React.ReactNode }) {
    return (
        <div className="inset-0 z-[-1] flex overflow-hidden">{children}</div>
    );
}

/**
 * BouncingElement is a element that will bounce when hit the browser window corner
 **/
function BouncingElement({
    children,
    position,
    velocity
}: BouncingElementProps) {
    const { containerRef } = useBouncingElement();

    const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });
    const [elementVelocity, setElementVelocity] = useState({ x: 1, y: 1 });

    const bouncingElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        // get container rect
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();

        setElementPosition(() => {
            // container size
            const width = containerRect.width;
            const height = containerRect.height;

            // get a random value based on container size
            const randomWidth = Math.random() * width;
            const randomHeight = Math.random() * height;

            switch (position) {
                case "start":
                    return {
                        x: randomWidth / 2,
                        y: randomHeight / 2
                    };
                case "center":
                    return {
                        x: width / 2,
                        y: randomHeight / 2
                    };
                case "end":
                    return {
                        x: width - randomWidth / 2,
                        y: randomHeight
                    };
                default:
                    return {
                        x: randomWidth,
                        y: randomHeight
                    };
            }
        });

        if (velocity) {
            setElementVelocity(velocity);
        }
    }, [position, velocity, containerRef]);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        if (!bouncingElementRef.current) {
            return;
        }

        // get container rect
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();

        // bouncing element
        const bouncingElement = bouncingElementRef.current;
        const bouncingElementRect = bouncingElement.getBoundingClientRect();

        function updatePosition() {
            // max position of a element can be based on the container size
            const maxElementPositionX =
                containerRect.width - bouncingElementRect.width;
            const maxElementPositionY =
                containerRect.height - bouncingElementRect.height;

            setElementPosition((prev) => {
                const newElementPositionX = prev.x + elementVelocity.x;
                const newElementPositionY = prev.y + elementVelocity.y;

                let newElementVelocityX = elementVelocity.x;
                let newElementVelocityY = elementVelocity.y;

                if (
                    newElementPositionX >= maxElementPositionX ||
                    newElementPositionX <= 0
                ) {
                    newElementVelocityX *= -1;
                } else if (
                    newElementPositionY >= maxElementPositionY ||
                    newElementPositionY <= 0
                ) {
                    newElementVelocityY *= -1;
                }

                setElementVelocity({
                    x: newElementVelocityX,
                    y: newElementVelocityY
                });

                return {
                    x: Math.max(
                        0,
                        Math.min(maxElementPositionX, newElementPositionX)
                    ),
                    y: Math.max(
                        0,
                        Math.min(maxElementPositionY, newElementPositionY)
                    )
                };
            });
        }

        const animation = setInterval(updatePosition, 16);

        return () => clearInterval(animation);
    }, [elementVelocity, containerRef]);

    return (
        <div
            ref={bouncingElementRef}
            className="absolute h-fit w-fit overflow-hidden"
            style={{
                transform: `translate3d(${elementPosition.x}px, ${elementPosition.y}px, 0)`
            }}
        >
            {children}
        </div>
    );
}

export { BouncingElementView, BouncingElementLayer, BouncingElement };
