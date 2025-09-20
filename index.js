const fetch = require("node-fetch");

class Neirost4r {
    constructor(apiUrl = "https://fenst4r.life/api/ai_v5") {
        this.apiUrl = apiUrl;
    }

    async chat(message, profile = "friendly", flags = {}) {
        const payload = { message, profile, flags };
        try {
            const response = await fetch(this.apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            return data.response || "";
        } catch (err) {
            throw new Error(`Ошибка при обращении к API: ${err}`);
        }
    }
}

module.exports = Neirost4r;
