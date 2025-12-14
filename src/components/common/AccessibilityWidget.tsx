"use client";

import { useEffect } from 'react';

export default function AccessibilityWidget() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Option 1: UserWay Accessibility Widget (requires free registration at userway.org)
    // Uncomment and replace 'YOUR_USERWAY_ID' with your UserWay account ID
    /*
    const script = document.createElement('script');
    script.src = 'https://cdn.userway.org/widget.js';
    script.setAttribute('data-account', 'YOUR_USERWAY_ID');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const userwayScript = document.querySelector('script[src*="userway"]');
      if (userwayScript && userwayScript.parentNode) {
        userwayScript.parentNode.removeChild(userwayScript);
      }
      const userwayWidget = document.getElementById('userway-accessibility-widget');
      if (userwayWidget) {
        userwayWidget.remove();
      }
    };
    */

    // Option 2: EqualWeb Accessibility Widget (works immediately, free tier available)
    // Uncomment to use EqualWeb instead
    /*
    const equalWebScript = document.createElement('script');
    equalWebScript.src = 'https://cdn.equalweb.com/accessibility/accessibility.js';
    equalWebScript.async = true;
    document.body.appendChild(equalWebScript);

    return () => {
      const script = document.querySelector('script[src*="equalweb"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
    */

    // Option 3: accessiBe Accessibility Widget (popular, requires account)
    // Uncomment and replace 'YOUR_ACCESSIBE_ID' with your accessiBe account ID
    /*
    const accessiBeScript = document.createElement('script');
    accessiBeScript.src = 'https://cdn.accessibe.com/accessibe.min.js?key=YOUR_ACCESSIBE_ID';
    accessiBeScript.async = true;
    document.body.appendChild(accessiBeScript);

    return () => {
      const script = document.querySelector('script[src*="accessibe"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
    */

    // Default: EqualWeb Accessibility Widget (works immediately, free tier)
    // Provides: Font sizing, contrast, text spacing, screen reader, keyboard navigation, and more
    const equalWebScript = document.createElement('script');
    equalWebScript.src = 'https://cdn.equalweb.com/accessibility/accessibility.js';
    equalWebScript.async = true;
    document.body.appendChild(equalWebScript);

    return () => {
      const script = document.querySelector('script[src*="equalweb"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Remove widget if it exists
      const widget = document.getElementById('equalweb_accessibility_widget');
      if (widget) {
        widget.remove();
      }
    };

    // Alternative: To use UserWay instead, comment out EqualWeb above and uncomment below:
    // Then register at https://userway.org (free) and add your ID to .env.local:
    // NEXT_PUBLIC_USERWAY_ID=your_userway_id_here
    /*
    const script = document.createElement('script');
    script.src = 'https://cdn.userway.org/widget.js';
    script.setAttribute('data-account', process.env.NEXT_PUBLIC_USERWAY_ID || 'YOUR_USERWAY_ID');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const userwayScript = document.querySelector('script[src*="userway"]');
      if (userwayScript && userwayScript.parentNode) {
        userwayScript.parentNode.removeChild(userwayScript);
      }
      const userwayWidget = document.getElementById('userway-accessibility-widget');
      if (userwayWidget) {
        userwayWidget.remove();
      }
    };
    */
  }, []);

  return null;
}

