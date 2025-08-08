import { Viewer } from "@photo-sphere-viewer/core";
// import "@photo-sphere-viewer/core/index.css";

import { EquirectangularTilesAdapter } from "@photo-sphere-viewer/equirectangular-tiles-adapter";

import { Cache } from "@photo-sphere-viewer/core";

import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
// import "@photo-sphere-viewer/virtual-tour-plugin/index.css";

// import { GalleryPlugin } from "@photo-sphere-viewer/gallery-plugin";  // DEBUG: Gallery
// import "@photo-sphere-viewer/gallery-plugin/index.css";

import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
// import "@photo-sphere-viewer/markers-plugin/index.css";

import { getNodes } from "/src/nodes.js";

import { lang } from "/src/lang.js";

Cache.maxItems = 25;

getNodes()  // getNodesFromJSONFile("./data.json")
    .then(nodes => {
        /* DEBUG: Gallery
        var gallery = [];
        nodes.forEach(node => {
            gallery.push({
                id: node.id,
                name: node.name,
                panorama: node.panorama
            })
        });
        */
        // console.log(nodes);

        const viewer = new Viewer({
            plugins: [
                MarkersPlugin.withConfig({
                    defaultHoverScale: true,
                }),
                VirtualTourPlugin.withConfig({
                    positionMode: "manual",
                    nodes: nodes,
                    preload: true,
                    showLinkTooltip: false,
                    renderMode: "2d",  // 3d doesn"t work at all (laggy and wrong position)
                }),
                /* DEBUG: Gallery
                [GalleryPlugin, {
                    items: gallery,
                    // showNodeName: true,
                    // showNodeDescription: true,
                    // showNodeImage: true,
                    // showNodePosition: true,
                    // showNodeLinks: true,
                }],
                */
            ],
            container: document.querySelector(".viewer"),
            adapter: EquirectangularTilesAdapter.withConfig({
                baseBlur: false,
            }),
            navbar: [
                "zoom",
                "move",
                "markersList",
                "caption",
                // "gallery",  // DEBUG: Gallery
                "fullscreen",
                // "markers",
            ],
            lang: lang,
            rendererParameters: {
                debug: false,
            },
        });

        viewer.addEventListener("ready", () => {
            console.log("Viewer is ready!");

            // fetch("/markers.json")
            //     .then(response => response.json())
            //     .then(data => {
            //         getMarkerDataFromJSONFile(viewer, data);
            //     })
            //     .catch(err => {
            //         console.error("Failed to load markers.json:", err);
            //     });
        }, { once: true });

        const markersPlugin = viewer.getPlugin(MarkersPlugin);

        markersPlugin.addEventListener("enter-marker", (e) => {
            const marker = e.marker.config;
            if (marker.data && !marker.data.preloaded) {
                const markerHtml = new DOMParser().parseFromString(marker.content, "text/html");
                const imageToPreload = markerHtml.querySelector("img");

                if (imageToPreload) {
                    const tempImg = new Image();
                    tempImg.src = imageToPreload.src;
                    // console.log(`Preloading image: ${tempImg.src}`);
                }

                marker.data.preloaded = true;
            }
        });

        // /* DEBUG: Click
        viewer.addEventListener("click", ({ data }) => {
            const currNode = viewer.getPlugin("virtual-tour").getCurrentNode()
            const currHeading = currNode.data.heading || 0;

            const adjustedCoordinate = offsetYawPitch(data.yaw, data.pitch, viewer);
            const clickedYaw = (adjustedCoordinate.yaw + currHeading) % (2 * Math.PI);

            console.log(`${data.rightclick ? "right " : ""}clicked at yaw: ${clickedYaw}, pitch: ${adjustedCoordinate.pitch}`);

            console.log(`{
                "id": "some",
                "position": {
                    "yaw": ${clickedYaw},
                    "pitch": ${adjustedCoordinate.pitch}
                },
            },`);
            // console.log(`${data.rightclick ? "right " : ""}clicked at yaw: ${centerCoordinate.yaw * 180 / Math.PI} deg, pitch: ${centerCoordinate.pitch* 180 / Math.PI} deg`);
            // console.log(`${data.rightclick ? "right " : ""}clicked at textureX: ${data.textureX} pitch: ${data.textureY}`);
        });
        // */
    });

// /* DEBUG: Click
function offsetYawPitch(yaw, pitch, viewer, offsetX = 0, offsetY = 0) {
    const vFov = viewer.defaultZoomLvl || 50 * (Math.PI / 180); // Default vertical field of view in radians
    const canvas = viewer.container;

    const pxPerRadY = canvas.clientHeight / vFov;
    const hFov = vFov * (canvas.clientWidth / canvas.clientHeight);
    const pxPerRadX = canvas.clientWidth / hFov;

    const deltaYaw = offsetX / pxPerRadX;
    const deltaPitch = offsetY / pxPerRadY;

    return {
        yaw: yaw + deltaYaw,
        pitch: pitch + deltaPitch
    };
}
// */
