import { getMarkersFromJSON } from "/src/markers.js";

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
            panorama: entry.panoramaFile,
            links: links,
            name: entry.name,
            markers: nodeMarkers,
            panoData: { poseHeading: entry.heading * 180 / Math.PI },  // is for some reason in degrees
        }

        // console.log(entry.links); DEBUG: log

        nodes.push(node);

        // console.log(`Node added: ${entry.id}`); DEBUG: log
    };

    // console.log(`Total nodes added: ${nodes.length}`); DEBUG: log

    return nodes;
}
