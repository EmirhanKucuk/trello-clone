import formatTodosForAI from "./formatTodosForAI";
const fetchSuggestion = async (board: Board) => {
    const todos = formatTodosForAI(board);
    console.log(todos)
    const res = await fetch("../app/api/generateSummary", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ board })
    });
    console.log(res)
    const GPTdata = await res.json();
    const { content } = GPTdata;
    return content;
}

export default fetchSuggestion;