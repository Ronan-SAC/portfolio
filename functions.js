document.addEventListener("DOMContentLoaded", function () {
    const terminalBody = document.getElementById("terminal-body");
    let inputField = document.getElementById("command-input");

    function executeCommand(command) {
        let output = document.createElement("div");
        output.innerHTML = `<span class="prompt">Ronan:~$</span> ${command}`;
        terminalBody.insertBefore(output, inputField.parentElement);

        let response = document.createElement("div");
        switch (command) {
            case "help":
                response.innerHTML = data.commands.help;
                break;
            case "clear":
                terminalBody.innerHTML = "";
                recreateInput();
                return;
            case "experiences":
                response.innerHTML = data.commands.experiences;
                break;
            case "about me":
                response.innerHTML = data.commands.aboutMe;
                break;
            case "get linkedin":
                window.open("https://www.linkedin.com/in/ronan-s-campos/", "_blank");
                response.innerHTML = "Opening LinkedIn in a new tab...";
                break;
            case "get github":
                window.open("https://github.com/Ronan-SAC", "_blank");
                response.innerHTML = "Opening GitHub in a new tab...";
                break;
            case "neofetch":
                response.innerHTML = data.commands.neofetch;
                break;
            default:
                response.textContent = data.defaultResponse;
        }
        terminalBody.insertBefore(response, inputField.parentElement);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function recreateInput() {
        let inputLine = document.createElement("div");
        inputLine.className = "input-line";
        inputLine.innerHTML = '<span class="prompt">Ronan:~$</span> <input type="text" id="command-input" autofocus>';
        terminalBody.appendChild(inputLine);
        inputField = document.getElementById("command-input");
        inputField.focus();
        inputField.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                executeCommand(inputField.value.trim());
                inputField.value = "";
            }
        });
    }

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            executeCommand(inputField.value.trim());
            inputField.value = "";
        }
    });
});

function getScreenResolution() {
    const width = window.screen.width || 'Unknown';
    const height = window.screen.height || 'Unknown';
    return `${width}x${height}`;
}

function getCpuInfo() {
    const cpuCores = navigator.hardwareConcurrency || 'Unknown';
    return `${cpuCores} logical cores`;
}

function getMemoryInfo() {
    if ('deviceMemory' in navigator) {
        const memory = navigator.deviceMemory || 'Unknown';
        return `${memory} GB (estimate, may not reflect the actual total)`;
    } else {
        return `Memory: Not supported in this browser`;
    }
}

function updateSystemInfo() {
    const resolutionElement = document.getElementById('resolution-info');
    const cpuElement = document.getElementById('cpu-info');
    const memoryElement = document.getElementById('memory-info');

    if (resolutionElement) {
        resolutionElement.textContent = getScreenResolution();
    }

    if (cpuElement) {
        cpuElement.textContent = getCpuInfo();
    }

    if (memoryElement) {
        memoryElement.textContent = getMemoryInfo();
    }
}

document.addEventListener('DOMContentLoaded', updateSystemInfo);