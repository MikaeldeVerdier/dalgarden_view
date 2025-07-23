import { getMarkersFromJSON } from "/src/markers.js";

import { nodeData } from "/src/data.js";

/*
export async function getNodesFromJSONFile(json_file) {
    const reponse = await fetch(json_file);

    if (!reponse.ok) {
        throw new Error(`Failed to load ${json_file}: ${reponse.statusText}`);
    }

    const jsonData = await reponse.json()
    const nodes = await getNodesFromJSON(jsonData);
    // console.log("Nodes loaded from JSON file:", nodes); DEBUG: log

    return nodes;
}
*/

export async function getNodes() {
    const nodes = await getNodesFromJSON(nodeData);
    // console.log("Nodes loaded from JSON file:", nodes); DEBUG: log

    return nodes;
}

async function getNodesFromJSON(jsonData) {
    var nodes = [];

    for (const entry of jsonData) {
        const nodeMarkers = await getMarkersFromJSON(entry.markers, entry.heading);

        const links = entry.links.map(link => {
            return {
                nodeId: link.nodeId,
                position: {
                    yaw: link.position.yaw - entry.heading,  // link.position.yaw is in default coordinate system but "heading" shifts it
                    pitch: link.position.pitch
                }
            };
        });
        const node = {
            id: entry.id,
            panorama: {
                width: 8192,
                cols: 16,
                rows: 8,
                tileUrl: (col, row) => `/tiles/${entry.id}/panorama_row${row}_col${col}.jpg`,
                baseUrl: `/tiles/${entry.id}/rotated_${entry.id}_10q_0.7.jpg`,
                // basePanoData: { poseHeading: entry.heading * 180 / Math.PI },
            },  // entry.panoramaFile,
            links: links,
            name: entry.name,
            markers: nodeMarkers,
            // panoData: { poseHeading: entry.heading * 180 / Math.PI },  // is for some reason in degrees
            data: {
                heading: entry.heading,
            }
        };

        // console.log(entry.links); DEBUG: log

        nodes.push(node);

        // console.log(`Node added: ${entry.id}`); DEBUG: log
    };

    // console.log(`Total nodes added: ${nodes.length}`); DEBUG: log

    return nodes;
}
