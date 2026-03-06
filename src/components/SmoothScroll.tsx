"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            {/* @ts-expect-error React 18 / 19 mismatch with studio-freight */}
            {children}
        </ReactLenis>
    );
}
