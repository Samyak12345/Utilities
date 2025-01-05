import { useEffect } from "react";

const GoogleAnalyticsScript: React.FC = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.async = true;
    script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-186LFYS430');
    `;

    // Append the script to the head
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalyticsScript;
