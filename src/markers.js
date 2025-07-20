import { descriptionData } from "/src/data.js"
import { imageData } from "/src/data.js"

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

/*
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
*/

export function getMarkersFromJSON(jsonData, heading = 0) {
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
    const [descriptions, images] = getDescriptionsAndImages(markerData);

    var descriptionHTML = ""
    if (descriptions.length) {
        descriptionHTML += `<div class="description-wrapper">`;
        descriptions.forEach(description => {
            descriptionHTML += `<div class="description-div">`;
            descriptionHTML += `<p>${description}</p>`;
            descriptionHTML += `</div>`;
        });
        descriptionHTML += `</div>`;
    }

    var imagesHTML = ""
    if (images.length) {
        imagesHTML += `<div class="img-wrapper">`;
        images.forEach(image => {
            imagesHTML += `<div class="img-div">`;
            imagesHTML += `<img src="${image}" alt="${markerData.name}" class="img-content">`;
            imagesHTML += `</div>`;
        });
        imagesHTML += `</div>`;
    }

    if (!descriptionHTML && !imagesHTML) {
        return `<h2>${markerData.name}</h2>`;
    }

    if (!descriptionHTML) {
        return `
            <h2>${markerData.name}</h2>
            ${imagesHTML}
        `;
    }

    if (!imagesHTML) {
        return `
            <h2>${markerData.name}</h2>
            ${descriptionHTML}
        `;
    }

    /*
    return `
        <h2>${markerData.name}</h2>
        <img src="${markerData.image}" alt="${markerData.name}" style="width: 100%; height: auto; max-height: calc(80% - 80px); object-fit: contain; object-position: left; border-radius: 5px;">
        ${totalDescription}
    `;
    */
   
    return `
        <h2>${markerData.name}</h2>
        ${imagesHTML}
        ${descriptionHTML}
    `;
}

function getDescriptionsAndImages(markerData) {
    const mainDescription = descriptionData[markerData.name]
    const specificDescription = markerData.description

    var descriptions = [];
    if (mainDescription) {
        descriptions.push(mainDescription);
    }
    if (specificDescription) {
        descriptions.push(specificDescription);
    }

    const mainImages = imageData[markerData.name] || [];
    const specificImages = markerData.images || [];
    const images = mainImages.concat(specificImages);
    // if (mainImage) {
    //     images.push(mainImage);
    // }
    // if (specificImage) {
    //     images.push(specificImage);
    // }

    return [descriptions, images];
}