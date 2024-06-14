import os
import re

def replace_apostrophes(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace unescaped apostrophes
    new_content = re.sub(r"(\w)'(\w)", r"\1&apos;\2", content)
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(new_content)

def main(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                replace_apostrophes(os.path.join(root, file))

if __name__ == "__main__":
    directory = './app'  # Path to your directory containing TSX files
    main(directory)
