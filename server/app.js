const express = require('express');
const cors = require('cors');

const port = 3000; 
const app = express();

app.use(cors());
app.use(express.json());

function getTone(idea) {
    const text = idea.toLowerCase();
    if (text.includes("portfolio") || text.includes("personal website")) return "creative and professional";
    if (text.includes("shop") || text.includes("store") || text.includes("coffee")|| text.includes("cafe") || text.includes("restaurant")) return "warm and inviting";
    if (text.includes("blog")) return "friendly and engaging";
    if (text.includes("startup") || text.includes("app")|| text.includes("product") || text.includes("service")) return "bold and modern";
    return "professional and friendly";
}

function getFeatures(idea) {
    const text = idea.toLowerCase();
    if (text.includes("portfolio") || text.includes("personal website")) {
        return [
            "Showcase projects or work samples",
            "Include an 'About Me' section",
            "Contact form or contact details",
            "Responsive and modern UI"
        ];
    } else if (text.includes("shop") || text.includes("store") || text.includes("coffee") || text.includes("cafe") || text.includes("restaurant")) {
        return [
            "Display products or menu clearly",
            "Include pricing information",
            "Show location, opening hours, and contact",
            "Mobile friendly design"
        ];
    } else if (text.includes("blog")) {
        return [
            "Organized categories and tags",
            "Readable articles",
            "Comment section for engagement",
            "Mobile optimized layout"
        ];
    } else if (text.includes("startup") || text.includes("app") || text.includes("product") || text.includes("service")) {
        return [
            "Highlight key features of the product",
            "Call-to-action buttons",
            "Clear value proposition",
            "Responsive and modern design"
        ];
    } else {
        return [
            "Clear purpose and target audience",
            "Well-structured layout",
            "Clean and modern UI",
            "Mobile friendly design"
        ];
    }
}

app.post('/improve', (req, res) => {
    const { idea } = req.body;
    const tone = getTone(idea);
    const features = getFeatures(idea);

    const improvedPrompt = `
    Creating a modern, responsive website based on this idea:
    "${idea}"

    The website should include:
    ${features.map(f => `- ${f}`).join("\n")}

    Tone: ${tone}
    `;

    res.json({ improvedPrompt });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
