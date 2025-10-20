const search = () => {
    const url = new URL(window.location);
    const param = url.searchParams

    const query = param.get("q") || "";

    if (!query) {
        location.href = "./";
        return;
    }

    // URL判定
    if(query.startsWith("http://") || query.startsWith("https://")) {
        location.href = query;
        return;
    }

    // 短縮リンク判定
    if(query.startsWith("o:")) {
        const shortCode = query.slice(2);
        location.href = `https://ogtm.dev/${shortCode}`;
        return;
    }

    // GitHub検索判定
    if(query.startsWith("gh:")) {
        const ghQuery = query.slice(3);
        location.href = `https://github.com/search?q=${encodeURIComponent(ghQuery)}`;
        return;
    }

    // Google検索へリダイレクト
    location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

search();
