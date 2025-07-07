/*
export function getMarkerDataFromJSONFile(json_file) {
    fetch(json_file)
        .then(response => response.json())
        .then(data => {
            addMarkersFromJSON(data);
        })
        .catch(err => {
            console.error(`Failed to load ${json_file}: ${err}`);
        });
}
*/

export async function getMarkersFromJSONFile(json_file, heading = 0) {
    const reponse = await fetch(json_file);

    if (!reponse.ok) {
        throw new Error(`Failed to load ${json_file}: ${reponse.statusText}`);
    }

    const jsonData = await reponse.json()
    const markers = getMarkersFromJSON(jsonData, heading);
    // console.log("Markers loaded from JSON file:", markers); DEBUG: log

    return markers;
}

function getMarkersFromJSON(jsonData, heading = 0) {
    var markers = [];

    const typeIconsDict = {
        "tree": "./icons/leaf.circle.fill@2x.png",
    }
    jsonData.forEach(entry => {
        const marker = {
            id: entry.id,
            position: {
                yaw: entry.position.yaw - heading,  // Adjust yaw based on the provided heading (same as for node links)
                pitch: entry.position.pitch,
            },
            size: {
                width: entry.size.width,
                height: entry.size.height,
            },
            image: typeIconsDict[entry.type],
            tooltip: `<strong>${entry.name}</strong>`,
            anchor: "bottom center",
            data: {
                name: entry.name,
                image: entry.image,
                description: entry.description,
                type: entry.type,
            },
            content: getDescriptionHTML(entry),
        };

        markers.push(marker)

        // console.log(`Marker added: ${entry.id} at position (${entry.position.yaw}, ${entry.position.pitch})`); DEBUG: log
    });

    // console.log(`Total markers added: ${markers.length}`); DEBUG: log

    return markers;
}

function getDescriptionHTML(markerData) {
    if (!markerData.image) {
        return `
            <h2>${markerData.name}</h2>
            <p>${markerData.description}</p>
        `;
    }

    return `
        <h2>${markerData.name}</h2>
        <img src="${markerData.image}" alt="${markerData.name}" style="width: 100%; height: auto; max-height: calc(80% - 80px); object-fit: contain; object-position: left; border-radius: 5px;">
        <p>${markerData.description}</p>
    `;
}
