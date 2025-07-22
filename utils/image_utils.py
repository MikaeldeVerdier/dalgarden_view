import os
import numpy as np
from PIL import Image

class ImageHandler:
    def __init__(self):
        pass

    def prepare_images(self, node_ids_headings):
        for node_id, heading in node_ids_headings:
            rotated_img, _ = self.roll_yaw(node_id, heading)
            self.split_image(node_id, rotated_img)

    def roll_yaw(self, nodeId, heading, quality=95, lowres_quality=10, lowres_scale=0.7):
        tilesDir = f"./public/tiles/{nodeId}"
        os.makedirs(tilesDir, exist_ok=True)

        img_path = f"./utils/original_panoramas/{nodeId}.JPG"
        img = Image.open(img_path)
        img_arr = np.array(img)

        yaw_deg = (2 * np.pi - heading) * 180 / np.pi
        w = img_arr.shape[1]
        shift_px = int(w * yaw_deg / 360)

        rotated_arr = np.roll(img_arr, shift=shift_px, axis=1)

        rotated_img = Image.fromarray(rotated_arr)
        output_path_rotated_img = f"{tilesDir}/rotated_{nodeId}_{quality}q.jpg"
        rotated_img.save(output_path_rotated_img, quality=quality)

        lowres_img = rotated_img.resize((int(rotated_img.width * lowres_scale), int(rotated_img.height * lowres_scale)))
        output_path_lowres_img = f"{tilesDir}/rotated_{nodeId}_{lowres_quality}q_{lowres_scale}.jpg"
        lowres_img.save(output_path_lowres_img, quality=lowres_quality)

        return rotated_img, lowres_img

    def split_image(self, node_id, img, tile_size=512, quality=95):
        tilesDir = f"./public/tiles/{node_id}"
        os.makedirs(tilesDir, exist_ok=True)

        width, height = img.size

        num_cols = (width + tile_size - 1) // tile_size
        num_rows = (height + tile_size - 1) // tile_size
        for row in range(num_rows):
            for col in range(num_cols):
                left = col * tile_size
                upper = row * tile_size
                right = min(left + tile_size, width)
                lower = min(upper + tile_size, height)
                tile_img = img.crop((left, upper, right, lower))

                out_path_tile_img = f"{tilesDir}/panorama_row{row}_col{col}.jpg"
                tile_img.save(out_path_tile_img, quality=quality)


if __name__ == "__main__":
    image_handler = ImageHandler()

    node_ids_headings = [
        ("dalgard1", 3.3775891123402326),
        ("dalgard2", 5.1553739803636205),
        ("dalgard3", 2.969568331141952),
        ("dalgard4", 5.586846303733822),  # 2.2282876075912337),
        ("dalgard5", 5.725160153120154),
        ("dalgard6", 4.68275101194163),
        ("dalgard7", 1.8923994212038162),
        ("dalgard8", 1.0409990620045637),
        ("dalgard9", 2.5019654985286452),
        ("dalgard10", 0.8935714529222901),
        ("dalgard11", 4.917524762913157),
        ("dalgard12", 5.777985466454688),
        ("dalgard13", 0.3790896004387685),
        ("dalgard14", 1.5955122207909482),
        ("dalgard15", 0.34397741141688487),
        ("dalgard16", 6.143937128521642),
        ("dalgard17", 0.9737829977308656),
        ("dalgard18", 1.4120979712343216),
        ("dalgard19", 0.913741887142094),
        ("dalgard20", 0.494007666948537),
        ("dalgard21", 0.3175431939303857),
        ("dalgard22", 5.5229222982468436)
    ]
    """
    node_ids_headings = [
        ("dalgard1", 0),
        ("dalgard2", 0),
        ("dalgard3", 0),
        ("dalgard4", 0),
        ("dalgard5", 0),
        ("dalgard6", 0),
        ("dalgard7", 0),
        ("dalgard8", 0),
        ("dalgard9", 0),
        ("dalgard10", 0),
        ("dalgard11", 0),
        ("dalgard12", 0),
        ("dalgard13", 0),
        ("dalgard14", 0),
        ("dalgard15", 0),
        ("dalgard16", 0),
        ("dalgard17", 0),
        ("dalgard18", 0),
        ("dalgard19", 0),
        ("dalgard20", 0),
        ("dalgard21", 0),
        ("dalgard22", 0)
    ]
    """
    image_handler.prepare_images(node_ids_headings)
