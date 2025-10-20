document.addEventListener("DOMContentLoaded", async () => {
    const shortcuts = document.getElementById("shortcuts");
    const res = await (await fetch("/assets/shortcuts.json")).json();
    console.log(res);
    res.forEach(shortcut => {
        const a = document.createElement("a");
        a.href = shortcut.url;
        a.className = "button";
        a.target = "_blank";
        a.textContent = shortcut.name;
        shortcuts.appendChild(a);
    });
});
