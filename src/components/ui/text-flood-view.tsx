/**
 * Text flood view related components and configurations
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { isMobile } from "@/utils/isMobile";

interface TextFloodBox {
    id: string;
    text: string;
    position: {
        top: number;
        left: number;
    };
}

interface TextFloodViewProps {
    texts: string[];
    maxTextDisplayed?: number;
    backgroundColor?: string;
    chaoticMode?: boolean;
}

interface TextFloodBoxProps extends React.HTMLAttributes<HTMLHeadingElement> {
    textFloodBox: TextFloodBox;
    backgroundColor?: string;
}

/**
 * Displays a text flood view with random texts appearing at random positions within the view
 */
function TextFloodView({
    texts,
    maxTextDisplayed = 35,
    backgroundColor,
    chaoticMode = false,
}: TextFloodViewProps) {
    const [textFloodBox, setTextFloodBox] = useState<TextFloodBox[]>([]);
    const [maxTextFloodBox, setMaxTextFloodBox] = useState(maxTextDisplayed);
    const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);
    const textBoxContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentDeviceIsMobile = isMobile();

        if (currentDeviceIsMobile) {
            setMaxTextFloodBox((prev) => prev / 2);
        }
    }, []);

    useEffect(() => {
        if (!textBoxContainerRef.current) return;

        // Get the bounding rectangle of the text box container to make sure the text boxes are positioned within the container
        const textBoxContainerRect =
            textBoxContainerRef.current.getBoundingClientRect();
        // Get the container width and height size
        const { width: textBoxContainerWidth, height: textBoxContainerHeight } =
            textBoxContainerRect;

        const interval = setInterval(
            () => {
                setTextFloodBox((prev) => {
                    // Check if the text box array has reached the maximum length to display
                    if (prev.length >= maxTextFloodBox) {
                        // If chaotic mode is enabled, don't set the initial animation done state to make the text flood animation goes chaotic
                        // Else set the initial animation done state to true to make the animation slower
                        if (!chaoticMode) {
                            setIsInitialAnimationDone(true);
                        }
                        return prev.slice(1);
                    }

                    // Set the top and left position based on container width and height
                    const topPos =
                        Math.random() * (textBoxContainerHeight - 100);
                    const leftPos =
                        Math.random() * (textBoxContainerWidth - 200);

                    // Convert the top and left position to percentage
                    const topPercent = (topPos / textBoxContainerHeight) * 100;
                    const leftPercent = (leftPos / textBoxContainerWidth) * 100;

                    return [
                        ...prev,
                        {
                            id: crypto.randomUUID(),
                            text: texts[
                                Math.floor(Math.random() * texts.length)
                            ],
                            position: {
                                top: topPercent,
                                left: leftPercent,
                            },
                        },
                    ];
                });
            },
            isInitialAnimationDone ? 800 : 32,
        );

        return () => {
            clearInterval(interval);
        };
    }, [maxTextFloodBox, texts, chaoticMode, isInitialAnimationDone]);

    return (
        <div className="relative flex h-full w-full" ref={textBoxContainerRef}>
            {textFloodBox.map((textBox) => {
                return (
                    <TextFloodBox
                        key={textBox.id}
                        textFloodBox={textBox}
                        backgroundColor={backgroundColor}
                    />
                );
            })}
        </div>
    );
}

/**
 * Displays a text that will be positioned at a random position inside the text flood view
 */
function TextFloodBox({ textFloodBox, backgroundColor }: TextFloodBoxProps) {
    return (
        <h3
            key={textFloodBox.id}
            className="bg-primary border-background absolute border px-3 py-1 text-3xl text-nowrap text-white lg:text-5xl"
            style={{
                top: `${textFloodBox.position.top}%`,
                left: `${textFloodBox.position.left}%`,
                backgroundColor: backgroundColor
                    ? backgroundColor
                    : "var(--primary)",
            }}
        >
            {textFloodBox.text}
        </h3>
    );
}

export { TextFloodView };
