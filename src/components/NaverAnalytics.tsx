'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
    interface Window {
        wcs?: any;
        wcs_add?: any;
        wcs_do?: (_?: any) => void;
    }
}

export default function NaverAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Initialize wcs_add if it doesn't exist
            if (!window.wcs_add) window.wcs_add = {};

            // Set the Analytics ID
            window.wcs_add["wa"] = process.env.NEXT_PUBLIC_NAVER_ANALYTICS_ID || "61943fc220ddf0";

            // Call wcs_do if the script is loaded
            if (window.wcs && typeof window.wcs_do === 'function') {
                window.wcs_do();
            }
        }
    }, [pathname]); // Re-run on route changes

    return null;
}
