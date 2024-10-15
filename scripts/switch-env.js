const fs = require('fs');
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
if (process.stdin.setRawMode != null) {
    process.stdin.setRawMode(true);
}

const CONFIG_DIR = './configs';
const ENV_FILE_PATH = './.env';

// Function to read directory listing and filter for YAML files
function getConfigFileNames() {
    try {
        const files = fs.readdirSync(CONFIG_DIR);
        return files.filter((file) => file.endsWith('.yml'));
    } catch (error) {
        console.error('Error reading config directory:', error.message);
        return [];
    }
}

// Function to display the menu with selection indicator
function displayMenu(files, selectedIndex) {
    console.clear(); // Clear console for a better experience\
    console.log('Use [up]/[down] to navigate, [esc] to exit:');
    files.forEach((file, index) => {
        const arrow = index === selectedIndex ? '>' : ' ';
        console.log(`${arrow} ${file}`);
    });
}

function exec() {
    const files = getConfigFileNames();

    if (files.length === 0) {
        console.log('No YAML files found in src/config');
    } else {
        displayMenu(files, 0); // Initial display with first file selected
        let selectedIndex = 0;
        process.stdin.on('keypress', (str, key) => {
            let navigated = false;

            switch (key.name) {
                case 'up':
                    selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : files.length - 1;
                    navigated = true;
                    break;
                case 'down':
                    selectedIndex = selectedIndex < files.length - 1 ? selectedIndex + 1 : 0;
                    navigated = true;
                    break;
                case 'return':
                    const selectedFile = files[selectedIndex];
                    const data = fs.readFileSync(`${CONFIG_DIR}/${selectedFile}`, 'utf8'); // Read the source file content
                    fs.writeFileSync(ENV_FILE_PATH, data);
                    console.log('Generated .env file successfully!');
                case 'escape':
                    process.exit(0);
                default:
            }

            if (navigated) {
                displayMenu(files, selectedIndex);
            }
        });
    }
}

exec();
