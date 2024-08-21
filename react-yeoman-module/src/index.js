import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main({
    portletNamespace,
    contextPath,
    portletElementId,
    configuration
}) {
    // Ensure the element exists before trying to create a root
    const container = document.getElementById(portletElementId);

    if (container) {
        // Create a root and render the App
        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <App
                    portletNamespace={portletNamespace}
                    contextPath={contextPath}
                    portletElementId={portletElementId}
                    configuration={configuration}
                />
            </React.StrictMode>
        );
    } else {
        console.error(`Element with ID ${portletElementId} not found.`);
    }
}
