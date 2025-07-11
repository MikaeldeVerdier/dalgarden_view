import { Viewer } from "@photo-sphere-viewer/core";
// import "@photo-sphere-viewer/core/index.css";

import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
// import "@photo-sphere-viewer/virtual-tour-plugin/index.css";

// import { GalleryPlugin } from "@photo-sphere-viewer/gallery-plugin";  // DEBUG: Gallery
// import "@photo-sphere-viewer/gallery-plugin/index.css";

import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
// import "@photo-sphere-viewer/markers-plugin/index.css";

import { getNodes } from "/src/nodes.js";

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

        const viewer = new Viewer({
            plugins: [
                [MarkersPlugin, {
                    defaultHoverScale: true,
                }],
                [VirtualTourPlugin, {
                    positionMode: "manual",
                    nodes: nodes,
                    preload: true,
                    showLinkTooltip: false,
                    renderMode: "2d",  // 3d doesn"t work at all (laggy and wrong position)
                }],
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
            container: document.querySelector("#viewer"),
            navbar: [
                "zoom",
                "move",
                "markersList",
                "caption",
                // "gallery",  // DEBUG: Gallery
                "fullscreen",
                // "markers",
            ],
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
            const preloadImages = [
                "./trees/blodplommon-leaves.png",
                "./trees/katsura-leaves.png",
                "./trees/lönn-leaves.png",
            ];
            preloadImages.forEach(image => {
                const img = new Image();
                img.src = image;
            });
        }, { once: true });

        /* DEBUG: Click
        viewer.addEventListener("click", ({ data }) => {
            const centerCoordinate = offsetYawPitch(data.yaw, data.pitch, viewer);
            console.log(`${data.rightclick ? "right " : ""}clicked at yaw: ${centerCoordinate.yaw}, pitch: ${centerCoordinate.pitch}`);
            // console.log(`${data.rightclick ? "right " : ""}clicked at yaw: ${centerCoordinate.yaw * 180 / Math.PI} deg, pitch: ${centerCoordinate.pitch* 180 / Math.PI} deg`);
            // console.log(`${data.rightclick ? "right " : ""}clicked at textureX: ${data.textureX} pitch: ${data.textureY}`);
        });
        */
    })

/* DEBUG: Click
function offsetYawPitch(yaw, pitch, viewer, offsetX = 0, offsetY = -16) {
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
*/
