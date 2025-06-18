const data = {
    commands: {
        help: `
            <li><code>help</code>: Show information about available commands</li>
            <li><code>clear</code>: Clear the terminal</li>
            <li><code>experiences</code>: Show a list of my experiences</li>
            <li><code>about me</code>: Show information about me</li>
            <li><code>get linkedin</code>: Link to my LinkedIn</li>
            <li><code>get github</code>: Link to my GitHub</li>
            <li><code>neofetch</code>: Runs a neofetch</li>
        `,
        aboutMe: `{<br>
         <code>"Name"</code> : "Ronan Silva de Andrade e Campos",<br>
         <code>"Education"</code>: "Systems Analysis and Development - Senac Hub Academy",<br>
         <code>"Languages"</code> : "Ruby, Python, JS, TS, PHP ",<br>
         <code>"Framework"</code> : "Ruby on Rails, Vue, Django, React",<br>
         <code>"Favorite IDE"</code>: "VS Code",<br>
         <code>"City"</code> : "Campo Grande, Brazil"<br>
    }`,
        experiences: `
            <strong>Professional Experience:</strong>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dec 2024 - Present</td>
                        <td>BEM | Data Intelligence</td>
                        <td>Intern</td>
                        <td>FullStack development using Rails and Vue</td>
                    </tr>
                </tbody>
            </table> 
        `,
        neofetch: `
            <div class="resume"><pre>                                                        
                                                                      
                        ++                        Ronan's <p class="terminal-line">Portfólio</p>
                       ++++                         OS: <p class="terminal-line">Arch Linux</p>
                      *+++++                        Host: <p class="terminal-line">VirtualBox 1.2</p>
                     ++++++++                       Terminal: <p class="terminal-line">kitty</p>
                    ++++++++++                      Shell: <p class="terminal-line">/bin/fish</p>
                   ++++++++++++                     DE: <p class="terminal-line">Hyprland</p>
                  +++++    +++++                    CPU: <p class="terminal-line" id="cpu-info">Loading...</p>
                 ++++++    ++++++                   Memory: <p class="terminal-line" id="memory-info">Loading...</p>
                ++++*        +++++                  Display: <p class="terminal-line" id="resolution-info">Loading...</p>
               *+                +*                 Server: <p class="terminal-line">github</p>
            </pre></div>
        `,
    },
    defaultResponse: "Command not recognized. Type 'help' to see the list of commands.",
};