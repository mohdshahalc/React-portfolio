import sys
from PIL import Image, ImageDraw

def make_round_icon(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        size = min(img.size)
        
        # Create a square canvas
        mask = Image.new('L', (size, size), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, size, size), fill=255)
        
        # Crop center
        left = (img.width - size) / 2
        top = (img.height - size) / 2
        right = (img.width + size) / 2
        bottom = (img.height + size) / 2
        
        img = img.crop((left, top, right, bottom))
        
        # Apply mask
        output = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        output.paste(img, (0, 0), mask)
        
        output.save(output_path)
        print(f"Successfully created round icon at {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    make_round_icon('public/profile.png', 'public/profile-round.png')
